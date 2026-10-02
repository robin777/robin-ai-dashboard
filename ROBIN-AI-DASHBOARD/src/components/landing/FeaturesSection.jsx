"use client";

import FeatureCard from "./FeatureCard";

const G = (id) => (
  <linearGradient id={id} x1="0" y1="0" x2="24" y2="24">
    <stop offset="0%" stopColor="#60a5fa" />
    <stop offset="100%" stopColor="#a855f7" />
  </linearGradient>
);

function ModerationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i1")}</defs>
      <path
        d="M12 2l9 4v6c0 5.5-9 10-9 10S3 17.5 3 12V6l9-4z"
        stroke="url(#i1)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M9 12l2 2 4-4"
        stroke="url(#i1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

function EconomyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i2")}</defs>
      <rect
        x="10"
        y="3"
        width="4"
        height="7"
        rx="0.8"
        stroke="url(#i2)"
        strokeWidth="1.5"
        opacity="0.15"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.3;0.1"
          dur="3s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="8"
        y="6"
        width="8"
        height="8"
        rx="1"
        stroke="url(#i2)"
        strokeWidth="1.5"
        opacity="0.35"
      >
        <animate
          attributeName="opacity"
          values="0.25;0.5;0.25"
          dur="3s"
          begin="0.15s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="6"
        y="10"
        width="12"
        height="10"
        rx="1.5"
        stroke="url(#i2)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="3s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i3")}</defs>
      <rect
        x="4"
        y="13"
        width="4"
        height="7"
        rx="1"
        stroke="url(#i3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <animate
          attributeName="height"
          values="9;5;9"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="11;15;11"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="10"
        y="8"
        width="4"
        height="12"
        rx="1"
        stroke="url(#i3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <animate
          attributeName="height"
          values="10;14;10"
          dur="2.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="10;6;10"
          dur="2.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="16"
        y="10"
        width="4"
        height="10"
        rx="1"
        stroke="url(#i3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <animate
          attributeName="height"
          values="12;8;12"
          dur="2.5s"
          begin="0.15s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="8;12;8"
          dur="2.5s"
          begin="0.15s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

function LevelingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i4")}</defs>
      <polyline
        points="22 7 13.5 15.5 8.5 10.5 2 17"
        stroke="url(#i4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </polyline>
      <polyline
        points="16 7 22 7 22 13"
        stroke="url(#i4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="3s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </polyline>
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i5")}</defs>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="url(#i5)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="6"
        y="6"
        width="5"
        height="5"
        rx="1"
        stroke="url(#i5)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="13"
        y="6"
        width="5"
        height="5"
        rx="1"
        stroke="url(#i5)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="6"
        y="13"
        width="5"
        height="5"
        rx="1"
        stroke="url(#i5)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2.5s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="13"
        y="13"
        width="5"
        height="5"
        rx="1"
        stroke="url(#i5)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="2.5s"
          begin="0.9s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>{G("i6")}</defs>
      <path
        d="M12 3l2.5 5.5 6 .5-4.5 4 1 6L12 16l-5 3 1-6-4.5-4 6-.5L12 3z"
        stroke="url(#i6)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="12" cy="11" r="1.5" fill="#a855f7" fillOpacity="0.35">
        <animate
          attributeName="opacity"
          values="0.1;0.5;0.1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

const features = [
  {
    icon: ModerationIcon,
    title: "Advanced Moderation",
    description:
      "Automate punishments, filter slurs, and keep your chat safe 24/7.",
  },
  {
    icon: EconomyIcon,
    title: "Dynamic Economy",
    description:
      "Virtual currency, leaderboards, daily rewards, and customizable server shops.",
  },
  {
    icon: AnalyticsIcon,
    title: "Server Analytics",
    description:
      "Track user engagement, moderation logs, and member growth in sleek charts.",
  },
  {
    icon: LevelingIcon,
    title: "Leveling & XP",
    description:
      "Reward active members with custom XP, role rewards, and milestones.",
  },
  {
    icon: DashboardIcon,
    title: "Custom Dashboard",
    description:
      "Configure bot settings, toggle modules, and modify commands via the web.",
  },
  {
    icon: PremiumIcon,
    title: "Premium Perks",
    description:
      "Unlock exclusive items, custom bot branding, and global profile badges.",
  },
];

function StickerShield({ className }) {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path
        d="M40 8L68 20V40C68 56 56 68 40 72C24 68 12 56 12 40V20L40 8Z"
        fill="rgba(59,130,246,0.15)"
        stroke="rgba(59,130,246,0.4)"
        strokeWidth="1.5"
      />
      <path
        d="M30 40L37 47L52 32"
        stroke="rgba(59,130,246,0.7)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StickerHeart({ className }) {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path
        d="M40 65C40 65 12 48 12 28C12 18 20 10 30 10C35 10 38 13 40 16C42 13 45 10 50 10C60 10 68 18 68 28C68 48 40 65 40 65Z"
        fill="rgba(239,68,68,0.15)"
        stroke="rgba(239,68,68,0.4)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function StickerStar({ className }) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 70 70"
      fill="none"
      className={className}
    >
      <polygon
        points="35,8 42,28 62,28 46,40 52,60 35,48 18,60 24,40 8,28 28,28"
        fill="rgba(168,85,247,0.12)"
        stroke="rgba(168,85,247,0.35)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StickerLightning({ className }) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 70 70"
      fill="none"
      className={className}
    >
      <path
        d="M40 8L18 38H32L28 62L52 30H38L40 8Z"
        fill="rgba(250,204,21,0.12)"
        stroke="rgba(250,204,21,0.4)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="tw-relative">
      <div className="tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-[600px] tw-h-[600px] tw-bg-blue-600/5 tw-rounded-full tw-blur-[160px] tw-pointer-events-none"></div>

      <div className="tw-relative">
        <div className="section-header stagger-item stagger-delay-3">
          <div className="line-divider"></div>

          <div className="stickers-container">
            <div className="sticker-wrapper sticker-top-left">
              <StickerShield />
            </div>
            <div className="sticker-wrapper sticker-top-right">
              <StickerHeart />
            </div>
            <div className="sticker-wrapper sticker-bottom-left">
              <StickerStar />
            </div>
            <div className="sticker-wrapper sticker-bottom-right">
              <StickerLightning />
            </div>
          </div>

          <span className="section-subtitle">
            THE LEGACY OF DISCORD STYLING &bull; EST. 2020
          </span>
          <h1 className="section-main-title">
            POWER YOUR <span className="gradient-text-hero">SERVER.</span>
          </h1>
          <p className="section-description">
            Custom role icons, advanced assets, and seamless branding tools.
          </p>
        </div>

        <div className="tw-grid tw-grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tw-gap-8 tw-px-6 tw-max-w-5xl tw-mx-auto stagger-item stagger-delay-4">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              icon={<f.icon />}
              title={f.title}
              description={f.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
