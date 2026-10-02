# ROBIN AI — Dashboard Integration

هذه النسخة متصلة فعليًا ببوت ROBIN AI بدل البيانات التجريبية.

## 1) إعداد البوت
أضف إلى `.env`:

```env
DISCORD_TOKEN=توكن_البوت
DISCORD_CLIENT_ID=معرف_التطبيق
DASHBOARD_API_PORT=3010
DASHBOARD_API_SECRET=ضع_سرًا_طويلًا_مشتركًا
DASHBOARD_ORIGIN=https://dashboard.example.com
```

شغّل البوت كالمعتاد:

```bash
npm start
```

## 2) إعداد الداشبورد
انسخ `.env.example` إلى `.env` وضع:

```env
DISCORD_CLIENT_ID=نفس_معرف_التطبيق
DISCORD_CLIENT_SECRET=سر_التطبيق
DISCORD_REDIRECT_URI=https://dashboard.example.com/auth/discord/callback
ROBIN_API_URL=http://127.0.0.1:3010
ROBIN_API_SECRET=نفس_DASHBOARD_API_SECRET
DASHBOARD_SESSION_SECRET=سر_عشوائي_طويل_ومختلف
```

ثم:

```bash
npm install
npm run build
npm start
```

## 3) Discord Developer Portal
أضف Redirect URL:

`https://dashboard.example.com/auth/discord/callback`

الـOAuth scopes المطلوبة:
- `identify`
- `guilds`

الدashboard يعرض فقط السيرفرات التي:
- المستخدم يملكها أو لديه فيها Manage Server / Administrator.
- والبوت موجود فيها بالفعل.

## 4) ما أصبح حقيقيًا
- تسجيل دخول Discord OAuth.
- السيرفرات الفعلية للبوت.
- الرتب والقنوات الفعلية.
- أوامر ROBIN الفعلية وأوصافها العربية.
- تعطيل/تفعيل الأوامر وحفظ الإعدادات.
- صلاحيات الرتب والقنوات للأوامر.
- إحصائيات البوت وRAM وPing وUptime.
- اقتصاد ROBIN من قاعدة البيانات المحلية.
- المتصدرون وملفات الأعضاء والمعاملات.

لا تستخدم ملفات `_mock/data.js` كمصدر بيانات بعد الربط؛ الـAPI routes أصبحت Proxy لخدمة ROBIN.
