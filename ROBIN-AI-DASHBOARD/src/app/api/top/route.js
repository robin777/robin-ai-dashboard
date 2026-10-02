import { botFetch } from '@/lib/bot-api';
export async function GET(request) { const url = new URL(request.url); const q = new URLSearchParams(); if (url.searchParams.get('limit')) q.set('limit', url.searchParams.get('limit')); if (url.searchParams.get('guildId')) q.set('guildId', url.searchParams.get('guildId')); return botFetch(`/api/top?${q.toString()}`); }
