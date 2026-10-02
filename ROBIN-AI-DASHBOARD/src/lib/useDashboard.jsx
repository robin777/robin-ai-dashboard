"use client";

import { useState, useEffect, useCallback } from "react";

export default function useDashboard() {
  const [state, setState] = useState({
    user: null,
    guilds: [],
    commands: [],
    selectedGuild: null,
    economy: null,
    loading: true,
    topList: [],
  });

  const setPartial = useCallback((partial) => {
    setState((prev) => ({ ...prev, ...partial }));
  }, []);

  useEffect(() => {
    async function init() {
      try {
        const data = await fetch("/api/me", {
          credentials: "same-origin",
        }).then((r) => r.json());
        if (!data) return;
        setPartial({
          user: data.user,
          guilds: data.guilds || [],
          loading: false,
        });
      } catch {
        setPartial({ loading: false });
      }
    }
    init();
  }, [setPartial]);

  useEffect(() => {
    if (!state.user) return;
    loadBotInfo();
    loadEconomy();
    loadCommands();
    loadTop(10);
  }, [state.user]);

  async function loadBotInfo() {
    try {
      const data = await fetch("/api/bot-info").then((r) => r.json());
      if (data && data.status !== "starting") setPartial({ botInfo: data });
    } catch {}
  }

  async function loadEconomy() {
    try {
      const data = await fetch("/api/economy/stats").then((r) => r.json());
      if (data) setPartial({ economy: data });
    } catch {}
  }

  async function loadCommands() {
    try {
      const data = await fetch("/api/commands").then((r) => r.json());
      if (data) setPartial({ commands: data });
    } catch {}
  }

  async function loadTop(limit) {
    try {
      const data = await fetch("/api/top?limit=" + limit).then((r) => r.json());
      if (data) setPartial({ topList: data });
    } catch {}
  }

  async function loadGuildConfig(guildId) {
    try {
      const data = await fetch("/api/guild/" + guildId + "/config", {
        credentials: "same-origin",
      }).then((r) => r.json());
      if (data) setPartial({ disabledCommands: data.disabledCommands || [] });
    } catch {}
  }

  async function toggleCommand(guildId, commandName) {
    try {
      const data = await fetch("/api/guild/" + guildId + "/commands/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ commandName }),
      }).then((r) => r.json());
      if (data) setPartial({ disabledCommands: data.disabledCommands || [] });
    } catch {}
  }

  return {
    state,
    setPartial,
    loadEconomy,
    loadCommands,
    loadGuildConfig,
    toggleCommand,
    loadTop,
  };
}
