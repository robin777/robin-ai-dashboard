"use client";

import { useMemo, useRef, useEffect } from "react";
import DashCard from "../DashCard";
import {
  GoldMedal,
  SilverMedal,
  BronzeMedal,
} from "@/components/svg/MedalIcons";

const fmt = (n) => {
  if (n == null) return "\u2014";
  return Number(n).toLocaleString();
};

function AnimatedNumber({ value, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !value) return;
    const duration = 1400;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.floor(eased * value).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = value.toLocaleString();
    };
    requestAnimationFrame(step);
  }, [value]);
  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}

function SupplyDonut({ bank, circ, total }) {
  const t = total || 1;
  const r = 58;
  const c = 2 * Math.PI * r;
  const gap = 8;
  const bankPct = (bank / t) * 100;
  const circPct = (circ / t) * 100;
  const unallocPct = 100 - bankPct - circPct;

  return (
    <div className="tw-relative tw-flex-shrink-0">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="12"
        />

        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="url(#ecoGradBank)"
          strokeWidth="12"
          strokeDasharray={`${(bankPct / 100) * c - gap} ${c}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          opacity="0.9"
        >
          <animate
            attributeName="stroke-dasharray"
            from={`0 ${c}`}
            to={`${(bankPct / 100) * c - gap} ${c}`}
            dur="1.6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.16 1 0.3 1"
            keyTimes="0;1"
          />
        </circle>

        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="url(#ecoGradCirc)"
          strokeWidth="12"
          strokeDasharray={`${(circPct / 100) * c - gap} ${c}`}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          strokeDashoffset={-((bankPct / 100) * c)}
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dasharray"
            from={`0 ${c}`}
            to={`${(circPct / 100) * c - gap} ${c}`}
            dur="1.6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.16 1 0.3 1"
            keyTimes="0;1"
          />
        </circle>
        <defs>
          <linearGradient id="ecoGradBank" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="ecoGradCirc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>

      <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center">
        <div className="tw-text-xl tw-font-extrabold tw-text-white tw-tracking-tight">
          {total >= 1000000 ? Math.round(total / 1000000) + "M" : fmt(total)}
        </div>
        <div className="tw-text-[10px] tw-text-white/30 tw-font-medium tw-uppercase tw-tracking-wider">
          Supply
        </div>
      </div>
    </div>
  );
}

export default function EconomySection({ economy, topList }) {
  const stats = useMemo(() => {
    const total = topList.reduce((s, u) => s + u.cash, 0);
    const top1 = topList.length > 0 ? topList[0].cash : 0;
    const top3 = topList.slice(0, 3).reduce((s, u) => s + u.cash, 0);
    const avg = topList.length > 0 ? Math.round(total / topList.length) : 0;
    return { total, top1, top3, avg };
  }, [topList]);

  const supply = economy ? economy.totalSupply : 500000000;
  const bank = economy ? economy.bankBalance : 0;
  const circ = economy ? economy.totalCirculation : 0;
  const unallocated = supply - bank - circ;

  return (
    <>
      <div className="dash-lb-header dash-animate-1">
        <div className="dash-lb-header-icon">
          <i className="fas fa-chart-pie"></i>
        </div>
        <div>
          <h1 className="dash-section-title tw-mb-0">Economy</h1>
          <p className="tw-text-xs tw-text-white/30 tw-mt-0.5">
            Supply, circulation & wealth distribution
          </p>
        </div>
      </div>

      <div className="dash-eco-strip dash-animate-2">
        <div className="dash-eco-strip-item">
          <div className="dash-eco-strip-label">Bank Reserve</div>
          <div className="dash-eco-strip-value tw-text-blue-400">
            <AnimatedNumber value={bank} />
          </div>
          <div className="dash-eco-strip-sub">
            <span className="dash-eco-strip-accent tw-bg-blue-500"></span>
            {supply > 0 ? ((bank / supply) * 100).toFixed(1) : 0}% of supply
          </div>
        </div>
        <div className="dash-eco-strip-item">
          <div className="dash-eco-strip-label">In Circulation</div>
          <div className="dash-eco-strip-value tw-text-purple-400">
            <AnimatedNumber value={circ} />
          </div>
          <div className="dash-eco-strip-sub">
            <span className="dash-eco-strip-accent tw-bg-purple-500"></span>
            {supply > 0 ? ((circ / supply) * 100).toFixed(1) : 0}% of supply
          </div>
        </div>
        <div className="dash-eco-strip-item">
          <div className="dash-eco-strip-label">Active Users</div>
          <div className="dash-eco-strip-value tw-text-emerald-400">
            <AnimatedNumber value={economy ? economy.activeUsers : 0} />
          </div>
          <div className="dash-eco-strip-sub">
            <span className="dash-eco-strip-accent tw-bg-emerald-500"></span>
            Earning & spending
          </div>
        </div>
        <div className="dash-eco-strip-item">
          <div className="dash-eco-strip-label">Depletion</div>
          <div className="dash-eco-strip-value tw-text-orange-400">
            {economy ? economy.depletionRate : 0}
            <span className="tw-text-sm tw-font-semibold">%</span>
          </div>
          <div className="dash-eco-strip-sub">
            <span className="dash-eco-strip-accent tw-bg-orange-500"></span>
            Daily rate
          </div>
        </div>
      </div>

      <DashCard className="dash-eco-supply dash-animate-3 tw-mb-5">
        <h3>Supply Distribution</h3>
        <div className="dash-eco-supply-layout">
          <SupplyDonut bank={bank} circ={circ} total={supply} />
          <div className="dash-eco-supply-bars">
            <div className="dash-eco-bar-row">
              <div className="dash-eco-bar-header">
                <div className="dash-eco-bar-label">
                  <span className="dash-eco-bar-dot tw-bg-blue-500"></span>
                  Bank Reserve
                </div>
                <div>
                  <span className="dash-eco-bar-amount">{fmt(bank)}</span>
                  <span className="dash-eco-bar-pct tw-text-blue-400">
                    {supply > 0 ? ((bank / supply) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>
              <div className="dash-eco-bar-track">
                <div
                  className="dash-eco-bar-fill tw-bg-gradient-to-r tw-from-blue-600 tw-to-blue-400"
                  style={{
                    width: supply > 0 ? (bank / supply) * 100 + "%" : "0%",
                  }}
                ></div>
              </div>
            </div>

            <div className="dash-eco-bar-row">
              <div className="dash-eco-bar-header">
                <div className="dash-eco-bar-label">
                  <span className="dash-eco-bar-dot tw-bg-purple-500"></span>
                  In Circulation
                </div>
                <div>
                  <span className="dash-eco-bar-amount">{fmt(circ)}</span>
                  <span className="dash-eco-bar-pct tw-text-purple-400">
                    {supply > 0 ? ((circ / supply) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>
              <div className="dash-eco-bar-track">
                <div
                  className="dash-eco-bar-fill tw-bg-gradient-to-r tw-from-purple-600 tw-to-purple-400"
                  style={{
                    width: supply > 0 ? (circ / supply) * 100 + "%" : "0%",
                  }}
                ></div>
              </div>
            </div>

            <div className="dash-eco-bar-row">
              <div className="dash-eco-bar-header">
                <div className="dash-eco-bar-label">
                  <span className="dash-eco-bar-dot tw-bg-white/20"></span>
                  Unallocated
                </div>
                <div>
                  <span className="dash-eco-bar-amount">
                    {fmt(unallocated)}
                  </span>
                  <span className="dash-eco-bar-pct tw-text-white/30">
                    {supply > 0 ? ((unallocated / supply) * 100).toFixed(1) : 0}
                    %
                  </span>
                </div>
              </div>
              <div className="dash-eco-bar-track">
                <div
                  className="dash-eco-bar-fill tw-bg-white/10"
                  style={{
                    width:
                      supply > 0 ? (unallocated / supply) * 100 + "%" : "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </DashCard>

      <div className="dash-grid-2">
        <DashCard className="dash-eco-wealth dash-animate-4">
          <h3>Wealth Distribution</h3>
          {topList.length === 0 ? (
            <div className="dash-empty">
              <div className="dash-empty-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="dash-empty-title">No data yet</div>
              <div className="dash-empty-desc">
                Wealth data will appear once users earn coins
              </div>
            </div>
          ) : (
            <>
              <div className="dash-eco-wealth-stack">
                {topList.slice(0, 5).map((u, i) => {
                  const colors = [
                    "#3b82f6",
                    "#8b5cf6",
                    "#f59e0b",
                    "#10b981",
                    "#f97316",
                  ];
                  const pct =
                    stats.total > 0 ? (u.cash / stats.total) * 100 : 0;
                  return (
                    <div
                      key={u.user_id}
                      className="dash-eco-wealth-seg"
                      style={{
                        flex: Math.max(pct, 1),
                        background: colors[i % colors.length],
                      }}
                      title={`${u.display_name || u.user_id}: ${fmt(u.cash)}`}
                    ></div>
                  );
                })}
                {topList.length > 5 && (
                  <div
                    className="dash-eco-wealth-seg"
                    style={{
                      flex:
                        stats.total > 0
                          ? ((stats.total -
                              topList
                                .slice(0, 5)
                                .reduce((s, u) => s + u.cash, 0)) /
                              stats.total) *
                            100
                          : 1,
                      background: "rgba(255,255,255,0.1)",
                    }}
                    title="Others"
                  ></div>
                )}
              </div>

              <div className="dash-eco-wealth-legend">
                {topList.slice(0, 3).map((u, i) => {
                  const colors = ["#3b82f6", "#8b5cf6", "#f59e0b"];
                  return (
                    <div
                      key={u.user_id}
                      className="dash-eco-wealth-legend-item"
                    >
                      <span
                        className="dash-eco-wealth-legend-dot"
                        style={{ background: colors[i] }}
                      ></span>
                      <span className="dash-eco-wealth-legend-name">
                        {u.display_name || u.user_id.slice(0, 8)}
                      </span>
                      <span className="dash-eco-wealth-legend-val">
                        {stats.total > 0
                          ? ((u.cash / stats.total) * 100).toFixed(1)
                          : 0}
                        %
                      </span>
                    </div>
                  );
                })}
                {topList.length > 3 && (
                  <div className="dash-eco-wealth-legend-item">
                    <span
                      className="dash-eco-wealth-legend-dot"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    ></span>
                    <span className="dash-eco-wealth-legend-name">Others</span>
                    <span className="dash-eco-wealth-legend-val">
                      {stats.total > 0
                        ? (((stats.total - top3) / stats.total) * 100).toFixed(
                            1,
                          )
                        : 0}
                      %
                    </span>
                  </div>
                )}
              </div>

              <div className="dash-eco-wealth-stats">
                <div className="dash-eco-wealth-stat">
                  <div className="dash-eco-wealth-stat-val">
                    {topList.length}
                  </div>
                  <div className="dash-eco-wealth-stat-label">Users</div>
                </div>
                <div className="dash-eco-wealth-stat">
                  <div className="dash-eco-wealth-stat-val tw-text-blue-400">
                    {fmt(stats.top1)}
                  </div>
                  <div className="dash-eco-wealth-stat-label">Richest</div>
                </div>
                <div className="dash-eco-wealth-stat">
                  <div className="dash-eco-wealth-stat-val">
                    {fmt(stats.avg)}
                  </div>
                  <div className="dash-eco-wealth-stat-label">Average</div>
                </div>
              </div>
            </>
          )}
        </DashCard>

        <DashCard className="tw-p-6 dash-animate-5">
          <h3 className="tw-text-sm tw-font-semibold tw-text-white/70 tw-mb-5">
            Top Holders
          </h3>
          {topList.length === 0 ? (
            <div className="dash-empty">
              <div className="dash-empty-icon">
                <i className="fas fa-ranking-star"></i>
              </div>
              <div className="dash-empty-title">No users yet</div>
              <div className="dash-empty-desc">
                Users will appear here once they start earning
              </div>
            </div>
          ) : (
            <div>
              {topList.slice(0, 8).map((u, i) => {
                const medals = [GoldMedal, SilverMedal, BronzeMedal];
                const MedalIcon = medals[i];
                const barPct = stats.top1 > 0 ? (u.cash / stats.top1) * 100 : 0;
                return (
                  <div key={u.user_id} className="dash-eco-holder">
                    <div className="dash-eco-holder-rank">
                      {MedalIcon ? <MedalIcon /> : `#${i + 1}`}
                    </div>
                    <div className="dash-eco-holder-avatar">
                      {(u.display_name || u.user_id).charAt(0).toUpperCase()}
                    </div>
                    <div className="dash-eco-holder-info">
                      <div className="dash-eco-holder-name">
                        {u.display_name || u.user_id.slice(0, 12)}
                      </div>
                      <div className="dash-eco-holder-bar-wrap">
                        <div
                          className="dash-eco-holder-bar"
                          style={{ width: barPct + "%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="dash-eco-holder-cash">{fmt(u.cash)}</div>
                  </div>
                );
              })}
            </div>
          )}
        </DashCard>
      </div>
    </>
  );
}
