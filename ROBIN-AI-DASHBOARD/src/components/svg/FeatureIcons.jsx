export function EconomyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <ellipse
        cx="24"
        cy="26"
        rx="14"
        ry="14"
        fill="none"
        stroke="url(#coinGrad)"
        strokeWidth="2"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 26; 360 24 26"
          dur="8s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </ellipse>
      <ellipse
        cx="24"
        cy="26"
        rx="10"
        ry="10"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.4"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#fbbf24"
        fontFamily="sans-serif"
      >
        L
      </text>

      <g transform="translate(10, 12)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.25; 1; 0.25"
            dur="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="2" fill="#fbbf24" opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0.8; 0"
              dur="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(38, 14)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.28; 1; 0.28"
            dur="2.5s"
            begin="0.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="1.8" fill="#fbbf24" opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0.7; 0"
              dur="2.5s"
              begin="0.8s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
      <circle cx="36" cy="38" r="1" fill="#f59e0b" opacity="0">
        <animate
          attributeName="opacity"
          values="0; 0.6; 0"
          dur="3s"
          begin="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>
    </svg>
  );
}

export function BankIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <polygon
        points="24,6 6,18 42,18"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <rect
        x="8"
        y="18"
        width="32"
        height="2"
        fill="#22d3ee"
        opacity="0.6"
        rx="1"
      />

      <rect
        x="12"
        y="20"
        width="3"
        height="16"
        fill="#22d3ee"
        opacity="0.5"
        rx="1"
      />
      <rect
        x="22"
        y="20"
        width="3"
        height="16"
        fill="#22d3ee"
        opacity="0.5"
        rx="1"
      />
      <rect
        x="32"
        y="20"
        width="3"
        height="16"
        fill="#22d3ee"
        opacity="0.5"
        rx="1"
      />

      <rect
        x="6"
        y="36"
        width="36"
        height="3"
        fill="#22d3ee"
        opacity="0.6"
        rx="1"
      />

      <g transform="translate(24, 28)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.75; 1.5; 0.75"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.2; 0.6; 0.2"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
        <circle cx="0" cy="0" r="1.5" fill="#22d3ee" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.4; 1; 0.4"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
      </g>
    </svg>
  );
}

export function ActivityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      {[
        [8, 14],
        [17, 22],
        [26, 18],
        [35, 28],
      ].map(([x, h], i) => (
        <g key={i} transform={`translate(${x}, 36)`}>
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 0; 1 1; 1 1"
              dur="1.5s"
              begin={`${i * 0.2}s`}
              fill="freeze"
              calcMode="spline"
              keyTimes="0; 1; 1"
              keySplines="0.42 0 0.58 1"
            />
            <rect
              x="0"
              y={-h}
              width="6"
              height={h}
              fill="#10b981"
              rx="1"
              opacity={0.7 + i * 0.06}
            />
          </g>
        </g>
      ))}

      <line
        x1="6"
        y1="37"
        x2="43"
        y2="37"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.4"
      />

      <path
        d="M10,32 L22,18 L30,22 L40,10"
        fill="none"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0"
        strokeDasharray="60"
        strokeDashoffset="60"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="60; 0"
          dur="2s"
          begin="0.8s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0; 0.8"
          dur="0.5s"
          begin="0.8s"
          fill="freeze"
        />
      </path>
      <circle cx="40" cy="10" r="2" fill="#10b981" opacity="0">
        <animate
          attributeName="opacity"
          values="0; 0.9"
          dur="0.3s"
          begin="2.5s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}

