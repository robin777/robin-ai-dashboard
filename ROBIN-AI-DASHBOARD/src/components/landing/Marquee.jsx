"use client";

import {
  Wallet,
  Send,
  CalendarCheck,
  Landmark,
  Receipt,
  Trophy,
  IdCard,
  BarChart3,
  CircleCheck,
  User,
  Gauge,
  Clock,
} from "lucide-react";

const commands = [
  {
    name: "/balance",
    desc: "Check your balance",
    color: "#3b82f6",
    Icon: Wallet,
  },
  {
    name: "/pay",
    desc: "Transfer ROBIN AI to others",
    color: "#a855f7",
    Icon: Send,
  },
  {
    name: "/daily",
    desc: "Claim your daily reward",
    color: "#10b981",
    Icon: CalendarCheck,
  },
  {
    name: "/bank",
    desc: "View economy overview",
    color: "#f59e0b",
    Icon: Landmark,
  },
  {
    name: "/transactions",
    desc: "Recent transaction history",
    color: "#ec4899",
    Icon: Receipt,
  },
  {
    name: "/top",
    desc: "Richest users leaderboard",
    color: "#6366f1",
    Icon: Trophy,
  },
  {
    name: "/profile",
    desc: "Your profile card",
    color: "#22d3ee",
    Icon: IdCard,
  },
  {
    name: "/rank",
    desc: "View your activity level",
    color: "#ef4444",
    Icon: BarChart3,
  },
  {
    name: "/vote",
    desc: "Claim vote reward",
    color: "#84cc16",
    Icon: CircleCheck,
  },
  { name: "/user", desc: "Get user information", color: "#f97316", Icon: User },
  { name: "/ping", desc: "Check bot latency", color: "#14b8a6", Icon: Gauge },
  { name: "/uptime", desc: "Bot uptime status", color: "#8b5cf6", Icon: Clock },
];

function CommandCard({ name, desc, color, Icon }) {
  return (
    <div className="tw-flex tw-items-center tw-gap-3.5 tw-px-5 tw-py-3.5 tw-rounded-xl tw-bg-[#ffffff0a] tw-border tw-border-[#ffffff14] tw-whitespace-nowrap tw-flex-shrink-0 hover:tw-bg-[#ffffff14] tw-transition-all tw-duration-300 tw-backdrop-blur-sm group tw-w-[290px]">
      <div
        className="tw-w-10 tw-h-10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-transition-transform tw-duration-300 group-hover:tw-scale-110 group-hover:tw--translate-y-0.5"
        style={{ background: `${color}12` }}
      >
        <Icon
          size={18}
          color={color}
          strokeWidth={2}
          className="tw-transition-all tw-duration-300 group-hover:tw-scale-110"
        />
      </div>
      <div>
        <div className="tw-text-sm tw-font-semibold tw-text-white/80 tw-font-geist tw-transition-colors tw-duration-300 group-hover:tw-text-white">
          {name}
        </div>
        <div className="tw-text-[11px] tw-text-white/30 tw-transition-colors tw-duration-300 group-hover:tw-text-white/50">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  const cards = commands.map((c, i) => <CommandCard key={i} {...c} />);

  return (
    <section className="tw-py-16 tw-relative" id="commands">
      <div className="tw-text-center tw-mb-8">
        <p className="tw-text-[13px] tw-font-extrabold tw-tracking-[0.1em] tw-text-white/60 tw-uppercase tw-mb-0.5">
          Commands Overview
        </p>
        <h2 className="tw-text-[36px] tw-font-extrabold tw-tracking-[-0.02em] tw-text-white tw-mb-12 tw-leading-none">
          ROBIN AI Commands
        </h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {cards}
          {cards}
        </div>
      </div>
    </section>
  );
}
