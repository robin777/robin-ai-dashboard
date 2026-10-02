export default function DashCard({ children, className = "" }) {
  return <div className={`dash-card ${className}`}>{children}</div>;
}