export function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient id="trophyShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          <animate
            attributeName="x1"
            values="-100%; 200%"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0%; 300%"
            dur="3s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      <path
        d="M14,10 L14,24 Q14,32 24,34 Q34,32 34,24 L34,10 Z"
        fill="none"
        stroke="#fb923c"
        strokeWidth="1.5"
        opacity="0.8"
      />

      <path
        d="M14,14 Q6,14 6,20 Q6,26 14,26"
        fill="none"
        stroke="#fb923c"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M34,14 Q42,14 42,20 Q42,26 34,26"
        fill="none"
        stroke="#fb923c"
        strokeWidth="1.2"
        opacity="0.5"
      />

      <line
        x1="20"
        y1="34"
        x2="20"
        y2="40"
        stroke="#fb923c"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="28"
        y1="34"
        x2="28"
        y2="40"
        stroke="#fb923c"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <rect
        x="16"
        y="39"
        width="16"
        height="3"
        rx="1.5"
        fill="#fb923c"
        opacity="0.5"
      />

      <path
        d="M14,10 L14,24 Q14,32 24,34 Q34,32 34,24 L34,10 Z"
        fill="url(#trophyShine)"
        opacity="0.5"
      />

      <polygon
        points="24,16 26,21 31,21 27,24 28,29 24,26 20,29 21,24 17,21 22,21"
        fill="#fb923c"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.3; 0.8; 0.3"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </polygon>
    </svg>
  );
}

export function StreakIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <path
        d="M24,6 Q28,16 32,20 Q36,28 30,36 Q28,40 24,42 Q20,40 18,36 Q12,28 16,20 Q20,16 24,6"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.5"
        opacity="0.7"
      >
        <animate
          attributeName="d"
          values="M24,6 Q28,16 32,20 Q36,28 30,36 Q28,40 24,42 Q20,40 18,36 Q12,28 16,20 Q20,16 24,6; M24,8 Q29,14 33,22 Q37,29 31,35 Q28,39 24,41 Q20,39 17,35 Q11,29 15,22 Q19,14 24,8; M24,6 Q28,16 32,20 Q36,28 30,36 Q28,40 24,42 Q20,40 18,36 Q12,28 16,20 Q20,16 24,6"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <path
        d="M24,18 Q26,24 28,26 Q30,30 27,34 Q26,36 24,37 Q22,36 21,34 Q18,30 20,26 Q22,24 24,18"
        fill="#ef4444"
        opacity="0.3"
      >
        <animate
          attributeName="d"
          values="M24,18 Q26,24 28,26 Q30,30 27,34 Q26,36 24,37 Q22,36 21,34 Q18,30 20,26 Q22,24 24,18; M24,20 Q27,23 29,27 Q31,31 28,33 Q26,35 24,36 Q22,35 20,33 Q17,31 19,27 Q21,23 24,20; M24,18 Q26,24 28,26 Q30,30 27,34 Q26,36 24,37 Q22,36 21,34 Q18,30 20,26 Q22,24 24,18"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          values="0.2; 0.5; 0.2"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <g transform="translate(24, 30)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.67; 1.33; 0.67"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#ef4444" opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.3; 0.8; 0.3"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}

export function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <circle
        cx="24"
        cy="18"
        r="8"
        fill="none"
        stroke="#a855f7"
        strokeWidth="1.5"
        opacity="0.7"
      />

      <path
        d="M10,40 Q10,30 24,28 Q38,30 38,40"
        fill="none"
        stroke="#a855f7"
        strokeWidth="1.5"
        opacity="0.5"
      />

      <circle cx="21" cy="17" r="1" fill="#a855f7" opacity="0.6" />
      <circle cx="27" cy="17" r="1" fill="#a855f7" opacity="0.6" />

      <circle
        cx="24"
        cy="18"
        r="12"
        fill="none"
        stroke="#a855f7"
        strokeWidth="0.8"
        strokeDasharray="4 8"
        opacity="0.3"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 18; 360 24 18"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>

      <g transform="translate(32, 12)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.67; 1.33; 0.67"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#a855f7" opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.3; 0.7; 0.3"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}

export function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <path
        d="M28,6 L16,24 L22,24 L20,42 L32,24 L26,24 Z"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M28,6 L16,24 L22,24 L20,42 L32,24 L26,24 Z"
        fill="#fbbf24"
        opacity="0.1"
      >
        <animate
          attributeName="opacity"
          values="0.05; 0.2; 0.05"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <circle cx="24" cy="24" r="0" fill="#fbbf24" opacity="0">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0; 1; 0"
          dur="4s"
          begin="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          values="0; 0.15; 0"
          dur="4s"
          begin="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>
    </svg>
  );
}

