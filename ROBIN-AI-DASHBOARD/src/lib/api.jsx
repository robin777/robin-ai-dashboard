const API = {
  get: async (path) => {
    const r = await fetch(path, { credentials: "same-origin" });
    if (r.status === 401) {
      if (typeof window !== "undefined") window.location.href = "/login";
      return null;
    }
    return r.json();
  },
  post: async (path, body) => {
    const r = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(body),
    });
    if (r.status === 401) {
      if (typeof window !== "undefined") window.location.href = "/login";
      return null;
    }
    return r.json();
  },
  formatNumber: (n) => {
    if (n === null || n === undefined) return "—";
    return Number(n).toLocaleString();
  },
  formatUptime: (ms) => {
    if (!ms) return "—";
    const s = Math.floor(ms / 1000) % 60;
    const m = Math.floor(ms / 60000) % 60;
    const h = Math.floor(ms / 3600000) % 24;
    const d = Math.floor(ms / 86400000);
    const parts = [];
    if (d) parts.push(d + "d");
    if (h) parts.push(h + "h");
    if (m) parts.push(m + "m");
    parts.push(s + "s");
    return parts.join(" ");
  },
  timeAgo: (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr + "Z");
    const now = new Date();
    const diff = now - d;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return mins + "m ago";
    const hours = Math.floor(mins / 60);
    if (hours < 24) return hours + "h ago";
    const days = Math.floor(hours / 24);
    return days + "d ago";
  },
  getAvatarUrl: (id, hash, size) => {
    if (!hash) return null;
    return (
      "https://cdn.discordapp.com/avatars/" +
      id +
      "/" +
      hash +
      ".png?size=" +
      (size || 32)
    );
  },
  getXpForLevel: (level) => {
    return Math.round(Math.pow(level / 0.1, 2));
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = API;
}
