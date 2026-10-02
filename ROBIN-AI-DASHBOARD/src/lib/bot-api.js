import { getSession } from './dashboard-auth';
const base = (process.env.ROBIN_API_URL || 'http://127.0.0.1:3010').replace(/\/$/, '');
export async function botFetch(path, init = {}) {
  const session = getSession();
  if (!session?.accessToken) return Response.json({ error: 'غير مسجل الدخول.' }, { status: 401 });
  const headers = new Headers(init.headers || {});
  headers.set('Authorization', `Bearer ${session.accessToken}`);
  if (process.env.ROBIN_API_SECRET) headers.set('x-robin-dashboard-secret', process.env.ROBIN_API_SECRET);
  if (init.body && !headers.has('content-type')) headers.set('content-type', 'application/json');
  try {
    const r = await fetch(`${base}${path}`, { ...init, headers, cache: 'no-store' });
    const text = await r.text();
    return new Response(text, { status: r.status, headers: { 'content-type': r.headers.get('content-type') || 'application/json' } });
  } catch (e) { return Response.json({ error: 'تعذر الاتصال بخدمة ROBIN.', details: e.message }, { status: 502 }); }
}
