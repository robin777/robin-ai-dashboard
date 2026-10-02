"use client";

import Podium from "../Podium";
import RankCard from "../RankCard";
import DashCard from "../DashCard";

export default function LeaderboardSection({ topList, currentUserId }) {
  const currentRank = topList.find((u) => u.user_id === currentUserId);
  const currentIdx = topList.findIndex((u) => u.user_id === currentUserId);

  return (
    <>
      <div className="dash-lb-header dash-animate-1">
        <div className="dash-lb-header-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <div>
          <h1 className="dash-section-title tw-mb-0">Leaderboard</h1>
          <p className="tw-text-xs tw-text-white/30 tw-mt-0.5">
            {topList.length > 0
              ? `${topList.length} competitors`
              : "No competitors yet"}
          </p>
        </div>
      </div>

      {topList.length >= 3 && (
        <div className="dash-animate-2">
          <Podium top3={topList.slice(0, 3)} />
        </div>
      )}

      {currentRank && (
        <DashCard className="tw-p-4 tw-mb-4 dash-animate-3">
          <div className="tw-flex tw-items-center tw-gap-3">
            <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-blue-500/10 tw-border tw-border-blue-500/20 tw-flex tw-items-center tw-justify-center tw-text-blue-400">
              <i className="fas fa-user"></i>
            </div>
            <div className="tw-flex-1">
              <div className="tw-text-sm tw-font-semibold tw-text-white/80">
                Your Position
              </div>
              <div className="tw-text-xs tw-text-white/40">
                Rank #{currentIdx + 1} with{" "}
                {Number(currentRank.cash).toLocaleString()} ROBIN AI
              </div>
            </div>
            <div className="dash-rank-value tw-text-base">
              #{currentIdx + 1}
            </div>
          </div>
        </DashCard>
      )}

      <DashCard className="tw-p-2 dash-animate-4">
        <div className="tw-space-y-1">
          {topList.length === 0 ? (
            <div className="dash-empty">
              <div className="dash-empty-icon">
                <i className="fas fa-ranking-star"></i>
              </div>
              <div className="dash-empty-title">No users yet</div>
              <div className="dash-empty-desc">
                Be the first to earn coins and claim the throne
              </div>
            </div>
          ) : (
            topList.map((u, i) => (
              <RankCard
                key={u.user_id}
                rank={i + 1}
                user={u}
                isYou={u.user_id === currentUserId}
              />
            ))
          )}
        </div>
      </DashCard>

      {currentUserId && !currentRank && (
        <div className="tw-mt-4 dash-animate-5">
          <div className="tw-text-[11px] tw-text-white/20 tw-mb-2 tw-text-center tw-uppercase tw-tracking-wider tw-font-semibold">
            Your Position
          </div>
          <DashCard className="tw-p-2">
            <RankCard
              rank={topList.length + 1}
              user={{ user_id: currentUserId, cash: 0 }}
              isYou={true}
            />
          </DashCard>
        </div>
      )}
    </>
  );
}
