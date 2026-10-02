"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      <div className="contact-hero stagger-item stagger-delay-1">
        <span className="about-badge">CONTACT</span>
        <h2 className="about-title">Get In Touch</h2>
        <p className="about-subtitle">
          Have a question, suggestion, or need help with ROBIN AI? We&apos;re here
          to help. Reach out and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-grid stagger-item stagger-delay-2">
        <div className="contact-info-col">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Discord Support</h3>
            <p>
              Join our Discord server for instant support, community
              discussions, and direct access to the development team.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="contact-link"
            >
              Join Discord
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
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
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3>Email</h3>
            <p>
              For business inquiries, partnership proposals, or formal requests,
              reach us via email.
            </p>
            <a href="mailto:support@robin.bot" className="contact-link">
              support@robin.bot
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success">
              <div className="card-icon tw-mx-auto">
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
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <h3>Message Sent</h3>
              <p>
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="join-button"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="contact-input"
                    required
                  />
                </div>
              </div>
              <div className="contact-field">
                <label className="contact-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="contact-input"
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  className="contact-input contact-textarea"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="join-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="vision-section stagger-item stagger-delay-3">
        <div className="vision-content">
          <h2 className="vision-title">Join Our Community</h2>
          <p>
            Connect with thousands of server owners using ROBIN AI. Get tips, share
            feedback, and stay updated on new features.
          </p>
          <div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="join-button"
            >
              Join Discord Server
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
