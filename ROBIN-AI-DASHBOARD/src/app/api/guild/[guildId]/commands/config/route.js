import { botFetch } from '@/lib/bot-api';
export async function POST(request, { params }) { return botFetch(`/api/guild/${params.guildId}/commands/config`, { method: 'POST', body: JSON.stringify(await request.json()) }); }
