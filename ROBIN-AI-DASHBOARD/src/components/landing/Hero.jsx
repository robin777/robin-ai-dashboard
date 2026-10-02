"use client";

export default function Hero() {
  return (
    <section id="overview" className="hero-section tw-relative">
      <div className="hero-bg-mask" />

      <div className="tw-relative tw-z-10 tw-w-full tw-max-w-[1250px] tw-mx-auto hero-section-inner">
        <h2 className="hero-title">
          Power Your <span className="gradient-text-hero">Server</span>.<br />
          Master Your <span className="gradient-text-hero">Community</span>{" "}
          Economy.
        </h2>

        <p className="hero-description">
          The ultimate Discord bot for seamless moderation and an engaging
          virtual economy. Protect your members, reward activity, and grow your
          community with a single powerful tool.
        </p>

        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-4 tw-mt-6 tw-mb-16">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="btn-primary"
          >
            <span>Add to Discord</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 3l5 5-5 5" />
            </svg>
          </a>
          <a href="/dashboard" className="btn-glass">
            Open Dashboard
          </a>
        </div>

        <div className="hero-preview-wrapper">
          <div className="hero-preview-card">
            <div className="tw-rounded-[13px] tw-overflow-hidden">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <svg
      className="tw-w-full tw-h-auto"
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <rect width="900" height="40" fill="#0a0c10" />
      <line
        x1="0"
        y1="40"
        x2="900"
        y2="40"
        stroke="#ffffff1a"
        strokeWidth="1"
      />
      <circle cx="22" cy="20" r="5" fill="#ff5f57" />
      <circle cx="40" cy="20" r="5" fill="#febc2e" />
      <circle cx="58" cy="20" r="5" fill="#28c840" />
      <rect
        x="330"
        y="10"
        width="240"
        height="20"
        rx="6"
        fill="#ffffff0d"
        stroke="#ffffff1a"
      />
      <text
        x="450"
        y="24"
        fontSize="9"
        fill="#ffffffb3"
        textAnchor="middle"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        dashboard.robin.bot
      </text>

      <rect x="0" y="40" width="200" height="460" fill="#0f172a" />
      <line
        x1="200"
        y1="40"
        x2="200"
        y2="500"
        stroke="#ffffff1a"
        strokeWidth="1"
      />

      <rect
        x="18"
        y="58"
        width="30"
        height="30"
        rx="8"
        fill="#2762dd"
        opacity="0.15"
        stroke="#2762dd"
        strokeOpacity="0.3"
      />
      <text
        x="33"
        y="78"
        fontSize="12"
        fontWeight="700"
        fill="#5865f2"
        textAnchor="middle"
      >
        L
      </text>
      <rect x="56" y="63" width="72" height="6" rx="3" fill="#ffffff1a" />
      <rect x="56" y="75" width="48" height="4" rx="2" fill="#ffffff0d" />

      {[
        { y: 112, w: 76, active: true },
        { y: 144, w: 62, active: false },
        { y: 176, w: 68, active: false },
        { y: 208, w: 54, active: false },
        { y: 240, w: 64, active: false },
        { y: 272, w: 50, active: false },
      ].map((item, i) => (
        <g key={i}>
          {item.active && (
            <rect
              x="8"
              y={item.y - 2}
              width="184"
              height="28"
              rx="6"
              fill="#5865f2"
              opacity="0.1"
            />
          )}
          <circle
            cx={item.active ? 28 : 28}
            cy={item.y + 12}
            r={3}
            fill={item.active ? "#5865f2" : "#ffffff1a"}
          />
          <rect
            x="40"
            y={item.y + 9}
            width={item.w}
            height="5"
            rx="2.5"
            fill={item.active ? "#5865f2" : "#ffffff1a"}
          />
        </g>
      ))}

      <rect x="0" y="436" width="200" height="64" fill="#0f172a" />
      <line
        x1="0"
        y1="436"
        x2="200"
        y2="436"
        stroke="#ffffff1a"
        strokeWidth="1"
      />
      <circle
        cx="36"
        cy="468"
        r="14"
        fill="#5865f2"
        opacity="0.2"
        stroke="#5865f2"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <text
        x="36"
        y="472"
        fontSize="10"
        fontWeight="600"
        fill="#5865f2"
        textAnchor="middle"
      >
        A
      </text>
      <rect x="58" y="460" width="60" height="5" rx="2.5" fill="#ffffff1a" />
      <rect x="58" y="472" width="40" height="4" rx="2" fill="#ffffff0d" />

      {[
        {
          x: 218,
          label: "TOTAL MEMBERS",
          value: "12,847",
          color: "#5865f2",
          bar: 70,
        },
        {
          x: 406,
          label: "ACTIVE TODAY",
          value: "3,291",
          color: "#2762dd",
          bar: 55,
        },
        {
          x: 594,
          label: "COMMANDS/DAY",
          value: "8,462",
          color: "#5865f2",
          bar: 82,
        },
      ].map((stat, i) => (
        <g key={i}>
          <rect
            x={stat.x}
            y="58"
            width="170"
            height="80"
            rx="12"
            fill="#ffffff0d"
            stroke="#ffffff1a"
          />
          <text
            x={stat.x + 16}
            y="80"
            fontSize="8"
            fill="#ffffffb3"
            fontWeight="500"
            letterSpacing="0.5"
          >
            {stat.label}
          </text>
          <text
            x={stat.x + 16}
            y="106"
            fontSize="22"
            fontWeight="700"
            fill={stat.color}
          >
            {stat.value}
          </text>
          <rect
            x={stat.x + 16}
            y="118"
            width="100"
            height="3"
            rx="1.5"
            fill="#ffffff0d"
          />
          <rect
            x={stat.x + 16}
            y="118"
            width={stat.bar}
            height="3"
            rx="1.5"
            fill={stat.color}
            opacity="0.5"
          />
        </g>
      ))}

      <rect
        x="218"
        y="152"
        width="376"
        height="208"
        rx="12"
        fill="#ffffff0d"
        stroke="#ffffff1a"
      />
      <text
        x="238"
        y="176"
        fontSize="9"
        fontWeight="600"
        fill="#ffffffb3"
        letterSpacing="0.3"
      >
        ACTIVITY OVERVIEW
      </text>

      {["1D", "1W", "1M", "3M"].map((tab, i) => (
        <g key={i}>
          <rect
            x={510 + i * 28}
            y="164"
            width="24"
            height="16"
            rx="4"
            fill={i === 1 ? "#5865f2" : "transparent"}
            opacity={i === 1 ? 0.15 : 1}
          />
          <text
            x={522 + i * 28}
            y="175"
            fontSize="7"
            fill={i === 1 ? "#5865f2" : "#ffffffb3"}
            textAnchor="middle"
            fontWeight={i === 1 ? "600" : "400"}
          >
            {tab}
          </text>
        </g>
      ))}

      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="238"
          y1={196 + i * 32}
          x2="574"
          y2={196 + i * 32}
          stroke="#ffffff0d"
          strokeWidth="1"
        />
      ))}

      <path
        d="M250,310 L290,282 L330,292 L370,252 L410,262 L450,222 L490,232 L530,202 L568,212"
        stroke="#5865f2"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M250,310 L290,282 L330,292 L370,252 L410,262 L450,222 L490,232 L530,202 L568,212 L568,348 L250,348 Z"
        fill="url(#chartGradBlue)"
        opacity="0.2"
      />

      <path
        d="M250,332 L290,324 L330,328 L370,306 L410,310 L450,288 L490,292 L530,278 L568,268"
        stroke="#2762dd"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {[250, 290, 330, 370, 410, 450, 490, 530, 568].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={[310, 282, 292, 252, 262, 222, 232, 202, 212][i]}
          r="3"
          fill="#0a0c10"
          stroke="#5865f2"
          strokeWidth="1.5"
        />
      ))}

      <rect
        x="612"
        y="152"
        width="270"
        height="208"
        rx="12"
        fill="#ffffff0d"
        stroke="#ffffff1a"
      />
      <text
        x="632"
        y="176"
        fontSize="9"
        fontWeight="600"
        fill="#ffffffb3"
        letterSpacing="0.3"
      >
        RECENT COMMANDS
      </text>

      {[
        {
          y: 200,
          name: "/balance",
          user: "xenith",
          color: "#5865f2",
          status: "Success",
        },
        {
          y: 226,
          name: "/warn",
          user: "moderator",
          color: "#ef4444",
          status: "Action",
        },
        {
          y: 252,
          name: "/daily",
          user: "nova",
          color: "#5865f2",
          status: "Success",
        },
        {
          y: 278,
          name: "/leaderboard",
          user: "pulse",
          color: "#2762dd",
          status: "Success",
        },
        {
          y: 304,
          name: "/mute",
          user: "guardian",
          color: "#febc2e",
          status: "Pending",
        },
        {
          y: 330,
          name: "/balance",
          user: "echo",
          color: "#5865f2",
          status: "Success",
        },
      ].map((cmd, i) => (
        <g key={i}>
          <circle
            cx="632"
            cy={cmd.y + 4}
            r="3"
            fill={cmd.color}
            opacity="0.6"
          />
          <text
            x="644"
            y={cmd.y + 8}
            fontSize="9"
            fontWeight="600"
            fill="#ffffffb3"
          >
            {cmd.name}
          </text>
          <text x="644" y={cmd.y + 18} fontSize="7" fill="#ffffff66">
            @{cmd.user}
          </text>
          <text
            x="864"
            y={cmd.y + 8}
            fontSize="7"
            fill={
              cmd.status === "Success"
                ? "#28c840"
                : cmd.status === "Pending"
                  ? "#febc2e"
                  : "#ff5f57"
            }
            textAnchor="end"
          >
            {cmd.status}
          </text>
        </g>
      ))}

      <rect
        x="218"
        y="374"
        width="664"
        height="110"
        rx="12"
        fill="#ffffff0d"
        stroke="#ffffff1a"
      />
      <text
        x="238"
        y="398"
        fontSize="9"
        fontWeight="600"
        fill="#ffffffb3"
        letterSpacing="0.3"
      >
        TOP CONTRIBUTORS
      </text>

      {[
        { cx: 270, color: "#5865f2", name: "A", xp: "12.4k", pct: 90 },
        { cx: 330, color: "#2762dd", name: "B", xp: "10.8k", pct: 78 },
        { cx: 390, color: "#5865f2", name: "C", xp: "9.2k", pct: 67 },
        { cx: 450, color: "#2762dd", name: "D", xp: "8.1k", pct: 58 },
        { cx: 510, color: "#5865f2", name: "E", xp: "7.5k", pct: 54 },
        { cx: 570, color: "#2762dd", name: "F", xp: "6.9k", pct: 49 },
        { cx: 630, color: "#5865f2", name: "G", xp: "6.2k", pct: 44 },
      ].map((av, i) => (
        <g key={i}>
          <circle
            cx={av.cx}
            cy="428"
            r="16"
            fill={av.color}
            opacity="0.12"
            stroke={av.color}
            strokeWidth="0.75"
            strokeOpacity="0.3"
          />
          <text
            x={av.cx}
            y="432"
            fontSize="10"
            fontWeight="600"
            fill={av.color}
            opacity="0.7"
            textAnchor="middle"
          >
            {av.name}
          </text>
          <text
            x={av.cx}
            y="454"
            fontSize="7"
            fill="#ffffff66"
            textAnchor="middle"
            fontWeight="500"
          >
            {av.xp}
          </text>
          <rect
            x={av.cx - 20}
            y="460"
            width="40"
            height="3"
            rx="1.5"
            fill="#ffffff0d"
          />
          <rect
            x={av.cx - 20}
            y="460"
            width={(40 * av.pct) / 100}
            height="3"
            rx="1.5"
            fill={av.color}
            opacity="0.4"
          />
        </g>
      ))}

      {[270, 330, 390].map((cx, i) => (
        <text
          key={i}
          x={cx}
          y="416"
          fontSize="6"
          fill={i === 0 ? "#febc2e" : i === 1 ? "#c0c0c0" : "#cd7f32"}
          textAnchor="middle"
          fontWeight="700"
        >
          {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
        </text>
      ))}

      <defs>
        <linearGradient id="chartGradBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5865f2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5865f2" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