export function HandCoinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <path
        d="M12,34 Q8,30 8,26 Q8,22 14,22 L20,22 Q22,22 22,20 L22,18 Q22,14 28,14 Q34,14 34,18 L34,28 Q34,34 28,38 L18,38 Q14,38 12,34"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <g transform="translate(28, 10)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-3; 0,0"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1"
            opacity="0.6"
          />
          <text
            x="0"
            y="2.5"
            textAnchor="middle"
            fontSize="6"
            fontWeight="700"
            fill="#fbbf24"
            opacity="0.7"
            fontFamily="sans-serif"
          >
            L
          </text>
        </g>
      </g>
    </svg>
  );
}

export function SnowflakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <g opacity="0.7">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 24 24)`}>
            <line
              x1="24"
              y1="24"
              x2="24"
              y2="8"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="12"
              x2="20"
              y2="16"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="12"
              x2="28"
              y2="16"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        ))}
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24; 360 24 24"
          dur="20s"
          repeatCount="indefinite"
        />
      </g>
      <circle cx="24" cy="24" r="3" fill="#fbbf24" opacity="0.4">
        <animate
          attributeName="opacity"
          values="0.2; 0.6; 0.2"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>
    </svg>
  );
}

export function PaletteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <path
        d="M24,6 Q40,6 42,24 Q44,36 32,38 Q28,38 28,34 Q28,30 32,30 Q36,30 36,26 Q36,12 24,12 Q12,12 12,24 Q12,36 24,42"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <g transform="translate(18, 18)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.3; 1"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#ef4444" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.4; 0.8; 0.4"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(14, 26)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.3; 1"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#22d3ee" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.4; 0.8; 0.4"
              dur="3s"
              begin="0.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(18, 34)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.3; 1"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#10b981" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.4; 0.8; 0.4"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}

export function HistoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <line
        x1="24"
        y1="24"
        x2="24"
        y2="14"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24; 360 24 24"
          dur="12s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </line>
      <line
        x1="24"
        y1="24"
        x2="30"
        y2="24"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24; 360 24 24"
          dur="60s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </line>

      <path
        d="M8,22 Q8,10 24,8"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <polygon points="6,18 8,24 12,19" fill="#fbbf24" opacity="0.5" />
      <circle cx="24" cy="24" r="2" fill="#fbbf24" opacity="0.5" />
    </svg>
  );
}

export function TrendUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <path
        d="M8,36 L18,24 L26,30 L40,12"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        strokeDasharray="60"
        strokeDashoffset="60"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="60; 0"
          dur="2s"
          fill="freeze"
        />
      </path>
      <polygon points="36,10 42,12 38,16" fill="#fbbf24" opacity="0">
        <animate
          attributeName="opacity"
          values="0; 0.7"
          dur="0.3s"
          begin="1.8s"
          fill="freeze"
        />
      </polygon>

      <g transform="translate(40, 12)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 2.67; 1"
            dur="2s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="3" fill="#fbbf24" opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0.3; 0"
              dur="2s"
              begin="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}

const FEATURE_ICONS = {
  "fas fa-coins": EconomyIcon,
  "fas fa-landmark": BankIcon,
  "fas fa-chart-line": ActivityIcon,
  "fas fa-trophy": TrophyIcon,
  "fas fa-fire": StreakIcon,
  "fas fa-id-card": ProfileIcon,
  "fas fa-bolt": BoltIcon,
  "fas fa-hand-holding-dollar": HandCoinIcon,
  "fas fa-arrow-trend-up": TrendUpIcon,
  "fas fa-snowflake": SnowflakeIcon,
  "fas fa-palette": PaletteIcon,
  "fas fa-clock-rotate-left": HistoryIcon,
};

export default function FeatureIcon({ icon }) {
  const IconComponent = FEATURE_ICONS[icon];
  if (IconComponent) return <IconComponent />;
  return <i className={icon}></i>;
}
