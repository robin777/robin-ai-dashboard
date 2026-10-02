export function GoldMedal() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="goldShine" x1="-100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0" />
          <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
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
        <radialGradient id="goldRays" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(24, 28)">
        {[0, 45, 90, 135].map((angle, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-22"
            stroke="#fcd34d"
            strokeWidth="1"
            opacity="0.15"
            transform={`rotate(${angle})`}
          >
            <animate
              attributeName="opacity"
              values="0.1; 0.25; 0.1"
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </line>
        ))}
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 28; 360 24 28"
          dur="20s"
          repeatCount="indefinite"
        />
      </g>

      <path d="M18,4 L14,20 L24,16 L34,20 L30,4" fill="#f59e0b" opacity="0.5">
        <animate
          attributeName="d"
          values="M18,4 L14,20 L24,16 L34,20 L30,4; M18,6 L14,18 L24,14 L34,18 L30,6; M18,4 L14,20 L24,16 L34,20 L30,4"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <circle cx="24" cy="28" r="14" fill="url(#goldGrad)" opacity="0.8" />
      <circle cx="24" cy="28" r="14" fill="url(#goldShine)" />
      <circle
        cx="24"
        cy="28"
        r="11"
        fill="none"
        stroke="#fef3c7"
        strokeWidth="0.8"
        opacity="0.5"
      />

      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#92400e"
        fontFamily="sans-serif"
        opacity="0.8"
      >
        1
      </text>

      <g transform="translate(24, 28)">
        <circle
          cx="0"
          cy="0"
          r="14"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="1"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.57; 1"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0; 0.3; 0"
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

export function SilverMedal() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="silverShine" x1="-100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
          <stop offset="50%" stopColor="#f8fafc" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
          <animate
            attributeName="x1"
            values="-100%; 200%"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0%; 300%"
            dur="4s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <path d="M18,4 L14,20 L24,16 L34,20 L30,4" fill="#94a3b8" opacity="0.4" />
      <circle cx="24" cy="28" r="14" fill="url(#silverGrad)" opacity="0.7" />
      <circle cx="24" cy="28" r="14" fill="url(#silverShine)" />
      <circle
        cx="24"
        cy="28"
        r="11"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#334155"
        fontFamily="sans-serif"
        opacity="0.8"
      >
        2
      </text>
      <g transform="translate(24, 28)">
        <circle
          cx="0"
          cy="0"
          r="14"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.8"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.43; 1"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0; 0.2; 0"
            dur="4s"
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

export function BronzeMedal() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="bronzeShine" x1="-100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#fdba74" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffedd5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fdba74" stopOpacity="0" />
          <animate
            attributeName="x1"
            values="-100%; 200%"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0%; 300%"
            dur="5s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <path d="M18,4 L14,20 L24,16 L34,20 L30,4" fill="#fb923c" opacity="0.4" />
      <circle cx="24" cy="28" r="14" fill="url(#bronzeGrad)" opacity="0.7" />
      <circle cx="24" cy="28" r="14" fill="url(#bronzeShine)" />
      <circle
        cx="24"
        cy="28"
        r="11"
        fill="none"
        stroke="#fdba74"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#7c2d12"
        fontFamily="sans-serif"
        opacity="0.8"
      >
        3
      </text>
      <g transform="translate(24, 28)">
        <circle
          cx="0"
          cy="0"
          r="14"
          fill="none"
          stroke="#fb923c"
          strokeWidth="0.8"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.36; 1"
            dur="4.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0; 0.2; 0"
            dur="4.5s"
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
