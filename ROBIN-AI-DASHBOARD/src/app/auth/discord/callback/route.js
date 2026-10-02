import { setSession } from '@/lib/dashboard-auth';

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (!code) return Response.redirect(new URL('/login?error=no_code', url));
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirect = process.env.DISCORD_REDIRECT_URI || `${url.origin}/auth/discord/callback`;
  if (!clientId || !clientSecret) return Response.redirect(new URL('/login?error=oauth_config', url));
  try {
    const body = new URLSearchParams({ client_id: clientId, client_secret: clientSecret, grant_type: 'authorization_code', code, redirect_uri: redirect });
    const tokenRes = await fetch('https://discord.com/api/v10/oauth2/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body, cache: 'no-store' });
    if (!tokenRes.ok) throw new Error('OAuth token exchange failed');
    const token = await tokenRes.json();
    const userRes = await fetch('https://discord.com/api/v10/users/@me', { headers: { Authorization: `Bearer ${token.access_token}` }, cache: 'no-store' });
    if (!userRes.ok) throw new Error('Discord user lookup failed');
    const user = await userRes.json();
    setSession({ accessToken: token.access_token, refreshToken: token.refresh_token || null, expiresAt: Date.now() + Number(token.expires_in || 604800) * 1000, user });
    return Response.redirect(new URL('/dashboard', url));
  } catch (e) {
    console.error('[DASHBOARD OAUTH]', e);
    return Response.redirect(new URL('/login?error=auth_failed', url));
  }
}
