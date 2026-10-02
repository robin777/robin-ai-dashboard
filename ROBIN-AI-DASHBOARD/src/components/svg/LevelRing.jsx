export default function LevelRing({
  value = 0,
  max = 100,
  level = 0,
  size = 100,
  color = "#22d3ee",
  label = "",
}) {
  const r = (size - 12) / 2;
  const circumference = 2 * Math.PI * r;
  const pct = max > 0 ? Math.min(value / max, 1) : 0;
  const filledLength = circumference * pct;
  const gapLength = circumference - filledLength;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
    >
      <defs>
        <linearGradient
          id={`ringGrad-${label}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="6"
      />

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={`url(#ringGrad-${label})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`0 ${circumference}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      >
        <animate
          attributeName="stroke-dasharray"
          from={`0 ${circumference}`}
          to={`${filledLength} ${gapLength}`}
          dur="1.2s"
          fill="freeze"
        />
      </circle>

      {pct > 0.02 && (
        <g>
          <animateMotion
            path={`M${cx},${cy - r} A${r},${r} 0 ${pct > 0.5 ? 1 : 0},1 ${cx + r * Math.sin(2 * Math.PI * pct)},${cy - r * Math.cos(2 * Math.PI * pct)}`}
            dur="1.2s"
            fill="freeze"
          />
          <circle r="4" fill={color} opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0.7"
              dur="1.2s"
              fill="freeze"
            />
          </circle>
        </g>
      )}

      <text
        x={cx}
        y={cy - 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={size * 0.28}
        fontWeight="700"
        fill={color}
        fontFamily="Geist Sans, sans-serif"
        opacity="0"
      >
        {level}
        <animate
          attributeName="opacity"
          values="0; 1"
          dur="0.6s"
          begin="0.5s"
          fill="freeze"
        />
      </text>

      {label && (
        <text
          x={cx}
          y={cy + size * 0.16}
          textAnchor="middle"
          fontSize={size * 0.1}
          fill="rgba(242,240,232,0.4)"
          fontFamily="Geist Sans, sans-serif"
          fontWeight="500"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
