"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Home", view: "home" },
  { id: "about", label: "About", view: "about" },
  { id: "commands", label: "Contact", view: "contact" },
  { id: "features", label: "Features", view: false },
];

export default function Navbar({ activeView, setActiveView }) {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    fetch("/api/me", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setUser(data.user);
      })
      .catch(() => {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileOpen(false);

    if (item.view) {
      setActiveView(item.view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveView("home");
      setTimeout(() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`nav-header ${scrolled ? "nav-header--scrolled" : ""} ${activeView !== "home" ? "nav-header--about" : ""}`}
      >
        <div className="nav-brand">
          <div className="nav-logo-orb">
            <img src="/logo.png" alt="ROBIN AI" className="nav-logo" />
          </div>
          <h1>ROBIN AI</h1>
        </div>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item)}
              className={activeView === item.view ? "nav-link--active" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="nav-support-btn"
          >
            Support
          </a>

          {user ? (
            <a href="/dashboard" className="nav-user-btn">
              <img
                src={
                  user.avatar
                    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                    : `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discriminator || "0") % 5}.png`
                }
                alt={user.username}
                className="nav-user-avatar"
              />
              <span className="nav-user-name">{user.username}</span>
            </a>
          ) : (
            <a href="/login" className="nav-login-btn">
              Login
            </a>
          )}

          <button
            className="nav-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${mobileOpen ? "mobile-menu-overlay--open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`mobile-menu-panel ${mobileOpen ? "mobile-menu-panel--open" : ""}`}
      >
        <div className="tw-flex tw-flex-col tw-gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item)}
              className={`tw-text-left tw-px-4 tw-py-3 tw-rounded-lg tw-text-sm tw-font-medium tw-text-white/50 hover:tw-text-white/80 hover:tw-bg-white/[0.04] tw-transition-all tw-bg-transparent tw-border-none tw-cursor-pointer ${activeView === item.view ? "!tw-text-white/80" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-3 tw-mt-4 tw-pt-4 tw-border-t tw-border-white/[0.04]">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="btn-glass !tw-justify-center !tw-text-sm"
          >
            Support
          </a>
          {user ? (
            <a
              href="/dashboard"
              className="btn-glass !tw-justify-center !tw-text-sm"
            >
              Dashboard
            </a>
          ) : (
            <a
              href="/login"
              className="btn-primary !tw-justify-center !tw-text-sm"
            >
              <span>Login</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
