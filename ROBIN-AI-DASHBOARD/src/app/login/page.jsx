'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/shared/AnimatedBackground';
import { DiscordIcon, ArrowLeftIcon, UserIcon, ServerIcon } from '@/components/svg/DashboardIcons';

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/me', { credentials: 'same-origin' }).then(r => {
      if (r.ok) window.location.replace('/dashboard');
    }).catch(() => {});

    const params = new URLSearchParams(window.location.search);
    if (params.get('error') === 'auth_failed') {
      setError(
        '<strong>Authentication failed.</strong> Make sure:<br>' +
        '1. The redirect URI <code style="background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px;font-size:12px">http://localhost:3000/auth/discord/callback</code> is added in ' +
        '<a href="https://discord.com/developers/applications/1522401349629771948/oauth2" target="_blank" style="color:#60a5fa;text-decoration:underline">Discord Developer Portal &gt; OAuth2 &gt; Redirects</a><br>' +
        '2. The bot is running on port 3000<br>' +
        '3. You approved the authorization'
      );
    } else if (params.get('error') === 'no_code') {
      setError('No authorization code received. Please try again.');
    }
  }, []);

  return (
    <div className="login-page">
      
      <div className="login-orbs">
        <div className="login-orb login-orb--blue"></div>
        <div className="login-orb login-orb--purple"></div>
        <div className="login-orb login-orb--cyan"></div>
      </div>
      <div className="noise-overlay"></div>

      
      <div className="login-card-wrap">
        
        <div className="login-card-glow"></div>

        <div className="login-card-inner">
          
          <div className="login-logo-container">
            <img src="/logo.png" alt="ROBIN AI" className="login-logo" />
          </div>

          
          <div className="login-heading">
            <h1 className="login-title">Step Into ROBIN AI</h1>
            <p className="login-subtitle">Login to get started</p>
          </div>

          
          <button
            onClick={() => { setLoading(true); window.location.href = '/auth/discord'; }}
            disabled={loading}
            className="login-discord-btn"
          >
            {loading ? (
              <div className="login-spinner"></div>
            ) : (
              <DiscordIcon />
            )}
            <span>{loading ? 'Redirecting...' : 'Continue with Discord'}</span>
          </button>

          
          <div className="login-separator">
            <div className="login-separator-line"></div>
            <span className="login-separator-text">Secure OAuth</span>
            <div className="login-separator-line"></div>
          </div>

          
          <div className="login-perms">
            <div className="login-perm">
              <div className="login-perm-icon">
                <UserIcon />
              </div>
              <div className="login-perm-text">
                <span className="login-perm-name">Username</span>
                <span className="login-perm-desc">Display name</span>
              </div>
            </div>
            <div className="login-perm">
              <div className="login-perm-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="5.5" r="3" /><path d="M2.5 14.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /></svg>
              </div>
              <div className="login-perm-text">
                <span className="login-perm-name">Avatar</span>
                <span className="login-perm-desc">Your profile pic</span>
              </div>
            </div>
            <div className="login-perm">
              <div className="login-perm-icon">
                <ServerIcon />
              </div>
              <div className="login-perm-text">
                <span className="login-perm-name">Servers</span>
                <span className="login-perm-desc">Manage access</span>
              </div>
            </div>
          </div>

          
          {error && (
            <div
              className="login-error"
              dangerouslySetInnerHTML={{ __html: error }}
            />
          )}

          
          <p className="login-footer">
            By continuing, you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
