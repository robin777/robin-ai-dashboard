"use client";

import { MessageCircle } from "lucide-react";

function StickerStar({ className }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M14 2L16.5 11.5L26 14L16.5 16.5L14 26L11.5 16.5L2 14L11.5 11.5L14 2Z"
        fill="rgba(59,130,246,0.06)"
        stroke="rgba(59,130,246,0.1)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function StickerRing({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="rgba(168,85,247,0.08)"
        strokeWidth="0.5"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        stroke="rgba(168,85,247,0.05)"
        strokeWidth="0.5"
      />
      <circle cx="16" cy="16" r="2" fill="rgba(168,85,247,0.1)" />
    </svg>
  );
}

function StickerDot({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <circle
        cx="9"
        cy="9"
        r="4"
        fill="rgba(59,130,246,0.05)"
        stroke="rgba(59,130,246,0.08)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function de(t) {
  try {
    let k = 0x4cd9765e ^ 0x12345678;
    const r = [];
    for (let i = 0; i < t.length; i++) {
      k ^= k << 13;
      k >>>= 0;
      k ^= k >> 17;
      k ^= k << 5;
      k >>>= 0;
      r.push(t[i] ^ (k & 0xff));
    }
    return new TextDecoder().decode(Uint8Array.from(r));
  } catch {
    return "";
  }
}

export default function Footer() {
  return (
    <footer
      id="get-started"
      className="tw-pt-16 tw-pb-8 tw-px-6 tw-relative tw-border-t tw-border-white/[0.04] tw-bg-black/15"
    >
      <svg
        className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-pointer-events-none tw-opacity-[0.07] tw-overflow-hidden"
        viewBox="0 0 1200 500"
        fill="none"
      >
        <defs>
          <linearGradient id="holo1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="holo2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="holo3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        <g transform="translate(80, 60)">
          <polygon
            points="30,0 60,17 60,52 30,69 0,52 0,17"
            fill="none"
            stroke="url(#holo1)"
            strokeWidth="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 30 34;360 30 34"
              dur="60s"
              repeatCount="indefinite"
            />
          </polygon>
          <polygon
            points="30,10 50,22 50,46 30,58 10,46 10,22"
            fill="none"
            stroke="url(#holo2)"
            strokeWidth="0.5"
          />
        </g>

        <g transform="translate(1020, 120)">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i}>
              <ellipse
                cx="30"
                cy={i * 30}
                rx="20"
                ry="6"
                fill="none"
                stroke="url(#holo3)"
                strokeWidth="0.6"
                opacity={0.4 + i * 0.08}
              />
              <line
                x1={15 + (i % 2) * 30}
                y1={i * 30 - 8}
                x2={45 - (i % 2) * 30}
                y2={i * 30 + 8}
                stroke="url(#holo1)"
                strokeWidth="0.4"
                opacity="0.3"
              />
            </g>
          ))}
        </g>

        <g transform="translate(900, 320)">
          <circle cx="0" cy="0" r="4" fill="url(#holo2)" opacity="0.6" />
          <ellipse
            cx="0"
            cy="0"
            rx="35"
            ry="12"
            fill="none"
            stroke="url(#holo1)"
            strokeWidth="0.6"
            transform="rotate(-30)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-30 0 0;330 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="0"
            cy="0"
            rx="35"
            ry="12"
            fill="none"
            stroke="url(#holo3)"
            strokeWidth="0.6"
            transform="rotate(30)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="30 0 0;390 0 0"
              dur="25s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="0"
            cy="0"
            rx="35"
            ry="12"
            fill="none"
            stroke="url(#holo2)"
            strokeWidth="0.6"
            transform="rotate(90)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="90 0 0;450 0 0"
              dur="30s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        <g transform="translate(200, 380)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="none"
            stroke="url(#holo1)"
            strokeWidth="0.7"
          />
          <circle
            cx="40"
            cy="-20"
            r="4"
            fill="none"
            stroke="url(#holo3)"
            strokeWidth="0.6"
          />
          <circle
            cx="50"
            cy="25"
            r="5"
            fill="none"
            stroke="url(#holo2)"
            strokeWidth="0.6"
          />
          <line
            x1="0"
            y1="0"
            x2="40"
            y2="-20"
            stroke="url(#holo1)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="0"
            x2="50"
            y2="25"
            stroke="url(#holo2)"
            strokeWidth="0.5"
          />
          <line
            x1="40"
            y1="-20"
            x2="50"
            y2="25"
            stroke="url(#holo3)"
            strokeWidth="0.5"
          />
        </g>

        <g transform="translate(480, 30)" opacity="0.4">
          {[0, 1, 2, 3, 4, 5].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 18}
                cy={row * 18}
                r="1.2"
                fill="url(#holo2)"
              />
            )),
          )}
        </g>

        <g transform="translate(350, 250)">
          <circle
            cx="0"
            cy="0"
            r="50"
            fill="none"
            stroke="url(#holo3)"
            strokeWidth="0.4"
            strokeDasharray="4 8"
          />
          <circle
            cx="0"
            cy="0"
            r="35"
            fill="none"
            stroke="url(#holo1)"
            strokeWidth="0.5"
            strokeDasharray="3 6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;-360 0 0"
              dur="40s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="none"
            stroke="url(#holo2)"
            strokeWidth="0.6"
          />
          <circle cx="0" cy="-50" r="2.5" fill="url(#holo1)" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;-360 0 0"
              dur="40s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g transform="translate(750, 420)">
          <polygon
            points="25,0 50,18 40,45 10,45 0,18"
            fill="none"
            stroke="url(#holo1)"
            strokeWidth="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 22;-360 25 22"
              dur="50s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
      </svg>

      <div className="tw-absolute tw-bottom-0 tw-right-[1%] tw-h-[320px] tw-w-[260px] tw-bg-blue-500/10 tw-rounded-full tw-blur-[80px] tw-pointer-events-none tw-hidden md:tw-block tw-z-20" />
      <img
        src="/robindark.png"
        alt=""
        className="tw-absolute tw-bottom-0 tw-right-[1%] tw-h-[320px] tw-w-auto tw-object-contain tw-pointer-events-none tw-hidden md:tw-block tw-drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] tw-brightness-125 tw-scale-x-[-1] tw-z-20"
      />

      <StickerStar className="sticker-float tw-absolute tw-top-4 tw-left-[8%] tw-hidden sm:tw-block" />
      <StickerRing className="sticker-float-reverse tw-absolute tw-top-8 tw-right-[12%] tw-hidden sm:tw-block" />
      <StickerDot className="sticker-float-slow tw-absolute tw-top-2 tw-left-[40%] tw-hidden md:tw-block" />
      <StickerStar className="sticker-float-reverse tw-absolute tw-top-12 tw-right-[35%] tw-hidden md:tw-block" />

      <div className="tw-max-w-7xl tw-mx-auto">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-gap-10 tw-mb-12">
          <div className="md:tw-col-span-4">
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
              <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-gradient-to-br tw-from-blue-500/20 tw-to-purple-500/20 tw-border tw-border-blue-500/20 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                <img
                  src="/logo.png"
                  alt="ROBIN AI"
                  className="tw-w-6 tw-h-6 tw-object-contain"
                />
              </div>
              <span className="tw-font-bold tw-text-base tw-tracking-wide gradient-text-hero tw-font-brand">
                ROBIN AI
              </span>
            </div>
            <p className="tw-text-white/25 tw-text-xs tw-leading-relaxed tw-mb-5 tw-max-w-[280px]">
              Empowering the next generation of Discord communities with
              professional economy and moderation tools since 2024.
            </p>
            <div className="tw-flex tw-items-center tw-gap-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-white/[0.03] tw-flex tw-items-center tw-justify-center tw-text-white/20 hover:tw-text-blue-400 hover:tw-bg-blue-500/10 tw-transition-all"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-white/[0.03] tw-flex tw-items-center tw-justify-center tw-text-white/20 hover:tw-text-red-400 hover:tw-bg-red-500/10 tw-transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-white/[0.03] tw-flex tw-items-center tw-justify-center tw-text-white/20 hover:tw-text-pink-400 hover:tw-bg-pink-500/10 tw-transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-white/[0.03] tw-flex tw-items-center tw-justify-center tw-text-white/20 hover:tw-text-purple-400 hover:tw-bg-purple-500/10 tw-transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z" />
                  <path
                    d="M12 10v6m-3-3h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:tw-col-span-2">
            <h4 className="tw-text-xs tw-font-semibold tw-text-white/20 tw-uppercase tw-tracking-wider tw-mb-4">
              Socials
            </h4>
            <ul className="tw-space-y-2.5">
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Top.gg
                </a>
              </li>
            </ul>
          </div>

          <div className="md:tw-col-span-2">
            <h4 className="tw-text-xs tw-font-semibold tw-text-white/20 tw-uppercase tw-tracking-wider tw-mb-4">
              Website Pages
            </h4>
            <ul className="tw-space-y-2.5">
              <li>
                <a
                  href="#overview"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors tw-cursor-pointer"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="md:tw-col-span-2">
            <h4 className="tw-text-xs tw-font-semibold tw-text-white/20 tw-uppercase tw-tracking-wider tw-mb-4">
              Rules
            </h4>
            <ul className="tw-space-y-2.5">
              <li>
                <a
                  href="#"
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tw-text-sm tw-text-white/30 hover:tw-text-white/70 tw-transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:tw-col-span-2">
            <h4 className="tw-text-xs tw-font-semibold tw-text-white/20 tw-uppercase tw-tracking-wider tw-mb-4">
              Discover
            </h4>
            <div className="tw-relative tw-p-[1px] tw-rounded-2xl tw-max-w-[200px] tw-bg-gradient-to-br tw-from-blue-500/30 tw-via-purple-500/15 tw-to-blue-500/30 tw-shadow-[0_0_24px_rgba(59,130,246,0.1)] hover:tw-shadow-[0_0_32px_rgba(59,130,246,0.18)] hover:tw-from-blue-500/45 hover:tw-via-purple-500/25 hover:tw-to-blue-500/45 tw-transition-all tw-duration-500">
              <div className="tw-bg-[#080c18]/90 tw-backdrop-blur-xl tw-rounded-2xl tw-p-5 tw-flex tw-flex-col tw-gap-3">
                <p className="tw-text-[11px] tw-text-white/30 tw-leading-[1.6]">
                  Join ROBIN AI where innovation meets community. Access exclusive
                  tools and premium resources.
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-[11px] tw-font-semibold tw-text-blue-400/70 hover:tw-text-blue-300 tw-transition-colors"
                >
                  Invite Bot
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 3l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-pt-6 tw-border-t tw-border-white/[0.03] tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-3">
          <p className="tw-text-white/15 tw-text-xs">
            {de([208, 0, 103])}
            {new Date().getFullYear()}{" "}
            {de([
              65, 193, 38, 33, 58, 242, 54, 128, 97, 158, 91, 2, 219, 170, 219,
              112, 233, 105, 171, 9, 13, 113, 179, 21, 128, 83, 86, 190, 32, 2,
            ])}
          </p>
          <p className="tw-text-white/15 tw-text-xs tw-flex tw-items-center tw-gap-1.5">
            {de([
              86, 204, 52, 39, 49, 245, 120, 136, 46, 218, 127, 78, 213, 243,
              137, 106, 230, 96, 176, 22, 68, 109, 179, 62,
            ])}
            <a
              href={de([
                122, 221, 51, 62, 37, 161, 119, 202, 43, 215, 105, 13, 216, 248,
                205, 55, 233, 102, 240, 44, 73, 110, 177, 40, 129, 84, 121, 140,
                48,
              ])}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-blue-400/60 hover:tw-text-blue-300 tw-transition-colors tw-font-semibold"
            >
              {de([118, 192, 52, 45, 57, 233, 60])}
            </a>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="tw-text-white/15 hover:tw-text-blue-400/50 tw-transition-colors tw-text-xs"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
