"use client";

import { useState, useEffect } from "react";

const SECTION_LABELS = {
  overview: "Overview",
  economy: "Economy",
  leaderboard: "Leaderboard",
  commands: "Commands",
  profile: "My Profile",
};

export default function DashboardNavbar({
  user,
  onToggleSidebar,
  selectedGuild,
  guilds,
  activeSection,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getAvatarUrl = (id, hash, size) => {
    if (!hash) return null;
    return (
      "https://cdn.discordapp.com/avatars/" +
      id +
      "/" +
      hash +
      ".png?size=" +
      (size || 32)
    );
  };

  const guildObj = guilds.find((g) => g.id === selectedGuild) || null;
  const sectionLabel = SECTION_LABELS[activeSection] || "Dashboard";

  return (
    <nav className={`dash-nav ${scrolled ? "dash-nav-scrolled" : ""}`}>
      <div className="tw-flex tw-items-center tw-gap-3">
        <button
          onClick={onToggleSidebar}
          className="tw-lg:tw-hidden tw-w-8 tw-h-8 tw-rounded-lg hover:tw-bg-white/5 tw-flex tw-items-center tw-justify-center tw-text-white/50"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="dash-breadcrumb">
          {guildObj ? (
            <>
              <span className="dash-breadcrumb-server">{guildObj.name}</span>
              <span className="dash-breadcrumb-sep">
                <i className="fas fa-chevron-right"></i>
              </span>
              <span className="dash-breadcrumb-section">{sectionLabel}</span>
            </>
          ) : (
            <span className="dash-breadcrumb-section">Dashboard</span>
          )}
        </div>
      </div>

      <div className="tw-flex tw-items-center tw-gap-2">
        {user ? (
          <div className="dash-nav-user">
            {getAvatarUrl(user.id, user.avatar, 32) ? (
              <img
                src={getAvatarUrl(user.id, user.avatar, 32)}
                className="dash-nav-user-avatar"
                alt=""
              />
            ) : (
              <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-blue-500/15 tw-flex tw-items-center tw-justify-center tw-text-[11px] tw-font-bold tw-text-blue-400">
                {user.username ? user.username.charAt(0).toUpperCase() : "L"}
              </div>
            )}
            <span className="dash-nav-user-name tw-hidden sm:tw-inline">
              {user.username || "User"}
            </span>
          </div>
        ) : (
          <div className="dash-nav-user">
            <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-white/5 tw-animate-pulse" />
            <span className="tw-text-[13px] tw-text-white/30 tw-hidden sm:tw-inline">
              Loading...
            </span>
          </div>
        )}
        <a
          href="/auth/logout"
          className="tw-w-8 tw-h-8 tw-rounded-lg hover:tw-bg-red-500/10 tw-flex tw-items-center tw-justify-center tw-text-white/20 hover:tw-text-red-400 tw-transition-all"
          title="Logout"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </a>
      </div>

      <div className="dash-nav-bottom" />
    </nav>
  );
}
