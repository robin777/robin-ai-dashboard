const USER = {
  id: '123456789012345678',
  username: 'shaoline',
  global_name: 'shaoline',
  avatar: null,
  discriminator: '0',
};

const GUILDS = [
  { id: '900001111122222333', name: 'ROBIN AI Lounge', icon: null, memberCount: 1280, ownerId: USER.id },
  { id: '900004444455555666', name: 'Shaoline Server', icon: null, memberCount: 3420, ownerId: USER.id },
  { id: '900007777788888999', name: 'Economy Hub', icon: null, memberCount: 820, ownerId: '100000000000000001' },
];

const BOT_INFO = {
  name: 'ROBIN AI',
  id: '1522401349629771948',
  avatar: null,
  ownerId: '1074674182832521226',
  servers: 3,
  totalMembers: 5520,
  uptime: 259200000,
  ping: 42,
  commands: 14,
  status: 'online',
};

const ECONOMY_STATS = {
  bankBalance: 284500000,
  totalCirculation: 173200000,
  totalSupply: 500000000,
  economyFloor: 20000000,
  activeUsers: 1240,
  depletionRate: '43.1',
  bankPercent: '56.9',
  circPercent: '34.6',
};

const COMMANDS = [
  { name: 'balance', description: "Check your or someone else's balance" },
  { name: 'daily', description: 'Claim your daily reward' },
  { name: 'pay', description: 'Send coins to another user' },
  { name: 'bank', description: 'View your bank account' },
  { name: 'inject', description: 'Inject coins into the economy' },
  { name: 'top', description: 'View the server leaderboard' },
  { name: 'profile', description: "View your or someone else's profile" },
  { name: 'rank', description: 'View your server rank' },
  { name: 'transactions', description: 'View your recent transactions' },
  { name: 'ping', description: 'Check bot latency' },
  { name: 'uptime', description: 'Check bot uptime' },
  { name: 'user', description: 'Get information about a user' },
  { name: 'refresh', description: 'Refresh bot data' },
  { name: 'vote', description: 'Vote for the bot' },
];

const TOP_LIST = [
  { user_id: '553344556677889900', display_name: 'xeroKing', cash: 2450000 },
  { user_id: USER.id, display_name: 'shaoline', cash: 1250000 },
  { user_id: '112233445566778899', display_name: 'nebula', cash: 980000 },
  { user_id: '221100998877665544', display_name: 'void', cash: 860000 },
  { user_id: '334455667788990011', display_name: 'quanta', cash: 745000 },
  { user_id: '445566778899001122', display_name: 'drift', cash: 620000 },
  { user_id: '556677889900112233', display_name: 'luxe', cash: 515000 },
  { user_id: '667788990011223344', display_name: 'orion', cash: 410000 },
  { user_id: '778899001122334455', display_name: 'pixel', cash: 302000 },
  { user_id: '889900112233445566', display_name: 'nova', cash: 210000 },
];

const PROFILE = {
  user: { user_id: USER.id, username: 'shaoline', cash: 1250000, bank: 3000000 },
  rank: 2,
  streak: 7,
  totalEarned: 5230000,
  txnCount: 148,
  activity: { text_xp: 16000, voice_xp: 7250 },
  textLevel: 12,
  voiceLevel: 8,
};

const TRANSACTIONS = [
  { from_id: '553344556677889900', to_id: USER.id, amount: 50000, created_at: '2026-08-10T10:15:00', reason: 'daily reward' },
  { from_id: USER.id, to_id: '112233445566778899', amount: 15000, created_at: '2026-08-10T08:30:00', reason: 'pay' },
  { from_id: '221100998877665544', to_id: USER.id, amount: 7500, created_at: '2026-08-09T22:05:00', reason: 'pay' },
  { from_id: USER.id, to_id: '334455667788990011', amount: 24000, created_at: '2026-08-09T19:40:00', reason: 'pay' },
  { from_id: '445566778899001122', to_id: USER.id, amount: 12500, created_at: '2026-08-09T14:20:00', reason: 'daily reward' },
];

const ROLES = [
  { id: '100000000000000001', name: 'Owner', color: '#e74c3c' },
  { id: '100000000000000002', name: 'Admin', color: '#f1c40f' },
  { id: '100000000000000003', name: 'Moderator', color: '#2ecc71' },
  { id: '100000000000000004', name: 'Member', color: '#9b59b6' },
  { id: '100000000000000005', name: 'ROBIN AI', color: '#3b82f6' },
];

const CHANNELS = [
  { id: '200000000000000001', name: 'general', type: 0 },
  { id: '200000000000000002', name: 'bot-commands', type: 0 },
  { id: '200000000000000003', name: 'economy', type: 0 },
  { id: '200000000000000004', name: 'gambling', type: 0 },
  { id: '200000000000000005', name: 'lounge', type: 5 },
  { id: '200000000000000006', name: 'study-room', type: 5 },
];

const disabledByGuild = {
  '900001111122222333': ['vote', 'refresh'],
  '900004444455555666': [],
  '900007777788888999': ['inject'],
};

const configByGuild = {
  '900001111122222333': {
    balance: {
      aliases: ['bal', 'cash'],
      alias: 'bal',
      allowedRoles: [],
      deniedRoles: [],
      allowedChannels: [],
      deniedChannels: [],
    },
  },
};

function getDisabled(guildId) {
  return disabledByGuild[guildId] || [];
}

function toggle(guildId, commandName) {
  const arr = getDisabled(guildId);
  const idx = arr.indexOf(commandName);
  if (idx === -1) arr.push(commandName);
  else arr.splice(idx, 1);
  disabledByGuild[guildId] = arr;
  return arr;
}

function setDisabled(guildId, commandNames) {
  disabledByGuild[guildId] = commandNames.slice();
  return disabledByGuild[guildId];
}

function getConfig(guildId) {
  return configByGuild[guildId] || {};
}

export {
  USER,
  GUILDS,
  BOT_INFO,
  ECONOMY_STATS,
  COMMANDS,
  TOP_LIST,
  PROFILE,
  TRANSACTIONS,
  ROLES,
  CHANNELS,
  getDisabled,
  toggle,
  setDisabled,
  getConfig,
  configByGuild,
};
