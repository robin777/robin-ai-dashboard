import LoadingSpinner from "@/components/svg/LoadingSpinner";

export default function LoadingOverlay({ visible }) {
  if (!visible) return null;
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-[#030712] tw-z-50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-gap-4">
        <LoadingSpinner />
        <p className="tw-text-white/20 tw-text-sm">Loading Dashboard</p>
      </div>
    </div>
  );
}
