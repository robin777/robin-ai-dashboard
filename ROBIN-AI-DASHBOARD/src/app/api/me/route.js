import { botFetch } from '@/lib/bot-api';
export async function GET() { return botFetch('/api/me'); }
