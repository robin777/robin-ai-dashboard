"use client";

import { useState, useRef, useEffect } from "react";

const SERVER_MODULES = [
  { id: "overview", icon: "fas fa-chart-line", label: "Overview" },
  { id: "economy", icon: "fas fa-coins", label: "Economy" },
  { id: "leaderboard", icon: "fas fa-trophy", label: "Leaderboard" },
  { id: "commands", icon: "fas fa-terminal", label: "Commands" },
];

const GENERAL_ITEMS = [
  { id: "profile", icon: "fas fa-user", label: "My Profile" },
];

function formatUptime(ms) {
  if (!ms) return "\u2014";
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000) % 60;
  const h = Math.floor(ms / 3600000) % 24;
  const d = Math.floor(ms / 86400000);
  const p = [];
  if (d) p.push(d + "d");
  if (h) p.push(h + "h");
  if (m) p.push(m + "m");
  p.push(s + "s");
  return p.join(" ");
}

export default function DashboardSidebar({
  activeSection,
  onSectionChange,
  sidebarOpen,
  botInfo,
  guilds = [],
  selectedGuild,
  onGuildChange,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedGuildObj = guilds.find((g) => g.id === selectedGuild) || null;

  useEffect(() => {
    if (!dropdownOpen) return;
    const handle = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [dropdownOpen]);

  const handleGuildSelect = (guildId) => {
    onGuildChange(guildId);
    setDropdownOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="tw-fixed tw-inset-0 tw-bg-black/60 tw-backdrop-blur-sm tw-z-30 lg:tw-hidden"
          onClick={() => onSectionChange(activeSection)}
        />
      )}

      <aside
        className={`dash-sidebar ${sidebarOpen ? "dash-sidebar-open" : ""}`}
      >
        <div className="dash-sidebar-nav">
          <a
            href="/"
            className="tw-flex tw-items-center tw-gap-2.5 tw-px-2 tw-py-2 tw-mb-3 tw-no-underline"
          >
            <img
              src="/logo.png"
              alt="ROBIN AI"
              className="tw-w-7 tw-h-7 tw-rounded-lg"
            />
            <span className="tw-text-sm tw-font-bold tw-text-white tw-tracking-tight">
              ROBIN AI
            </span>
          </a>

          <div className="tw-relative" ref={dropdownRef}>
            <button
              className="dash-server-select"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="dash-server-select-icon">
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
              <div className="dash-server-select-info">
                <div className="dash-server-select-name">
                  {selectedGuildObj ? selectedGuildObj.name : "Select a server"}
                </div>
                {selectedGuildObj && (
                  <div className="dash-server-select-sub">
                    {selectedGuildObj.memberCount
                      ? selectedGuildObj.memberCount.toLocaleString() +
                        " members"
                      : "Server"}
                  </div>
                )}
              </div>
              <i
                className={`fas fa-chevron-down dash-server-select-chevron ${dropdownOpen ? "dash-server-select-chevron-open" : ""}`}
              ></i>
            </button>

            {dropdownOpen && (
              <div className="dash-server-dropdown">
                {guilds.length === 0 ? (
                  <div className="tw-text-xs tw-text-center tw-py-3 tw-text-white/20">
                    No servers available
                  </div>
                ) : (
                  guilds.map((g) => (
                    <button
                      key={g.id}
                      className={`dash-server-dropdown-item ${selectedGuild === g.id ? "dash-server-dropdown-item-active" : ""}`}
                      onClick={() => handleGuildSelect(g.id)}
                    >
                      <div className="dash-server-dropdown-icon">
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
                      <span
                        style={{
                          flex: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {g.name}
                      </span>
                      {g.memberCount && (
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.2)",
                          }}
                        >
                          {g.memberCount.toLocaleString()}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {selectedGuild && (
            <>
              <div className="dash-sidebar-divider" />
              <div className="dash-sidebar-section-label">Server Modules</div>
              {SERVER_MODULES.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`dash-sidebar-item ${active ? "dash-sidebar-item-active" : ""}`}
                  >
                    <span className="dash-sidebar-item-icon">
                      <i className={item.icon}></i>
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </>
          )}

          <div className="dash-sidebar-divider" />
          <div className="dash-sidebar-section-label">General</div>
          {GENERAL_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`dash-sidebar-item ${active ? "dash-sidebar-item-active" : ""}`}
              >
                <span className="dash-sidebar-item-icon">
                  <i className={item.icon}></i>
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="dash-sidebar-footer">
          <div className="dash-sidebar-bot-status">
            <div
              className={`dash-sidebar-status-dot ${botInfo?.status === "online" ? "dash-sidebar-status-dot-online" : "dash-sidebar-status-dot-starting"}`}
            />
            <div className="tw-flex-1 tw-min-w-0">
              <div className="dash-sidebar-bot-name">
                {botInfo?.status === "online" ? "Bot Online" : "Starting..."}
              </div>
              {botInfo?.uptime && (
                <div className="dash-sidebar-bot-uptime">
                  {formatUptime(botInfo.uptime)}
                </div>
              )}
            </div>
          </div>
          <div className="dash-sidebar-links">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="dash-sidebar-link"
            >
              Support
            </a>
            <a href="/" className="dash-sidebar-link">
              Home
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
