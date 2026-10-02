"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import ToggleSwitch from "../ToggleSwitch";
import DashCard from "../DashCard";

const categories = [
  {
    name: "Economy",
    icon: "fas fa-coins",
    key: "economy",
    commands: ["balance", "daily", "pay", "bank", "inject"],
  },
  {
    name: "Social",
    icon: "fas fa-trophy",
    key: "social",
    commands: ["top", "profile", "rank", "transactions"],
  },
  {
    name: "Utility",
    icon: "fas fa-sliders-h",
    key: "utility",
    commands: ["ping", "uptime", "user"],
  },
  {
    name: "System",
    icon: "fas fa-terminal",
    key: "system",
    commands: ["refresh", "vote"],
  },
];

const CATEGORY_MAP = {};
categories.forEach((cat) => {
  cat.commands.forEach((cmd) => {
    CATEGORY_MAP[cmd] = cat;
  });
});

const commandDescriptions = {
  balance: "Check your or someone else's balance",
  daily: "Claim your daily reward",
  pay: "Send coins to another user",
  bank: "View your bank account",
  inject: "Inject coins into the economy",
  top: "View the server leaderboard",
  profile: "View your or someone else's profile",
  rank: "View your server rank",
  transactions: "View your recent transactions",
  ping: "Check bot latency",
  uptime: "Check bot uptime",
  user: "Get information about a user",
  refresh: "Refresh bot data",
  vote: "Vote for the bot",
};

const DEVELOPER_USER_ID = "1074674182832521226";
const DEVELOPER_COMMANDS = ["uptime", "refresh", "inject"];

const AUTOCOMPLETE_LIMIT = 5;

function getAliasConfig(cfg) {
  if (cfg.aliases && Array.isArray(cfg.aliases)) return cfg.aliases;
  if (cfg.alias) return [cfg.alias];
  return [];
}

