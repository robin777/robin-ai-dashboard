"use client";

import { useEffect, useRef } from "react";

export default function KPICard({ icon, value, label, color = "blue" }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el || !value) return;
    const duration = 1200;
    let startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * value).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = value.toLocaleString();
    }
    requestAnimationFrame(step);
  }, [value]);

  return (
    <div className="dash-kpi">
      <div className="tw-flex tw-items-start tw-justify-between tw-mb-4">
        <span className="dash-kpi-label">{label}</span>
        <div className={`dash-kpi-icon dash-kpi-icon-${color}`}>
          <i className={icon}></i>
        </div>
      </div>
      <div ref={numRef} className={`dash-kpi-value dash-kpi-value-${color}`}>
        0
      </div>
    </div>
  );
}
