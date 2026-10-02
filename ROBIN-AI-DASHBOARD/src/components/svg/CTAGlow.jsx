export default function CTAGlow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <radialGradient id="ctaGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctaGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(400, 300)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.75; 1.25; 0.75"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="200" fill="url(#ctaGlow1)">
            <animate
              attributeName="opacity"
              values="0.8; 1; 0.8"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      </g>

      <g transform="translate(360, 330)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.83; 1.33; 0.83"
            dur="8s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="120" fill="url(#ctaGlow2)" />
        </g>
      </g>

      <g transform="translate(400, 300)">
        <circle
          cx="0"
          cy="0"
          r="50"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.5"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 3; 5"
            dur="5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0.1; 0.03; 0"
            dur="5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
        <circle
          cx="0"
          cy="0"
          r="50"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="0.3"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 3; 5"
            dur="5s"
            begin="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0.08; 0.02; 0"
            dur="5s"
            begin="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
      </g>

      {[
        { cx: "30%", cy: "30%", dur: "12s", dx: 20, dy: -15 },
        { cx: "70%", cy: "70%", dur: "15s", dx: -15, dy: 20 },
        { cx: "60%", cy: "25%", dur: "18s", dx: -10, dy: 10 },
        { cx: "40%", cy: "75%", dur: "14s", dx: 10, dy: -10 },
      ].map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="1.5"
          fill="#22d3ee"
          opacity="0.1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values={`0,0; ${p.dx},${p.dy}; 0,0`}
            dur={p.dur}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.05; 0.2; 0.05"
            dur={p.dur}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
