import {
  GoldMedal,
  SilverMedal,
  BronzeMedal,
} from "@/components/svg/MedalIcons";

const VARIANTS = [
  "dash-podium-gold",
  "dash-podium-silver",
  "dash-podium-bronze",
];
const VALUE_COLORS = [
  "dash-podium-value-gold",
  "dash-podium-value-silver",
  "dash-podium-value-bronze",
];

export default function Podium({ top3 }) {
  if (!top3 || top3.length === 0) return null;
  const medals = [GoldMedal, SilverMedal, BronzeMedal];
  const order = top3.length >= 3 ? [1, 0, 2] : top3.length === 2 ? [0, 1] : [0];
  const fmt = (n) => Number(n).toLocaleString();

  return (
    <div className="dash-podium">
      {order.map((idx) => {
        const user = top3[idx];
        if (!user) return null;
        const Medal = medals[idx];
        const isFirst = idx === 0;
        return (
          <div
            key={user.user_id}
            className={`dash-podium-card ${VARIANTS[idx]} ${isFirst ? "tw-w-48" : "tw-w-40"}`}
          >
            <div className="tw-flex tw-justify-center tw-mb-3">
              <Medal />
            </div>
            <div className="dash-podium-avatar">
              {(user.display_name || user.user_id).charAt(0).toUpperCase()}
            </div>
            <div className="dash-podium-name">
              {user.display_name || user.user_id.slice(0, 8)}
            </div>
            <div className={`dash-podium-value ${VALUE_COLORS[idx]}`}>
              {fmt(user.cash)}
            </div>
            <div className="dash-podium-unit">ROBIN AI</div>
          </div>
        );
      })}
    </div>
  );
}
