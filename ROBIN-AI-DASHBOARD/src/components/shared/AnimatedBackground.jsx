"use client";

export default function AnimatedBackground({ intensity = "hero" }) {
  const isHero = intensity === "hero";
  const isSubtle = intensity === "subtle";

  const orbCount = isHero ? 4 : isSubtle ? 2 : 3;
  const particleCount = isHero ? 16 : isSubtle ? 8 : 12;

  const orbs = [];
  const orbConfigs = [
    {
      cx: "20%",
      cy: "30%",
      r: isHero ? 280 : isSubtle ? 140 : 180,
      opacity: 0.06,
      dur: "35s",
      dx: 40,
      dy: -60,
    },
    {
      cx: "75%",
      cy: "70%",
      r: isHero ? 220 : isSubtle ? 120 : 150,
      opacity: 0.04,
      dur: "40s",
      dx: -35,
      dy: 50,
    },
    {
      cx: "45%",
      cy: "50%",
      r: isHero ? 200 : 130,
      opacity: 0.03,
      dur: "30s",
      dx: 25,
      dy: -20,
    },
    {
      cx: "65%",
      cy: "20%",
      r: isHero ? 180 : 110,
      opacity: 0.035,
      dur: "38s",
      dx: -20,
      dy: 35,
    },
  ];

  for (let i = 0; i < orbCount; i++) {
    const c = orbConfigs[i];
    orbs.push(
      <circle
        key={`orb-${i}`}
        cx={c.cx}
        cy={c.cy}
        r={c.r}
        fill="url(#orbGrad)"
        opacity={c.opacity}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`0,0; ${c.dx},${c.dy}; ${-c.dx / 2},${-c.dy / 2}; ${c.dx / 3},${c.dy / 3}; 0,0`}
          dur={c.dur}
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          values={`${c.opacity}; ${c.opacity * 1.6}; ${c.opacity}; ${c.opacity * 0.5}; ${c.opacity}`}
          dur={c.dur}
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>,
    );
  }

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    const x = (i * 41 + 17) % 100;
    const y = (i * 59 + 11) % 100;
    const r = 1 + (i % 2);
    const dur = `${20 + (i % 6) * 4}s`;
    const dx = (i % 2 === 0 ? 1 : -1) * (12 + (i % 4) * 6);
    const dy = (i % 3 === 0 ? 1 : -1) * (8 + (i % 3) * 5);
    const op = 0.06 + (i % 4) * 0.03;

    particles.push(
      <circle
        key={`p-${i}`}
        cx={`${x}%`}
        cy={`${y}%`}
        r={r}
        fill="#3b82f6"
        opacity={op}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`0,0; ${dx},${dy}; ${-dx * 0.6},${-dy * 0.4}; 0,0`}
          dur={dur}
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          values={`${op}; ${op * 1.8}; ${op * 0.4}; ${op}`}
          dur={dur}
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.33; 0.66; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>,
    );
  }

  return (
    <div className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-overflow-hidden tw-pointer-events-none tw-z-0">
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
        }}
      >
        <defs>
          <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {orbs}

        <path
          d={
            isHero
              ? "M-100,300 Q200,150 500,320 T1100,200 T1700,350"
              : isSubtle
                ? "M-100,200 Q150,130 400,220 T800,160"
                : "M-100,180 Q200,90 450,190 T900,130 T1300,210"
          }
          stroke="url(#flowGrad1)"
          strokeWidth="1"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-15; 0,8; 0,0"
            dur="28s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.33; 0.66; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        {!isSubtle && (
          <path
            d={
              isHero
                ? "M-100,450 Q250,340 550,480 T1100,380 T1700,520"
                : "M-100,320 Q200,260 450,370 T900,300"
            }
            stroke="url(#flowGrad2)"
            strokeWidth="0.8"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,12; 0,-8; 0,0"
              dur="32s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.33; 0.66; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>
        )}

        {particles}

        {isHero && (
          <>
            <circle
              cx="30%"
              cy="60%"
              r="2"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="2; 50; 100"
                dur="7s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="opacity"
                values="0.12; 0.04; 0"
                dur="7s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </circle>
            <circle
              cx="70%"
              cy="35%"
              r="2"
              fill="none"
              stroke="#a855f7"
              strokeWidth="0.5"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="2; 40; 80"
                dur="8s"
                begin="3.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="opacity"
                values="0.1; 0.03; 0"
                dur="8s"
                begin="3.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </circle>

            <line
              x1="-10%"
              y1="-10%"
              x2="110%"
              y2="110%"
              stroke="#3b82f6"
              strokeWidth="0.3"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 0.04; 0"
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
              />
            </line>
          </>
        )}
      </svg>
    </div>
  );
}
