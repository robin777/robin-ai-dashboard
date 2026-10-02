export default function HeroIllustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 200"
      width="100%"
      height="200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{ maxWidth: "600px" }}
    >
      <defs>
        <linearGradient id="heroLine1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroLine2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroGlowDeep" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroGlowRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(300, 100)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.1; 1"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="90" fill="url(#heroGlowDeep)" />
        </g>
      </g>

      <g transform="translate(300, 100)">
        <circle cx="0" cy="0" r="70" fill="url(#heroGlowRing)" opacity="0">
          <animate
            attributeName="opacity"
            values="0; 0.8; 0"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.8; 1.1; 0.8"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </circle>
      </g>

      <g transform="translate(300, 100)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.75; 1"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="20" fill="url(#heroGlow)">
            <animate
              attributeName="opacity"
              values="0.6; 1; 0.6"
              dur="4s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.5; 1"
            dur="3s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <circle cx="0" cy="0" r="4" fill="#3b82f6" opacity="0.9" />
        </g>
      </g>

      {[
        { angle: 0, radius: 55, size: 1.5, delay: "0s", dur: "12s" },
        { angle: 72, radius: 65, size: 1, delay: "1.5s", dur: "15s" },
        { angle: 144, radius: 50, size: 1.5, delay: "3s", dur: "10s" },
        { angle: 216, radius: 60, size: 1, delay: "4.5s", dur: "14s" },
        { angle: 288, radius: 52, size: 2, delay: "6s", dur: "13s" },
      ].map((s, i) => {
        const startX = 300 + s.radius * Math.cos((s.angle * Math.PI) / 180);
        const startY = 100 + s.radius * Math.sin((s.angle * Math.PI) / 180);
        return (
          <circle key={`sat-${i}`} r={s.size} fill="#3b82f6" opacity="0.5">
            <animateMotion
              path={`M${startX},${startY} A${s.radius},${s.radius} 0 1,1 ${startX + 0.01},${startY}`}
              dur={s.dur}
              begin={s.delay}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3; 0.7; 0.3"
              dur={s.dur}
              begin={s.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
        );
      })}

      {[
        { cx: 120, cy: 60, delay: "0s" },
        { cx: 480, cy: 60, delay: "0.5s" },
        { cx: 80, cy: 140, delay: "1s" },
        { cx: 520, cy: 140, delay: "1.5s" },
        { cx: 200, cy: 160, delay: "0.8s" },
        { cx: 400, cy: 160, delay: "1.2s" },
      ].map((node, i) => (
        <g key={i}>
          <line
            x1={node.cx}
            y1={node.cy}
            x2="300"
            y2="100"
            stroke="#3b82f6"
            strokeWidth="0.5"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.05; 0.2; 0.05"
              dur="5s"
              begin={node.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </line>

          <circle r="2" fill="#3b82f6" opacity="0">
            <animateMotion
              path={`M${node.cx},${node.cy} L300,100`}
              dur="3s"
              begin={node.delay}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0; 0.8; 0"
              dur="3s"
              begin={node.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>

          <g transform={`translate(${node.cx}, ${node.cy})`}>
            <g>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1; 1.67; 1"
                dur="4s"
                begin={node.delay}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <circle cx="0" cy="0" r="3" fill="#3b82f6" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.4; 0.8; 0.4"
                  dur="4s"
                  begin={node.delay}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
              </circle>
            </g>

            <circle
              cx="0"
              cy="0"
              r="8"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0.3; 0.1; 0"
                dur="4s"
                begin={node.delay}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.625; 1.875; 3.125"
                dur="4s"
                begin={node.delay}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </circle>
          </g>
        </g>
      ))}

      <path
        d="M30,60 Q100,30 200,40 Q300,50 400,35 Q500,20 570,50"
        stroke="#3b82f6"
        strokeWidth="0.3"
        fill="none"
        opacity="0.08"
      >
        <animate
          attributeName="opacity"
          values="0.05; 0.12; 0.05"
          dur="8s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>
      <path
        d="M30,140 Q100,170 200,160 Q300,150 400,165 Q500,180 570,150"
        stroke="#6366f1"
        strokeWidth="0.3"
        fill="none"
        opacity="0.06"
      >
        <animate
          attributeName="opacity"
          values="0.04; 0.1; 0.04"
          dur="10s"
          begin="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 0.5; 1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <path
        d="M50,100 Q150,40 300,100 T550,100"
        stroke="url(#heroLine1)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="8 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0; -24"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M80,140 Q200,80 300,120 T520,80"
        stroke="url(#heroLine2)"
        strokeWidth="0.8"
        fill="none"
        strokeDasharray="6 6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0; -24"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {[
        { x: 150, y: 80, delay: "0s", size: 12 },
        { x: 450, y: 80, delay: "1.5s", size: 10 },
        { x: 250, y: 40, delay: "0.7s", size: 8 },
        { x: 350, y: 40, delay: "2s", size: 9 },
      ].map((coin, i) => (
        <g key={`coin-${i}`} opacity="0.5">
          <circle
            cx={coin.x}
            cy={coin.y}
            r={coin.size}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.2; 0.6; 0.2"
              dur="5s"
              begin={coin.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </circle>
          <text
            x={coin.x}
            y={coin.y + 4}
            textAnchor="middle"
            fontSize={coin.size}
            fill="#3b82f6"
            fontFamily="Geist Sans, sans-serif"
            fontWeight="700"
          >
            L
            <animate
              attributeName="opacity"
              values="0.3; 0.7; 0.3"
              dur="5s"
              begin={coin.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </text>
          <animateTransform
            attributeName="transform"
            type="translate"
            values={`0,0; 0,${-8 - i * 2}; 0,0`}
            dur={`${4 + i}s`}
            begin={coin.delay}
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </g>
      ))}

      <g transform="translate(300, 100)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.3"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0.15; 0.05; 0"
            dur="5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.5; 1.33; 2.17"
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
          r="60"
          fill="none"
          stroke="#6366f1"
          strokeWidth="0.3"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0.12; 0.04; 0"
            dur="5s"
            begin="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.5; 1.33; 2.17"
            dur="5s"
            begin="2.5s"
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
