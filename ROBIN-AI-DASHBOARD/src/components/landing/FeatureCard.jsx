"use client";

export default function FeatureCard({ icon: Icon, title, description, index }) {
  const delay = index * 0.1;

  return (
    <div
      className="card-glass-feature tw-flex tw-flex-col group tw-relative stagger-item"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="feature-icon tw-rounded-[10px] tw-flex tw-justify-center tw-items-center tw-flex-shrink-0 group-hover:tw-scale-110 tw-transition-all tw-duration-300 tw-mb-[.5rem]"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="tw-relative">{Icon}</div>
      </div>
      <h3 className="tw-text-[15px] tw-font-bold tw-text-white tw-mb-0 tw-tracking-[-0.01em]">
        {title}
      </h3>
      <p className="tw-text-[14px] tw-text-[#A6AFBF] tw-leading-[26px] tw-mt-1">
        {description}
      </p>
    </div>
  );
}
