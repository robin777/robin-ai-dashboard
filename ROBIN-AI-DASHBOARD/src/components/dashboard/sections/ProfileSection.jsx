"use client";

import { useState, useEffect } from "react";
import DashCard from "../DashCard";
import LevelRing from "@/components/svg/LevelRing";

const getXpForLevel = (level) => Math.round(Math.pow(level / 0.1, 2));

export default function ProfileSection({ user, guildId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;
    fetch("/api/user/" + user.id + "?guildId=" + encodeURIComponent(guildId || ""), { credentials: "same-origin" })
      .then((r) => r.json())
      .then((data) => {
        if (data) setProfile(data);
      })
      .catch(() => {});
  }, [user, guildId]);

  const fmt = (n) => {
    if (n === null || n === undefined) return "—";
    return Number(n).toLocaleString();
  };
  const getAvatarUrl = (id, hash, size) => {
    if (!hash) return null;
    return (
      "https://cdn.discordapp.com/avatars/" +
      id +
      "/" +
      hash +
      ".png?size=" +
      (size || 128)
    );
  };

  if (!user) {
    return (
      <>
        <h1 className="dash-section-title tw-mb-6">My Profile</h1>
        <DashCard className="dash-empty">
          <div className="dash-empty-icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="dash-empty-title">Not logged in</div>
          <div className="dash-empty-desc">
            Please log in to view your profile
          </div>
        </DashCard>
      </>
    );
  }

  const initial = user.username ? user.username.charAt(0).toUpperCase() : "L";
  const avatarSrc = getAvatarUrl(user.id, user.avatar, 128);
  const textLevel = profile ? profile.textLevel || 0 : 0;
  const voiceLevel = profile ? profile.voiceLevel || 0 : 0;
  const textXp = profile
    ? profile.activity
      ? profile.activity.text_xp || 0
      : 0
    : 0;
  const voiceXp = profile
    ? profile.activity
      ? profile.activity.voice_xp || 0
      : 0
    : 0;
  const textNext = getXpForLevel(textLevel + 1);
  const textCur = getXpForLevel(textLevel);
  const voiceNext = getXpForLevel(voiceLevel + 1);
  const voiceCur = getXpForLevel(voiceLevel);
  const textPct =
    textNext > textCur ? ((textXp - textCur) / (textNext - textCur)) * 100 : 0;
  const voicePct =
    voiceNext > voiceCur
      ? ((voiceXp - voiceCur) / (voiceNext - voiceCur)) * 100
      : 0;

  return (
    <>
      <DashCard className="dash-animate-1 tw-mb-6">
        <div className="dash-profile-hero">
          <div className="dash-profile-avatar-ring">
            <div className="dash-profile-avatar-inner">
              {avatarSrc ? (
                <img src={avatarSrc} alt={user.username} />
              ) : (
                initial
              )}
            </div>
          </div>
          <h2 className="tw-text-xl tw-font-bold tw-mb-1">
            {user.username || "—"}
          </h2>
          <div className="tw-flex tw-gap-2 tw-mt-2">
            <span className="dash-stat-pill dash-stat-pill-blue">
              <i className="fas fa-trophy tw-text-[10px]"></i>
              Rank #{profile ? fmt(profile.rank) : "—"}
            </span>
            <span className="dash-stat-pill dash-stat-pill-orange">
              <i className="fas fa-fire tw-text-[10px]"></i>
              {profile ? profile.streak + "d" : "—"} streak
            </span>
          </div>
        </div>
      </DashCard>

      <div className="tw-grid sm:tw-grid-cols-3 tw-gap-3 tw-mb-6 dash-animate-2">
        {[
          {
            icon: "fas fa-coins",
            value: profile ? fmt(profile.user.cash) : "—",
            label: "Cash",
            color: "tw-text-blue-400",
            bg: "tw-bg-blue-500/8",
            border: "tw-border-blue-500/10",
          },
          {
            icon: "fas fa-chart-line",
            value: profile ? fmt(profile.totalEarned) : "—",
            label: "Total Earned",
            color: "tw-text-purple-400",
            bg: "tw-bg-purple-500/8",
            border: "tw-border-purple-500/10",
          },
          {
            icon: "fas fa-exchange-alt",
            value: profile ? fmt(profile.txnCount) : "—",
            label: "Transactions",
            color: "tw-text-emerald-400",
            bg: "tw-bg-emerald-500/8",
            border: "tw-border-emerald-500/10",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} ${stat.border} tw-border tw-rounded-xl tw-p-4 tw-text-center tw-transition-all hover:tw--translate-y-0.5`}
          >
            <div
              className={`${stat.color} tw-text-xl tw-font-extrabold tw-mb-1`}
            >
              {stat.value}
            </div>
            <div className="tw-text-[11px] tw-text-white/30 tw-font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 tw-mb-6 dash-animate-3">
        <DashCard>
          <div className="dash-ring-card">
            <div className="dash-ring-card-title">Text Activity</div>
            <LevelRing
              value={textXp - textCur}
              max={textNext - textCur || 1}
              level={textLevel}
              size={130}
              color="#3b82f6"
              label="Text XP"
            />
            <div className="tw-mt-4 tw-w-full">
              <div className="tw-flex tw-items-center tw-justify-between tw-text-xs tw-mb-2">
                <span className="tw-text-white/40">Progress to next level</span>
                <span className="tw-text-blue-400 tw-font-semibold">
                  {Math.round(textPct)}%
                </span>
              </div>
              <div className="tw-h-1.5 tw-rounded-full tw-bg-white/[0.04] tw-overflow-hidden">
                <div
                  className="tw-h-full tw-rounded-full tw-bg-gradient-to-r tw-from-blue-600 tw-to-blue-400 tw-transition-all tw-duration-1000"
                  style={{ width: textPct + "%" }}
                ></div>
              </div>
              <div className="tw-text-[11px] tw-text-white/25 tw-mt-1.5">
                {fmt(textXp)} / {fmt(textNext)} XP
              </div>
            </div>
          </div>
        </DashCard>
        <DashCard>
          <div className="dash-ring-card">
            <div className="dash-ring-card-title">Voice Activity</div>
            <LevelRing
              value={voiceXp - voiceCur}
              max={voiceNext - voiceCur || 1}
              level={voiceLevel}
              size={130}
              color="#8b5cf6"
              label="Voice XP"
            />
            <div className="tw-mt-4 tw-w-full">
              <div className="tw-flex tw-items-center tw-justify-between tw-text-xs tw-mb-2">
                <span className="tw-text-white/40">Progress to next level</span>
                <span className="tw-text-purple-400 tw-font-semibold">
                  {Math.round(voicePct)}%
                </span>
              </div>
              <div className="tw-h-1.5 tw-rounded-full tw-bg-white/[0.04] tw-overflow-hidden">
                <div
                  className="tw-h-full tw-rounded-full tw-bg-gradient-to-r tw-from-purple-600 tw-to-purple-400 tw-transition-all tw-duration-1000"
                  style={{ width: voicePct + "%" }}
                ></div>
              </div>
              <div className="tw-text-[11px] tw-text-white/25 tw-mt-1.5">
                {fmt(voiceXp)} / {fmt(voiceNext)} XP
              </div>
            </div>
          </div>
        </DashCard>
      </div>

      <ProfileTransactions userId={user.id} />
    </>
  );
}

function ProfileTransactions({ userId }) {
  const [txns, setTxns] = useState(null);
  useEffect(() => {
    if (!userId) return;
    fetch("/api/user/" + userId + "/transactions?limit=10", {
      credentials: "same-origin",
    })
      .then((r) => r.json())
      .then((data) => setTxns(data))
      .catch(() => {});
  }, [userId]);

  const fmt = (n) => {
    if (n === null || n === undefined) return "—";
    return Number(n).toLocaleString();
  };

  return (
    <DashCard className="tw-p-5 dash-animate-4">
      <h3 className="tw-text-sm tw-font-semibold tw-text-white/70 tw-mb-4">
        Recent Transactions
      </h3>
      <div>
        {!txns ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
            <div className="dash-empty-title">Loading...</div>
          </div>
        ) : txns.length === 0 ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="dash-empty-title">No transactions yet</div>
            <div className="dash-empty-desc">
              Your transaction history will appear here
            </div>
          </div>
        ) : (
          txns.map((t, i) => {
            const isOut = t.from_id === userId;
            const otherId = isOut ? t.to_id : t.from_id;
            const otherLabel = otherId
              ? otherId.slice(0, 8) + "..."
              : "unknown";
            return (
              <div key={i} className="dash-txn-row">
                <div
                  className={`dash-txn-icon ${isOut ? "dash-txn-icon-out" : "dash-txn-icon-in"}`}
                >
                  <i className={`fas fa-arrow-${isOut ? "up" : "down"}`}></i>
                </div>
                <div className="dash-txn-details">
                  <div className="dash-txn-label">
                    {isOut ? "Sent to" : "Received from"}{" "}
                    <strong>{otherLabel}</strong>
                  </div>
                  <div className="dash-txn-meta">
                    {t.created_at ? t.created_at.slice(0, 10) : "—"}
                    {t.reason ? ` \u00b7 ${t.reason}` : ""}
                  </div>
                </div>
                <div
                  className={`dash-txn-amount ${isOut ? "dash-txn-amount-out" : "dash-txn-amount-in"}`}
                >
                  {isOut ? "-" : "+"}
                  {fmt(t.amount)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </DashCard>
  );
}
