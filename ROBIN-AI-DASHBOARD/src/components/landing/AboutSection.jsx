"use client";

export default function AboutSection({ id }) {
  return (
    <section id={id} className="about-page">
      <div className="about-hero stagger-item stagger-delay-1">
        <span className="about-badge">ROBIN AI</span>
        <h2 className="about-title">
          Empowering Server Owners. Automate Everything.
        </h2>
        <p className="about-subtitle">
          ROBIN AI is a powerful Discord economy bot designed to bring your server
          to life. Create custom currencies, manage economies, and build
          thriving communities with advanced automation tools.
        </p>
      </div>

      <div className="about-grid stagger-item stagger-delay-2">
        <div className="about-card">
          <div className="card-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3>Economy System</h3>
          <p>
            Build a dynamic in-game economy with custom currencies, shops,
            trading, and leaderboards. Keep your members engaged and active.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Advanced Moderation</h3>
          <p>
            Keep your server safe with powerful moderation tools. Auto-mod,
            logging, role management, and custom punishment systems.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3>Custom Commands</h3>
          <p>
            Create custom commands and automations tailored to your server. No
            coding required — just configure and deploy instantly.
          </p>
        </div>
      </div>

      <div className="vision-section stagger-item stagger-delay-3">
        <div className="vision-content">
          <h2 className="vision-title">Our Vision</h2>
          <p>
            We believe every Discord server deserves professional-grade tools.
            ROBIN AI is built to empower community owners with automation, economy,
            and moderation — all in one seamless bot.
          </p>
          <div>
            <a href="/login" className="join-button">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