export default function CommandsSection({
  user,
  state,
  loadGuildConfig,
  toggleCommand,
  toggleBatch,
  saveCommandConfig,
  saveBatchCommandConfig,
}) {
  const [selectedGuild, setSelectedGuild] = useState(state.selectedGuild || "");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({
    Economy: true,
    Social: true,
    Utility: true,
    System: true,
  });
  const [editingCommand, setEditingCommand] = useState(null);
  const [flashed, setFlashed] = useState({});
  const [toast, setToast] = useState(null);
  const [serverDropdownOpen, setServerDropdownOpen] = useState(false);
  const [confirmBulk, setConfirmBulk] = useState(null);
  const [localConfigs, setLocalConfigs] = useState({});
  const [dirtyConfigs, setDirtyConfigs] = useState({});
  const [pendingConfigs, setPendingConfigs] = useState({});
  const [savingCategory, setSavingCategory] = useState(null);
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [pendingGuildSwitch, setPendingGuildSwitch] = useState(null);

  const toastTimer = useRef(null);
  const dropdownRef = useRef(null);

  const disabled = state.disabledCommands || [];
  const allCommands = state.commands || [];
  const isDeveloper = user && user.id === DEVELOPER_USER_ID;
  const commands = useMemo(
    () =>
      isDeveloper
        ? allCommands
        : allCommands.filter((c) => DEVELOPER_COMMANDS.indexOf(c.name) === -1),
    [allCommands, isDeveloper],
  );
  const commandConfig = state.commandConfig || {};
  const guildRoles = state.guildRoles || [];
  const guildChannels = state.guildChannels || [];
  const guilds = state.guilds || [];

  const selectedGuildObj = useMemo(
    () => guilds.find((g) => g.id === selectedGuild) || null,
    [guilds, selectedGuild],
  );

  const hasUnsavedChanges = Object.keys(pendingConfigs).length > 0;

  useEffect(() => {
    if (
      state.selectedGuild !== undefined &&
      state.selectedGuild !== selectedGuild
    ) {
      setSelectedGuild(state.selectedGuild || "");
      setEditingCommand(null);
      setLocalConfigs({});
      setDirtyConfigs({});
      setPendingConfigs({});
      setConfirmBulk(null);
    }
  }, [state.selectedGuild]);

  useEffect(() => {
    if (selectedGuild) loadGuildConfig(selectedGuild);
    setEditingCommand(null);
    setLocalConfigs({});
    setDirtyConfigs({});
    setPendingConfigs({});
    setConfirmBulk(null);
    setSearchQuery("");
  }, [selectedGuild]);

  useEffect(() => {
    if (!serverDropdownOpen) return;
    const handleMouseDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServerDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [serverDropdownOpen]);

  const showToast = useCallback((msg, undoFn) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message: msg, undoFn });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  const getCmdConfig = useCallback(
    (cmdName) => {
      if (localConfigs[cmdName]) return localConfigs[cmdName];
      return (
        commandConfig[cmdName] || {
          aliases: [],
          alias: "",
          allowedRoles: [],
          deniedRoles: [],
          allowedChannels: [],
          deniedChannels: [],
        }
      );
    },
    [localConfigs, commandConfig],
  );

  const handleToggle = useCallback(
    (cmdName) => {
      if (!selectedGuild) return;
      toggleCommand(selectedGuild, cmdName);
      setFlashed((prev) => ({ ...prev, [cmdName]: true }));
      setTimeout(
        () => setFlashed((prev) => ({ ...prev, [cmdName]: false })),
        600,
      );
      const isCurrentlyDisabled = disabled.indexOf(cmdName) !== -1;
      showToast(
        isCurrentlyDisabled ? `Enabled /${cmdName}` : `Disabled /${cmdName}`,
        () => {
          toggleCommand(selectedGuild, cmdName);
        },
      );
    },
    [selectedGuild, toggleCommand, disabled, showToast],
  );

  const toggleCategoryExpand = useCallback((catName) => {
    setExpandedCategories((prev) => ({ ...prev, [catName]: !prev[catName] }));
  }, []);

  const searchMatch = useCallback(
    (cmdName) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const name = cmdName.toLowerCase();
      const desc = (commandDescriptions[cmdName] || "").toLowerCase();
      return name.indexOf(q) !== -1 || desc.indexOf(q) !== -1;
    },
    [searchQuery],
  );

  const visibleCategories = useMemo(() => {
    return categories.filter((cat) => {
      if (activeFilter !== "All" && cat.name !== activeFilter) return false;
      return cat.commands.some(
        (cmd) => commands.some((c) => c.name === cmd) && searchMatch(cmd),
      );
    });
  }, [activeFilter, commands, searchMatch]);

  const getCategoryStats = useCallback(
    (cat) => {
      const catCmds = cat.commands.filter((cmd) =>
        commands.some((c) => c.name === cmd),
      );
      const enabled = catCmds.filter((cmd) => disabled.indexOf(cmd) === -1);
      return { total: catCmds.length, enabled: enabled.length };
    },
    [commands, disabled],
  );

  const getCategoryDirtyCount = useCallback(
    (cat) => {
      const catCmds = cat.commands.filter((cmd) =>
        commands.some((c) => c.name === cmd),
      );
      return catCmds.filter((cmd) => dirtyConfigs[cmd]).length;
    },
    [commands, dirtyConfigs],
  );

  const handleBulkDisable = useCallback(
    (cat) => {
      const catCmds = cat.commands.filter((cmd) =>
        commands.some((c) => c.name === cmd),
      );
      const enabled = catCmds.filter((cmd) => disabled.indexOf(cmd) === -1);
      if (enabled.length > 0) {
        setConfirmBulk(cat.name);
      }
    },
    [commands, disabled],
  );

  const confirmBulkDisable = useCallback(() => {
    if (!confirmBulk || !selectedGuild) return;
    const cat = categories.find((c) => c.name === confirmBulk);
    if (!cat) return;
    const catCmds = cat.commands.filter((cmd) =>
      commands.some((c) => c.name === cmd),
    );
    const enabled = catCmds.filter((cmd) => disabled.indexOf(cmd) === -1);
    if (toggleBatch) {
      toggleBatch(selectedGuild, enabled, true);
    } else {
      enabled.forEach((cmd) => toggleCommand(selectedGuild, cmd));
    }
    setConfirmBulk(null);
    showToast(`Disabled ${enabled.length} commands in ${cat.name}`);
  }, [
    confirmBulk,
    selectedGuild,
    commands,
    disabled,
    toggleCommand,
    toggleBatch,
    showToast,
  ]);

  const handleBulkEnable = useCallback(
    (cat) => {
      if (!selectedGuild) return;
      const catCmds = cat.commands.filter((cmd) =>
        commands.some((c) => c.name === cmd),
      );
      const disabledInCat = catCmds.filter(
        (cmd) => disabled.indexOf(cmd) !== -1,
      );
      if (toggleBatch) {
        toggleBatch(selectedGuild, disabledInCat, false);
      } else {
        disabledInCat.forEach((cmd) => toggleCommand(selectedGuild, cmd));
      }
      showToast(`Enabled ${disabledInCat.length} commands in ${cat.name}`);
    },
    [selectedGuild, commands, disabled, toggleCommand, toggleBatch, showToast],
  );

  const markDirty = useCallback((cmdName, updatedConfig) => {
    setLocalConfigs((prev) => ({ ...prev, [cmdName]: updatedConfig }));
    setDirtyConfigs((prev) => ({ ...prev, [cmdName]: true }));
    setPendingConfigs((prev) => ({ ...prev, [cmdName]: updatedConfig }));
  }, []);

  const handleAddAlias = useCallback(
    (cmdName, value) => {
      if (!value || !value.trim()) return;
      const trimmed = value.trim().toLowerCase();
      const cfg = getCmdConfig(cmdName);
      const aliases = getAliasConfig(cfg);
      if (aliases.indexOf(trimmed) !== -1) return false;
      const updated = { ...cfg, aliases: [...aliases, trimmed] };
      markDirty(cmdName, updated);
      return true;
    },
    [getCmdConfig, markDirty],
  );

  const handleRemoveAlias = useCallback(
    (cmdName, alias) => {
      const cfg = getCmdConfig(cmdName);
      const aliases = getAliasConfig(cfg).filter((a) => a !== alias);
      const updated = { ...cfg, aliases };
      markDirty(cmdName, updated);
    },
    [getCmdConfig, markDirty],
  );

  const handleAddChip = useCallback(
    (cmdName, field, value) => {
      if (!value) return;
      const cfg = getCmdConfig(cmdName);
      const arr = cfg[field] || [];
      if (arr.indexOf(value) !== -1) return;
      const updated = { ...cfg, [field]: [...arr, value] };
      markDirty(cmdName, updated);
    },
    [getCmdConfig, markDirty],
  );

  const handleRemoveChip = useCallback(
    (cmdName, field, value) => {
      const cfg = getCmdConfig(cmdName);
      const arr = (cfg[field] || []).filter((v) => v !== value);
      const updated = { ...cfg, [field]: arr };
      markDirty(cmdName, updated);
    },
    [getCmdConfig, markDirty],
  );

  const handleSaveCategory = useCallback(
    async (cat) => {
      if (!selectedGuild || !saveBatchCommandConfig) return;
      const catCmds = cat.commands.filter((cmd) =>
        commands.some((c) => c.name === cmd),
      );
      const dirty = catCmds.filter((cmd) => dirtyConfigs[cmd]);
      if (dirty.length === 0) return;

      setSavingCategory(cat.name);
      const configsToSend = {};
      dirty.forEach((cmd) => {
        const cfg = getCmdConfig(cmd);
        configsToSend[cmd] = {
          aliases: getAliasConfig(cfg),
          alias: getAliasConfig(cfg)[0] || "",
          allowedRoles: cfg.allowedRoles || [],
          deniedRoles: cfg.deniedRoles || [],
          allowedChannels: cfg.allowedChannels || [],
          deniedChannels: cfg.deniedChannels || [],
        };
      });

      const result = await saveBatchCommandConfig(selectedGuild, configsToSend);
      if (result) {
        setDirtyConfigs((prev) => {
          const next = { ...prev };
          dirty.forEach((cmd) => {
            delete next[cmd];
          });
          return next;
        });
        setPendingConfigs((prev) => {
          const next = { ...prev };
          dirty.forEach((cmd) => {
            delete next[cmd];
          });
          return next;
        });
        showToast(`Saved ${dirty.length} command configs`);
      } else {
        showToast("Failed to save configs");
      }
      setSavingCategory(null);
    },
    [
      selectedGuild,
      saveBatchCommandConfig,
      commands,
      dirtyConfigs,
      getCmdConfig,
      showToast,
    ],
  );

  const handleDiscardChanges = useCallback(() => {
    setLocalConfigs({});
    setDirtyConfigs({});
    setPendingConfigs({});
    if (pendingGuildSwitch) {
      setSelectedGuild(pendingGuildSwitch);
      setPendingGuildSwitch(null);
    }
    setShowUnsavedWarning(false);
    showToast("Changes discarded");
  }, [pendingGuildSwitch, showToast]);

  const handleServerSelect = useCallback(
    (guildId) => {
      if (hasUnsavedChanges) {
        setPendingGuildSwitch(guildId);
        setShowUnsavedWarning(true);
        return;
      }
      setSelectedGuild(guildId);
      setServerDropdownOpen(false);
    },
    [hasUnsavedChanges],
  );

  const getRoleName = useCallback(
    (id) => {
      const role = guildRoles.find((r) => r.id === id);
      return role ? role.name : "Unknown Role";
    },
    [guildRoles],
  );

  const getChannelName = useCallback(
    (id) => {
      const ch = guildChannels.find((c) => c.id === id);
      return ch ? "#" + ch.name : "Unknown Channel";
    },
    [guildChannels],
  );

  const filterTabs = ["All", ...categories.map((c) => c.name)];

  return (
    <>
      <div className="dash-lb-header">
        <div className="dash-lb-header-icon">
          <i className="fas fa-terminal"></i>
        </div>
        <div className="tw-flex-1">
          <h1 className="dash-section-title tw-mb-0">Commands</h1>
          <p className="tw-text-xs tw-text-white/30 tw-mt-0.5">
            Manage and configure bot commands per server
          </p>
        </div>

        <div className="cmd-server-wrap" ref={dropdownRef}>
          <button
            className={
              "cmd-server-btn" +
              (hasUnsavedChanges ? " cmd-server-btn--blocked" : "")
            }
            onClick={() => {
              if (hasUnsavedChanges) {
                setShowUnsavedWarning((prev) => !prev);
                return;
              }
              setServerDropdownOpen((prev) => !prev);
            }}
          >
            <div className="cmd-server-btn-icon">
              {selectedGuildObj ? (
                selectedGuildObj.icon ? (
                  <img
                    src={
                      typeof selectedGuildObj.icon === "string" &&
                      selectedGuildObj.icon.startsWith("http")
                        ? selectedGuildObj.icon
                        : "https://cdn.discordapp.com/icons/" +
                          selectedGuildObj.id +
                          "/" +
                          selectedGuildObj.icon +
                          ".png"
                    }
                    alt=""
                  />
                ) : (
                  <i className="fas fa-server"></i>
                )
              ) : (
                <i className="fas fa-server"></i>
              )}
            </div>
            <span className="cmd-server-btn-name">
              {selectedGuildObj ? selectedGuildObj.name : "Select a server"}
            </span>
            <i
              className={
                "fas fa-chevron-down cmd-server-btn-chevron" +
                (serverDropdownOpen ? " cmd-server-btn-chevron--open" : "")
              }
            ></i>
          </button>

          {showUnsavedWarning && (
            <div className="cmd-unsaved-warning">
              <p>You have unsaved changes. Switch server will discard them.</p>
              <div className="cmd-unsaved-warning-actions">
                <button
                  onClick={() => {
                    setShowUnsavedWarning(false);
                    setPendingGuildSwitch(null);
                  }}
                >
                  Cancel
                </button>
                <button onClick={handleDiscardChanges}>Discard & Switch</button>
              </div>
            </div>
          )}

          {serverDropdownOpen && (
            <div className="cmd-server-dropdown">
              {guilds.length === 0 ? (
                <div className="tw-text-xs tw-text-center tw-py-3 tw-text-white/30">
                  No servers available
                </div>
              ) : (
                guilds.map((g) => (
                  <button
                    key={g.id}
                    className={
                      "cmd-server-option" +
                      (selectedGuild === g.id
                        ? " cmd-server-option--active"
                        : "")
                    }
                    onClick={() => handleServerSelect(g.id)}
                  >
                    <div className="cmd-server-option-icon">
                      {g.icon ? (
                        <img
                          src={
                            typeof g.icon === "string" &&
                            g.icon.startsWith("http")
                              ? g.icon
                              : "https://cdn.discordapp.com/icons/" +
                                g.id +
                                "/" +
                                g.icon +
                                ".png"
                          }
                          alt=""
                        />
                      ) : (
                        <i className="fas fa-server"></i>
                      )}
                    </div>
                    <span className="cmd-server-option-name">{g.name}</span>
                    <span className="cmd-server-option-count">
                      {g.memberCount
                        ? g.memberCount.toLocaleString() + " members"
                        : ""}
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {selectedGuild && (
        <div className="cmd-search-wrap">
          <i className="fas fa-search cmd-search-icon"></i>
          <input
            type="text"
            className="cmd-search"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="tw-absolute tw-right-3 tw-top-1/2 tw--translate-y-1/2 tw-text-white/30 hover:tw-text-white/60 tw-transition-colors tw-bg-transparent tw-border-none tw-cursor-pointer"
              onClick={() => setSearchQuery("")}
            >
              <i className="fas fa-xmark"></i>
            </button>
          )}
        </div>
      )}

      {selectedGuild && (
        <div className="cmd-input-bar">
          <ul className="cmd-pills" role="tablist">
            {filterTabs.map((tab) => (
              <li
                key={tab}
                className={
                  "cmd-pill" + (activeFilter === tab ? " cmd-pill--active" : "")
                }
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!selectedGuild && guilds.length > 0 && (
        <DashCard className="dash-empty">
          <div className="dash-empty-icon">
            <i className="fas fa-server"></i>
          </div>
          <div className="dash-empty-title">No Server Selected</div>
          <div className="dash-empty-desc">
            Choose a server from the dropdown above to manage its commands
          </div>
        </DashCard>
      )}

      {guilds.length === 0 && (
        <DashCard className="dash-empty">
          <div className="dash-empty-icon">
            <i className="fas fa-server"></i>
          </div>
          <div className="dash-empty-title">No Servers Found</div>
          <div className="dash-empty-desc">
            The bot doesn&apos;t appear to be in any servers you have access to
          </div>
        </DashCard>
      )}

      {selectedGuild &&
        visibleCategories.map((cat) => {
          const stats = getCategoryStats(cat);
          const isOpen = expandedCategories[cat.name];
          const catCmds = cat.commands.filter(
            (cmd) => commands.some((c) => c.name === cmd) && searchMatch(cmd),
          );
          const progressPct =
            stats.total > 0 ? (stats.enabled / stats.total) * 100 : 0;
          const allDisabled = stats.enabled === 0 && stats.total > 0;
          const dirtyCount = getCategoryDirtyCount(cat);

          return (
            <div key={cat.name} className="cmd-cat-card">
              <div className="cmd-cat-progress">
                <div
                  className={
                    "cmd-cat-progress-fill cmd-cat-progress-fill--" + cat.key
                  }
                  style={{ width: progressPct + "%" }}
                ></div>
              </div>

              <div
                className="cmd-cat-header"
                onClick={() => toggleCategoryExpand(cat.name)}
              >
                <div className={"cmd-cat-icon cmd-cat-icon--" + cat.key}>
                  <i className={cat.icon}></i>
                </div>
                <span className="cmd-cat-name">{cat.name}</span>
                <span className="cmd-cat-badge">
                  <span className="cmd-cat-badge-on">{stats.enabled}</span>
                  <span className="cmd-cat-badge-sep">/</span>
                  <span className="cmd-cat-badge-total">{stats.total}</span>
                </span>

                <button
                  className="cmd-cat-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (allDisabled) {
                      handleBulkEnable(cat);
                    } else {
                      handleBulkDisable(cat);
                    }
                  }}
                >
                  {allDisabled ? "Enable All" : "Disable All"}
                </button>

                <i
                  className={
                    "fas fa-chevron-down cmd-cat-chevron" +
                    (isOpen ? " cmd-cat-chevron--open" : "")
                  }
                ></i>
              </div>

              <div
                className={
                  "cmd-cat-body" + (isOpen ? " cmd-cat-body--open" : "")
                }
              >
                <div>
                  <div className="cmd-cat-inner">
                    {confirmBulk === cat.name && (
                      <div className="cmd-confirm tw-mb-3">
                        <p>
                          Disable all {stats.enabled} enabled commands in{" "}
                          {cat.name}?
                        </p>
                        <div className="cmd-confirm-actions">
                          <button onClick={confirmBulkDisable}>
                            Yes, disable
                          </button>
                          <button onClick={() => setConfirmBulk(null)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {catCmds.map((cmd) => {
                      const isDisabled = disabled.indexOf(cmd) !== -1;
                      const isFlashed = flashed[cmd];
                      const isEditing = editingCommand === cmd;
                      const cfg = getCmdConfig(cmd);
                      const isDirty = dirtyConfigs[cmd];

                      return (
                        <div key={cmd}>
                          <div
                            className={
                              "cmd-row" +
                              (isDisabled ? " cmd-row--disabled" : "") +
                              (isFlashed ? " cmd-row--flash" : "")
                            }
                          >
                            <div className="cmd-row-left">
                              <div
                                className={
                                  "cmd-status-dot" +
                                  (isDisabled
                                    ? " cmd-status-dot--off"
                                    : " cmd-status-dot--on")
                                }
                              ></div>
                              <div className="cmd-row-info">
                                <div className="cmd-row-name">/{cmd}</div>
                                <div className="cmd-row-desc">
                                  {commandDescriptions[cmd] || "No description"}
                                </div>
                              </div>
                            </div>
                            <div className="cmd-row-right">
                              <button
                                className={
                                  "cmd-configure-btn" +
                                  (isEditing
                                    ? " cmd-configure-btn--active"
                                    : "") +
                                  (isDirty ? " cmd-configure-btn--dirty" : "")
                                }
                                onClick={() =>
                                  setEditingCommand(isEditing ? null : cmd)
                                }
                              >
                                <i className="fas fa-cog"></i>
                                Configure
                              </button>
                              <ToggleSwitch
                                checked={!isDisabled}
                                onChange={() => handleToggle(cmd)}
                              />
                            </div>
                          </div>

                          {isEditing && (
                            <div className="cmd-config">
                              <div className="cmd-config-section">
                                <label className="cmd-config-label">
                                  Aliases
                                </label>
                                <AliasInput
                                  cmdName={cmd}
                                  cfg={cfg}
                                  onAdd={handleAddAlias}
                                  onRemove={handleRemoveAlias}
                                />
                              </div>

                              <div className="cmd-config-section">
                                <label className="cmd-config-label">
                                  Allowed Roles
                                </label>
                                <RoleChannelAutocomplete
                                  items={guildRoles}
                                  selectedIds={cfg.allowedRoles || []}
                                  type="role"
                                  onAdd={(id) =>
                                    handleAddChip(cmd, "allowedRoles", id)
                                  }
                                  onRemove={(id) =>
                                    handleRemoveChip(cmd, "allowedRoles", id)
                                  }
                                  getLabel={(r) => r.name}
                                />
                              </div>

                              <div className="cmd-config-section">
                                <label className="cmd-config-label">
                                  Denied Roles
                                </label>
                                <RoleChannelAutocomplete
                                  items={guildRoles}
                                  selectedIds={cfg.deniedRoles || []}
                                  type="role"
                                  onAdd={(id) =>
                                    handleAddChip(cmd, "deniedRoles", id)
                                  }
                                  onRemove={(id) =>
                                    handleRemoveChip(cmd, "deniedRoles", id)
                                  }
                                  getLabel={(r) => r.name}
                                />
                              </div>

                              <div className="cmd-config-section">
                                <label className="cmd-config-label">
                                  Allowed Channels
                                </label>
                                <RoleChannelAutocomplete
                                  items={guildChannels}
                                  selectedIds={cfg.allowedChannels || []}
                                  type="channel"
                                  onAdd={(id) =>
                                    handleAddChip(cmd, "allowedChannels", id)
                                  }
                                  onRemove={(id) =>
                                    handleRemoveChip(cmd, "allowedChannels", id)
                                  }
                                  getLabel={(c) => "#" + c.name}
                                />
                              </div>

                              <div className="cmd-config-section">
                                <label className="cmd-config-label">
                                  Denied Channels
                                </label>
                                <RoleChannelAutocomplete
                                  items={guildChannels}
                                  selectedIds={cfg.deniedChannels || []}
                                  type="channel"
                                  onAdd={(id) =>
                                    handleAddChip(cmd, "deniedChannels", id)
                                  }
                                  onRemove={(id) =>
                                    handleRemoveChip(cmd, "deniedChannels", id)
                                  }
                                  getLabel={(c) => "#" + c.name}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {catCmds.length === 0 && (
                      <div className="tw-text-xs tw-text-white/30 tw-py-3 tw-text-center">
                        No commands found
                      </div>
                    )}
                  </div>

                  <div className="cmd-cat-footer">
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <span>
                        {stats.enabled} of {stats.total} commands enabled
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "cmd-save-bar" +
                      (dirtyCount > 0 ? " cmd-save-bar--visible" : "")
                    }
                  >
                    <span className="cmd-save-bar-text">
                      <strong>{dirtyCount}</strong> command
                      {dirtyCount !== 1 ? "s" : ""} modified
                    </span>
                    <div className="tw-flex tw-gap-2">
                      <button
                        className="cmd-save-cancel"
                        onClick={() => {
                          const catCmdsAll = cat.commands.filter((cmd) =>
                            commands.some((c) => c.name === cmd),
                          );
                          const dirty = catCmdsAll.filter(
                            (cmd) => dirtyConfigs[cmd],
                          );
                          setLocalConfigs((prev) => {
                            const next = { ...prev };
                            dirty.forEach((cmd) => {
                              delete next[cmd];
                            });
                            return next;
                          });
                          setDirtyConfigs((prev) => {
                            const next = { ...prev };
                            dirty.forEach((cmd) => {
                              delete next[cmd];
                            });
                            return next;
                          });
                          setPendingConfigs((prev) => {
                            const next = { ...prev };
                            dirty.forEach((cmd) => {
                              delete next[cmd];
                            });
                            return next;
                          });
                        }}
                      >
                        Revert
                      </button>
                      <button
                        className="cmd-save-btn"
                        disabled={savingCategory === cat.name}
                        onClick={() => handleSaveCategory(cat)}
                      >
                        {savingCategory === cat.name ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i> Saving...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-check"></i> Save
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {selectedGuild && visibleCategories.length === 0 && (
        <DashCard className="dash-empty">
          <div className="dash-empty-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="dash-empty-title">No commands found</div>
          <div className="dash-empty-desc">
            Try a different search term or filter
          </div>
        </DashCard>
      )}

      {toast && (
        <div className="cmd-toast">
          <i
            className={
              "fas " +
              (toast.undoFn
                ? "fa-check-circle tw-text-emerald-400"
                : "fa-info-circle tw-text-white/40")
            }
          ></i>
          <span>{toast.message}</span>
          {toast.undoFn && (
            <button
              onClick={() => {
                toast.undoFn();
                setToast(null);
              }}
            >
              Undo
            </button>
          )}
        </div>
      )}
    </>
  );
}

function AliasInput({ cmdName, cfg, onAdd, onRemove }) {
  const [value, setValue] = useState("");
  const aliases = getAliasConfig(cfg);
  const inputRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const trimmed = value.trim().toLowerCase();
        if (!trimmed) return;
        if (aliases.indexOf(trimmed) !== -1) return;
        onAdd(cmdName, trimmed);
        setValue("");
      }
    },
    [value, aliases, cmdName, onAdd],
  );

  return (
    <div className="cmd-alias-wrap">
      {aliases.length > 0 && (
        <div className="cmd-alias-chips">
          {aliases.map((alias) => (
            <span key={alias} className="cmd-alias-chip">
              {alias}
              <button
                className="cmd-alias-chip-remove"
                onClick={() => onRemove(cmdName, alias)}
              >
                <i className="fas fa-xmark"></i>
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        ref={inputRef}
        type="text"
        className="cmd-alias-input"
        placeholder="Type alias and press Enter..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {aliases.length === 0 && (
        <span className="cmd-alias-hint">No aliases set</span>
      )}
    </div>
  );
}

function RoleChannelAutocomplete({
  items,
  selectedIds,
  type,
  onAdd,
  onRemove,
  getLabel,
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items
      .filter((item) => selectedIds.indexOf(item.id) === -1)
      .filter((item) => !q || (item.name || "").toLowerCase().indexOf(q) !== -1)
      .slice(0, AUTOCOMPLETE_LIMIT);
  }, [items, selectedIds, query]);

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);

  const handleSelect = useCallback(
    (item) => {
      onAdd(item.id);
      setQuery("");
      inputRef.current && inputRef.current.focus();
    },
    [onAdd],
  );

  const iconClass = type === "role" ? "fas fa-shield-halved" : "fas fa-hashtag";

  return (
    <div>
      <div className="cmd-autocomplete" ref={wrapRef}>
        <input
          ref={inputRef}
          type="text"
          className="cmd-autocomplete-input"
          placeholder={
            type === "role" ? "Search roles..." : "Search channels..."
          }
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
        {open && filtered.length > 0 && (
          <div className="cmd-autocomplete-dropdown">
            {filtered.map((item) => (
              <button
                key={item.id}
                className="cmd-autocomplete-item"
                onClick={() => handleSelect(item)}
              >
                <i className={iconClass}></i>
                {getLabel(item)}
              </button>
            ))}
          </div>
        )}
        {open && query && filtered.length === 0 && (
          <div className="cmd-autocomplete-dropdown">
            <div className="cmd-autocomplete-empty">No results found</div>
          </div>
        )}
      </div>
      <div
        className="cmd-chips"
        style={{ marginTop: selectedIds.length > 0 ? 6 : 0 }}
      >
        {selectedIds.length === 0 && (
          <span className="cmd-chips-empty">
            No {type === "role" ? "roles" : "channels"} selected
          </span>
        )}
        {selectedIds.map((id) => {
          const item = items.find((i) => i.id === id);
          const label = item ? getLabel(item) : "Unknown";
          return (
            <span key={id} className={"cmd-chip cmd-chip--" + type}>
              {label}
              <button className="cmd-chip-remove" onClick={() => onRemove(id)}>
                <i className="fas fa-xmark"></i>
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
