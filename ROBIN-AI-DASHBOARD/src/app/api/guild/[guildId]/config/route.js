import { botFetch } from '@/lib/bot-api';
export async function GET(request, { params }) { return botFetch(`/api/guild/${params.guildId}/config`); }
