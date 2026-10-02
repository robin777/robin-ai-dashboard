export default function LoadingSpinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width="120"
      height="120"
    >
      <defs>
        <linearGradient id="spinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
        </linearGradient>
      </defs>

      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        opacity="0.1"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="url(#spinGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="100 183"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 60 60; 360 60 60"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </circle>

      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1"
        opacity="0.08"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="60 160"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 60 60; 0 60 60"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </circle>

      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontSize="28"
        fontWeight="700"
        fill="#22d3ee"
        fontFamily="Geist Sans, sans-serif"
        opacity="0.8"
      >
        L
        <animate
          attributeName="opacity"
          values="0.4; 1; 0.4"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </text>

      <circle r="3" fill="#22d3ee" opacity="0.7">
        <animateMotion
          path="M60,15 A45,45 0 1,1 59.99,15"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.67; 1.33; 0.67"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>

      <circle r="2" fill="#06b6d4" opacity="0.5">
        <animateMotion
          path="M60,25 A35,35 0 1,0 59.99,25"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="15" fill="#22d3ee" opacity="0">
          <animate
            attributeName="opacity"
            values="0; 0.06; 0"
            dur="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.67; 1"
            dur="2s"
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
