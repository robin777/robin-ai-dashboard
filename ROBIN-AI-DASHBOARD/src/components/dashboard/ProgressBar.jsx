export default function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
}) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div className="dash-progress">
      {label && (
        <div className="dash-progress-label">
          <span>{label}</span>
          {showValue && (
            <span>
              {value.toLocaleString()} / {max.toLocaleString()}
            </span>
          )}
        </div>
      )}
      <svg width="100%" height="6" style={{ display: "block" }}>
        <rect width="100%" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect height="6" rx="3" fill="url(#dashBarGrad)" width="0%">
          <animate
            attributeName="width"
            from="0%"
            to={`${pct}%`}
            dur="1s"
            fill="freeze"
          />
        </rect>
        <defs>
          <linearGradient id="dashBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
