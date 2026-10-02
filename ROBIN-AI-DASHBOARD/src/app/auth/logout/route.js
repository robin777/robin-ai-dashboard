import { clearSession } from '@/lib/dashboard-auth';
export async function GET(request) { clearSession(); return Response.redirect(new URL('/login', request.url)); }
