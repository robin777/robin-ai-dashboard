import { botFetch } from '@/lib/bot-api';
export async function POST(request, { params }) { return botFetch(`/api/guild/${params.guildId}/commands/toggle`, { method: 'POST', body: JSON.stringify(await request.json()) }); }
