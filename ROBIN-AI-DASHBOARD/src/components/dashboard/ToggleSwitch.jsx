export default function ToggleSwitch({ checked, onChange, disabled }) {
  return (
    <label className="tw-toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="tw-toggle-slider"></span>
    </label>
  );
}
