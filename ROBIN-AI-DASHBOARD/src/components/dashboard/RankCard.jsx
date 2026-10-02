export default function RankCard({ rank, user, isYou = false }) {
  const fmt = (n) => Number(n).toLocaleString();
  const medal =
    rank === 1
      ? "\ud83e\udd47"
      : rank === 2
        ? "\ud83e\udd48"
        : rank === 3
          ? "\ud83e\udd49"
          : null;

  return (
    <div className={`dash-rank-row ${isYou ? "dash-rank-row-you" : ""}`}>
      <div className="dash-rank-pos">{medal || `#${rank}`}</div>
      <div className="dash-rank-avatar">
        {(user.display_name || user.user_id).charAt(0).toUpperCase()}
      </div>
      <div className="dash-rank-name">
        {user.display_name || user.user_id.slice(0, 12)}
        {isYou && <span className="dash-rank-you-badge">YOU</span>}
      </div>
      <div className="dash-rank-value">{fmt(user.cash)}</div>
    </div>
  );
}
