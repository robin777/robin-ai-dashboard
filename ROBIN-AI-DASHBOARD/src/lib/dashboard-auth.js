import crypto from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE = 'robin_discord_session';
const secret = process.env.DASHBOARD_SESSION_SECRET || 'change-this-secret-in-production';
const key = crypto.createHash('sha256').update(secret).digest();

export function seal(payload) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([cipher.update(Buffer.from(JSON.stringify(payload))), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, enc].map(b => b.toString('base64url')).join('.');
}
export function unseal(value) {
  try {
    const [iv, tag, enc] = String(value || '').split('.');
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'base64url'));
    decipher.setAuthTag(Buffer.from(tag, 'base64url'));
    return JSON.parse(Buffer.concat([decipher.update(Buffer.from(enc, 'base64url')), decipher.final()]).toString('utf8'));
  } catch { return null; }
}
export function setSession(payload) { cookies().set(COOKIE, seal(payload), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 24 * 7 }); }
export function getSession() { return unseal(cookies().get(COOKIE)?.value); }
export function clearSession() { cookies().set(COOKIE, '', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 0 }); }
