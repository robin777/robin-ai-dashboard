"use client";

import DashCard from "../DashCard";
import {
  GoldMedal,
  SilverMedal,
  BronzeMedal,
} from "@/components/svg/MedalIcons";

const fmt = (n) => {
  if (n == null) return "\u2014";
  return Number(n).toLocaleString();
};

export default function OverviewSection({
  user,
  economy,
  topList,
  guilds,
  selectedGuild,
  onNavigate,
}) {
  const guildObj = guilds.find((g) => g.id === selectedGuild) || null;
  return (
    <>
      {guildObj && (
        <div className="dash-server-header dash-animate-1">
          <div className="dash-server-header-icon">
            {guildObj.icon ? (
              <img
                src={
                  typeof guildObj.icon === "string" &&
                  guildObj.icon.startsWith("http")
                    ? guildObj.icon
                    : "https://cdn.discordapp.com/icons/" +
                      guildObj.id +
                      "/" +
                      guildObj.icon +
                      ".png?size=96"
                }
                alt=""
              />
            ) : (
              <i className="fas fa-server"></i>
            )}
          </div>
          <div className="dash-server-header-info">
            <div className="dash-server-header-name">{guildObj.name}</div>
            <div className="dash-server-header-meta">
              <span className="dash-server-header-meta-item">
                <i className="fas fa-users"></i>
                {guildObj.memberCount
                  ? guildObj.memberCount.toLocaleString() + " members"
                  : "Members"}
              </span>
              <span className="dash-server-header-meta-item">
                <i className="fas fa-robot"></i>
                ROBIN AI Bot
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="dash-animate-1 tw-mb-5">
        <h1 className="dash-section-title tw-mb-1">
          Welcome back,{" "}
          <span className="dash-hero-accent">{user?.username || "User"}</span>
        </h1>
        <p className="tw-text-sm tw-text-white/30">
          Here&apos;s what&apos;s happening in your server
        </p>
      </div>

      <div className="dash-grid-2">
        <DashCard className="tw-p-5 dash-animate-3">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
            <h3 className="tw-text-sm tw-font-semibold tw-text-white/70">
              Economy Snapshot
            </h3>
            <button onClick={() => onNavigate("economy")} className="dash-link">
              Details <i className="fas fa-arrow-right tw-text-[10px]"></i>
            </button>
          </div>
          <div className="tw-space-y-3">
            {[
              {
                label: "Bank Reserve",
                value: economy ? fmt(economy.bankBalance) : "\u2014",
                color: "tw-text-blue-400",
              },
              {
                label: "Circulation",
                value: economy ? fmt(economy.totalCirculation) : "\u2014",
                color: "tw-text-emerald-400",
              },
              {
                label: "Active Users",
                value: economy ? fmt(economy.activeUsers) : "\u2014",
                color: "tw-text-purple-400",
              },
              {
                label: "Depletion",
                value: economy ? economy.depletionRate + "%" : "\u2014",
                color: "tw-text-orange-400",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="tw-flex tw-items-center tw-justify-between tw-py-2 tw-border-b tw-border-white/[0.04] last:tw-border-0"
              >
                <span className="tw-text-xs tw-text-white/40">
                  {item.label}
                </span>
                <span className={`tw-text-sm tw-font-semibold ${item.color}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard className="tw-p-5 dash-animate-4">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
            <h3 className="tw-text-sm tw-font-semibold tw-text-white/70">
              Top Members
            </h3>
            <button
              onClick={() => onNavigate("leaderboard")}
              className="dash-link"
            >
              Full Board <i className="fas fa-arrow-right tw-text-[10px]"></i>
            </button>
          </div>
          {topList.length === 0 ? (
            <div className="dash-empty">
              <div className="dash-empty-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="dash-empty-title">No users yet</div>
              <div className="dash-empty-desc">
                Members will appear here once they start earning
              </div>
            </div>
          ) : (
            <div className="tw-space-y-1">
              {topList.slice(0, 5).map((u, i) => {
                const medals = [GoldMedal, SilverMedal, BronzeMedal];
                const MedalIcon = medals[i];
                return (
                  <div key={u.user_id} className="dash-rank-row">
                    {MedalIcon ? (
                      <MedalIcon />
                    ) : (
                      <span className="tw-w-7 tw-text-center tw-text-xs tw-font-bold tw-text-white/20">
                        #{i + 1}
                      </span>
                    )}
                    <div className="dash-rank-avatar">
                      {(u.display_name || u.user_id).charAt(0).toUpperCase()}
                    </div>
                    <span className="dash-rank-name">
                      {u.display_name || u.user_id.slice(0, 8)}
                    </span>
                    <span className="dash-rank-value">{fmt(u.cash)}</span>
                  </div>
                );
              })}
            </div>
          )}
        </DashCard>
      </div>

      <div className="dash-actions dash-animate-5">
        {[
          {
            icon: "fas fa-coins",
            label: "Economy",
            section: "economy",
            color: "tw-text-blue-400",
          },
          {
            icon: "fas fa-trophy",
            label: "Leaderboard",
            section: "leaderboard",
            color: "tw-text-amber-400",
          },
          {
            icon: "fas fa-terminal",
            label: "Commands",
            section: "commands",
            color: "tw-text-purple-400",
          },
          {
            icon: "fas fa-user",
            label: "Profile",
            section: "profile",
            color: "tw-text-emerald-400",
          },
        ].map((action, i) => (
          <button
            key={action.section}
            onClick={() => onNavigate(action.section)}
            className={`dash-action-card dash-animate-${i + 5}`}
          >
            <div className={`dash-action-icon ${action.color}`}>
              <i className={action.icon}></i>
            </div>
            <div className="dash-action-label">{action.label}</div>
          </button>
        ))}
      </div>
    </>
  );
}
