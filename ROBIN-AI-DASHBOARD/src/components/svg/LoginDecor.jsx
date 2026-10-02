export default function LoginDecor() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <radialGradient id="loginGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="loginGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="loginFlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="50%" cy="45%" r="120" fill="url(#loginGlow1)">
        <animate
          attributeName="r"
          values="100; 140; 100"
          dur="6s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          values="0.6; 1; 0.6"
          dur="6s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>
      <circle cx="45%" cy="55%" r="80" fill="url(#loginGlow2)">
        <animate
          attributeName="r"
          values="60; 100; 60"
          dur="8s"
          begin="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>

      <path
        d="M0,30% Q25%,20% 50%,50% T100%,40%"
        stroke="url(#loginFlowLine)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.06"
      >
        <animate
          attributeName="opacity"
          values="0.03; 0.1; 0.03"
          dur="6s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>
      <path
        d="M0,70% Q30%,60% 50%,50% T100%,60%"
        stroke="url(#loginFlowLine)"
        strokeWidth="0.3"
        fill="none"
        opacity="0.04"
      >
        <animate
          attributeName="opacity"
          values="0.02; 0.08; 0.02"
          dur="8s"
          begin="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <polygon
        points="100,50 130,35 160,50 160,80 130,95 100,80"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="0.5"
        opacity="0.12"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,-30; -10,15; 0,0"
          dur="20s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 130 65; 360 130 65"
          dur="40s"
          repeatCount="indefinite"
          additive="sum"
        />
      </polygon>

      <polygon
        points="700,400 730,385 760,400 760,430 730,445 700,430"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="0.5"
        opacity="0.1"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -25,20; 10,-15; 0,0"
          dur="25s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </polygon>

      <circle
        cx="80%"
        cy="20%"
        r="40"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="0.5"
        opacity="0.08"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -30,40; 15,-20; 0,0"
          dur="22s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 80 20; 360 80 20"
          dur="30s"
          repeatCount="indefinite"
          additive="sum"
        />
      </circle>

      <circle
        cx="20%"
        cy="80%"
        r="30"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="0.5"
        opacity="0.06"
        strokeDasharray="4 6"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,-25; -15,10; 0,0"
          dur="18s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>

      <line
        x1="15%"
        y1="30%"
        x2="50%"
        y2="50%"
        stroke="#22d3ee"
        strokeWidth="0.3"
        opacity="0.04"
      >
        <animate
          attributeName="opacity"
          values="0.02; 0.08; 0.02"
          dur="6s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </line>
      <line
        x1="85%"
        y1="25%"
        x2="50%"
        y2="50%"
        stroke="#06b6d4"
        strokeWidth="0.3"
        opacity="0.04"
      >
        <animate
          attributeName="opacity"
          values="0.02; 0.08; 0.02"
          dur="7s"
          begin="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </line>
      <line
        x1="20%"
        y1="80%"
        x2="50%"
        y2="50%"
        stroke="#22d3ee"
        strokeWidth="0.3"
        opacity="0.04"
      >
        <animate
          attributeName="opacity"
          values="0.02; 0.06; 0.02"
          dur="8s"
          begin="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </line>

      {[
        { cx: "10%", cy: "15%", dur: "15s", dx: 30, dy: -20 },
        { cx: "90%", cy: "85%", dur: "18s", dx: -20, dy: 30 },
        { cx: "70%", cy: "10%", dur: "20s", dx: -25, dy: 15 },
        { cx: "30%", cy: "90%", dur: "16s", dx: 15, dy: -25 },
        { cx: "50%", cy: "20%", dur: "22s", dx: 10, dy: 20 },
        { cx: "85%", cy: "50%", dur: "19s", dx: -15, dy: -10 },
        { cx: "15%", cy: "60%", dur: "17s", dx: 20, dy: 15 },
        { cx: "65%", cy: "80%", dur: "21s", dx: -10, dy: -20 },
      ].map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="1.5"
          fill="#22d3ee"
          opacity="0.15"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values={`0,0; ${p.dx},${p.dy}; 0,0`}
            dur={p.dur}
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0.05; 0.2; 0.05"
            dur={p.dur}
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
      ))}

      {[
        { x: "20%", y: "25%", delay: "0s" },
        { x: "80%", y: "75%", delay: "2s" },
        { x: "50%", y: "15%", delay: "4s" },
      ].map((b, i) => (
        <g key={`burst-${i}`}>
          <circle cx={b.x} cy={b.y} r="0" fill="#22d3ee" opacity="0">
            <animate
              attributeName="r"
              values="0; 1; 0"
              dur="3s"
              begin={b.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
            <animate
              attributeName="opacity"
              values="0; 0.4; 0"
              dur="3s"
              begin={b.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
            <animate
              attributeName="cx"
              values={`${b.x}; calc(${b.x} + 2%); calc(${b.x} + 5%)`}
              dur="3s"
              begin={b.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
            <animate
              attributeName="cy"
              values={`${b.y}; calc(${b.y} - 2%); calc(${b.y} - 5%)`}
              dur="3s"
              begin={b.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
      ))}

      <g transform="translate(50, 50)">
        <circle
          cx="0"
          cy="0"
          r="2"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.5"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 15; 30"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0.1; 0.03; 0"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
      </g>
      <g transform="translate(calc(100% - 50px), calc(100% - 50px))">
        <circle
          cx="0"
          cy="0"
          r="2"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="0.5"
          opacity="0"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 12.5; 25"
            dur="7s"
            begin="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0.08; 0.02; 0"
            dur="7s"
            begin="3s"
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
