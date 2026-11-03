import logo from "/assets/logo.png";
export default function Logo({ className = "h-14 w-14" }) {
  return (
    <img src={logo} alt="Sloan Tyche Logo" className={className} />
    // <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    //   <rect x="1.5" y="1.5" width="45" height="45" rx="10" stroke="#00E5FF" strokeOpacity="0.4" strokeWidth="1.5" />
    //   <path d="M31 14H17l7 10-7 10h14" stroke="#00E5FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    //   <path d="M13 24h22" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" />
    // </svg>
  );
}
