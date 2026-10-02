"use client";

import { useState, useMemo } from "react";
import ToggleSwitch from "./ToggleSwitch";

function highlightText(text, query) {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="tw-text-blue-400 tw-font-semibold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
}

const COLOR_MAP = {
  Economy: "economy",
  Social: "social",
  Utility: "utility",
  System: "system",
  Other: "other",
};

export default function CommandCategoryCard({
  category,
  icon,
  commands,
  disabled,
  collapsed,
  onToggleCollapse,
  onToggle,
  onBulkToggle,
  highlighted,
  flashMap,
  sortBy,
  usageData,
}) {
  const [confirmBulk, setConfirmBulk] = useState(null);

  const enabledCount = commands.filter(
    (c) => disabled.indexOf(c.name) === -1,
  ).length;
  const disabledCount = commands.length - enabledCount;
  const allEnabled = disabledCount === 0;
  const allDisabled = enabledCount === 0;
  const progress =
    commands.length > 0 ? (enabledCount / commands.length) * 100 : 100;
  const colorKey = COLOR_MAP[category] || "other";

  const masterLabel = useMemo(() => {
    if (allEnabled) return "Disable All";
    if (allDisabled) return "Enable All";
    return "Disable All";
  }, [allEnabled, allDisabled]);

  const handleBulkClick = () => {
    if (!allEnabled) {
      setConfirmBulk("disable");
    } else {
      onBulkToggle(category, true);
    }
  };

  const confirmBulkAction = (yes) => {
    if (yes) onBulkToggle(category, false);
    setConfirmBulk(null);
  };

  const sortedCommands = useMemo(() => {
    const cmds = [...commands];
    if (sortBy === "name")
      return cmds.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "disabled")
      return cmds.sort((a, b) => {
        const aOff = disabled.indexOf(a.name) > -1 ? 0 : 1;
        const bOff = disabled.indexOf(b.name) > -1 ? 0 : 1;
        return aOff - bOff;
      });
    return cmds;
  }, [commands, sortBy, disabled]);

  const enabledCmds = sortedCommands.filter(
    (c) => disabled.indexOf(c.name) === -1,
  );
  const disabledCmds = sortedCommands.filter(
    (c) => disabled.indexOf(c.name) > -1,
  );
  const showDivider =
    sortBy === "disabled" && enabledCmds.length > 0 && disabledCmds.length > 0;

  return (
    <div className={`cmd-category-card cmd-category-card--${colorKey}`}>
      <div className="cmd-progress-bar">
        <div
          className={`cmd-progress-bar-fill cmd-progress-bar-fill--${colorKey}`}
          style={{ width: progress + "%" }}
        ></div>
      </div>

      <div
        className="tw-flex tw-items-center tw-gap-3 tw-mb-4 tw-cursor-pointer tw-select-none"
        onClick={onToggleCollapse}
      >
        <span className="tw-text-xl">{icon}</span>
        <h3 className="tw-text-sm tw-font-semibold tw-flex-1">{category}</h3>
        <span className="cmd-count-badge">
          <span className="tw-text-emerald-400">{enabledCount}</span>
          <span className="tw-text-white/20">/</span>
          <span>{commands.length}</span>
        </span>
        <i
          className={`fas fa-chevron-down tw-text-[10px] tw-text-white/30 tw-transition-transform tw-duration-300 ${collapsed ? "tw--rotate-90" : ""}`}
        ></i>
      </div>

      <div
        className={`cmd-card-body ${collapsed ? "" : "cmd-card-body--open"}`}
      >
        <div>
          <div className="tw-flex tw-items-center tw-justify-end tw-mb-3 tw-relative">
            {confirmBulk ? (
              <div className="cmd-confirm">
                <p>Disable all commands in {category}?</p>
                <div className="cmd-confirm-actions">
                  <button onClick={() => confirmBulkAction(true)}>
                    Yes, Disable
                  </button>
                  <button onClick={() => confirmBulkAction(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleBulkClick}
                className="tw-text-[11px] tw-font-medium tw-text-white/40 hover:tw-text-blue-400 tw-transition-colors tw-cursor-pointer tw-bg-transparent tw-border-none tw-p-0"
              >
                {masterLabel}
              </button>
            )}
          </div>

          <div className="tw-space-y-1">
            {showDivider && disabledCmds.length > 0 && (
              <div className="cmd-divider">
                <span>Disabled</span>
              </div>
            )}
            {sortedCommands.map((cmd) => {
              const isDisabled = disabled.indexOf(cmd.name) > -1;
              const isFlashed = flashMap && flashMap[cmd.name];
              const cmdUsage = usageData && usageData[cmd.name];
              return (
                <div key={cmd.name}>
                  <div
                    className={`cmd-row ${isDisabled ? "cmd-row--disabled" : ""} ${isFlashed ? "cmd-row--flash" : ""}`}
                  >
                    <div className="tw-flex tw-items-center tw-gap-2.5 tw-flex-1 tw-min-w-0">
                      <span
                        className={`cmd-status-dot ${isDisabled ? "cmd-status-dot--off" : "cmd-status-dot--on"}`}
                      ></span>
                      <div className="tw-flex-1 tw-min-w-0">
                        <div className="tw-text-sm tw-font-medium tw-text-white/80">
                          /{highlightText(cmd.name, highlighted)}
                        </div>
                        <div className="tw-text-xs tw-text-white/30 tw-truncate">
                          {highlightText(
                            cmd.description || "No description",
                            highlighted,
                          )}
                        </div>
                        {cmdUsage && (
                          <div className="cmd-usage-bar">
                            <div className="cmd-usage-bar-track">
                              <div
                                className="cmd-usage-bar-fill"
                                style={{
                                  width:
                                    (cmdUsage.enabled /
                                      Math.max(
                                        cmdUsage.enabled + cmdUsage.disabled,
                                        1,
                                      )) *
                                      100 +
                                    "%",
                                }}
                              ></div>
                            </div>
                            <span className="cmd-usage-bar-label">
                              {cmdUsage.enabled} on / {cmdUsage.disabled} off
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <ToggleSwitch
                      checked={!isDisabled}
                      onChange={() => onToggle(cmd.name)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="tw-mt-4 tw-pt-3 tw-border-t tw-border-white/5 tw-text-xs tw-text-white/30">
            {enabledCount} enabled
            {disabledCount > 0 ? `, ${disabledCount} off` : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
