import { botFetch } from '@/lib/bot-api';
export async function GET(request, { params }) { const url = new URL(request.url); const q = new URLSearchParams({ guildId: url.searchParams.get('guildId') || '', limit: url.searchParams.get('limit') || '20' }); return botFetch(`/api/user/${params.userId}/transactions?${q.toString()}`); }
