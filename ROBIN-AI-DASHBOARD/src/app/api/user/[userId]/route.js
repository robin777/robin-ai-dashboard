import { botFetch } from '@/lib/bot-api';
export async function GET(request, { params }) { const url = new URL(request.url); return botFetch(`/api/user/${params.userId}?guildId=${encodeURIComponent(url.searchParams.get('guildId') || '')}`); }
