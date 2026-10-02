export async function GET(request) {
  const url = new URL(request.url);
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirect = process.env.DISCORD_REDIRECT_URI || `${url.origin}/auth/discord/callback`;
  if (!clientId) return new Response('DISCORD_CLIENT_ID غير مضبوط.', { status: 500 });
  const oauth = new URL('https://discord.com/oauth2/authorize');
  oauth.searchParams.set('client_id', clientId);
  oauth.searchParams.set('response_type', 'code');
  oauth.searchParams.set('redirect_uri', redirect);
  oauth.searchParams.set('scope', 'identify guilds');
  return Response.redirect(oauth.toString());
}
