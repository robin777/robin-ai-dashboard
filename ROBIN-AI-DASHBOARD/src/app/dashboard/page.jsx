'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/shared/AnimatedBackground';
import LoadingOverlay from '@/components/dashboard/LoadingOverlay';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import OverviewSection from '@/components/dashboard/sections/OverviewSection';
import ProfileSection from '@/components/dashboard/sections/ProfileSection';
import CommandsSection from '@/components/dashboard/sections/CommandsSection';
import EconomySection from '@/components/dashboard/sections/EconomySection';
import LeaderboardSection from '@/components/dashboard/sections/LeaderboardSection';

export default function DashboardPage() {
  const [state, setState] = useState({
    user: null,
    guilds: [],
    botGuilds: [],
    commands: [],
    economy: null,
    disabledCommands: [],
    commandConfig: {},
    guildRoles: [],
    guildChannels: [],
    loading: true,
    topList: [],
    botInfo: null,
  });
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGuild, setSelectedGuild] = useState('');

  useEffect(() => {
    async function init() {
      try {
        const r = await fetch('/api/me', { credentials: 'same-origin' });
        if (!r.ok) { window.location.href = '/login'; return; }
        const data = await r.json();
        if (!data) { window.location.href = '/login'; return; }
        setState(prev => ({ ...prev, user: data.user, guilds: data.guilds || [], loading: false }));
        loadData();
      } catch {
        setState(prev => ({ ...prev, loading: false }));
      }
    }
    init();
  }, []);

  async function loadData() {
    try {
      const [botInfo, economyData, commandsData, topData, botGuildsData] = await Promise.all([
        fetch('/api/bot-info').then(r => r.json()).catch(() => ({})),
        fetch('/api/economy/stats').then(r => r.json()).catch(() => ({})),
        fetch('/api/commands').then(r => r.json()).catch(() => []),
        fetch('/api/top?limit=50&guildId=' + encodeURIComponent(selectedGuild || '')).then(r => r.json()).catch(() => []),
        fetch('/api/guilds').then(r => r.json()).catch(() => []),
      ]);
      const botGuildIds = new Set((botGuildsData || []).map(function(g) { return g.id; }));
      setState(prev => {
        var filteredGuilds = prev.guilds.filter(function(g) { return botGuildIds.has(g.id); });
        var mergedGuilds = filteredGuilds.map(function(g) {
          var botGuild = (botGuildsData || []).find(function(bg) { return bg.id === g.id; });
          return {
            id: g.id,
            name: botGuild ? botGuild.name : g.name,
            icon: g.icon || (botGuild ? botGuild.icon : null),
            memberCount: botGuild ? botGuild.memberCount : g.memberCount,
          };
        });
        return {
          ...prev,
          botGuilds: botGuildsData || [],
          guilds: mergedGuilds,
          economy: economyData.bankBalance !== undefined ? economyData : prev.economy,
          commands: commandsData.length > 0 ? commandsData : prev.commands,
          topList: topData.length > 0 ? topData : prev.topList,
          botInfo: botInfo.status !== 'starting' ? botInfo : prev.botInfo,
        };
      });
    } catch {}
  }

  
  useEffect(() => {
    if (state.guilds.length > 0 && !selectedGuild) {
      setSelectedGuild(state.guilds[0].id);
      loadGuildConfig(state.guilds[0].id);
    }
  }, [state.guilds]);

  async function loadGuildConfig(guildId) {
    try {
      const data = await fetch('/api/guild/' + guildId + '/config', { credentials: 'same-origin' }).then(r => r.json());
      if (data) setState(prev => ({ ...prev, disabledCommands: data.disabledCommands || [], commandConfig: data.commandConfig || {} }));
      const [rolesRes, channelsRes] = await Promise.all([
        fetch('/api/guild/' + guildId + '/roles', { credentials: 'same-origin' }).then(function(r) { return r.json(); }).catch(function() { return []; }),
        fetch('/api/guild/' + guildId + '/channels', { credentials: 'same-origin' }).then(function(r) { return r.json(); }).catch(function() { return []; }),
      ]);
      setState(prev => ({ ...prev, guildRoles: Array.isArray(rolesRes) ? rolesRes : [], guildChannels: Array.isArray(channelsRes) ? channelsRes : [] }));
    } catch {}
  }

  function handleGuildChange(guildId) {
    setSelectedGuild(guildId);
    if (guildId) {
      loadGuildConfig(guildId);
      
      if (activeSection !== 'profile') {
        setActiveSection('overview');
      }
    } else {
      setState(prev => ({ ...prev, disabledCommands: [], commandConfig: {}, guildRoles: [], guildChannels: [] }));
    }
  }

  async function toggleBatch(guildId, commands, disable) {
    try {
      const data = await fetch('/api/guild/' + guildId + '/commands/toggle-batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ commands: commands, disabled: disable }),
      }).then(r => r.json());
      if (data) setState(prev => ({ ...prev, disabledCommands: data.disabledCommands || [] }));
    } catch {}
  }

  async function toggleCommand(guildId, commandName) {
    try {
      const data = await fetch('/api/guild/' + guildId + '/commands/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ commandName }),
      }).then(r => r.json());
      if (data) setState(prev => ({ ...prev, disabledCommands: data.disabledCommands || [] }));
    } catch {}
  }

  async function saveCommandConfig(guildId, commandName, config) {
    try {
      const data = await fetch('/api/guild/' + guildId + '/commands/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ commandName, ...config }),
      }).then(r => r.json());
      if (data && data.config) {
        setState(prev => ({
          ...prev,
          commandConfig: { ...prev.commandConfig, [commandName]: data.config },
        }));
      }
    } catch {}
  }

  async function saveBatchCommandConfig(guildId, configs) {
    try {
      const data = await fetch('/api/guild/' + guildId + '/commands/config/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ configs }),
      }).then(r => r.json());
      if (data && data.configs) {
        setState(prev => ({
          ...prev,
          commandConfig: { ...prev.commandConfig, ...data.configs },
        }));
      }
      return data && data.configs;
    } catch { return null; }
  }

  const sections = {
    overview: <OverviewSection user={state.user} economy={state.economy} topList={state.topList} guilds={state.guilds} selectedGuild={selectedGuild} onNavigate={setActiveSection} />,
    economy: <EconomySection economy={state.economy} topList={state.topList} />,
    commands: <CommandsSection user={state.user} state={{ ...state, selectedGuild }} loadGuildConfig={loadGuildConfig} toggleCommand={toggleCommand} toggleBatch={toggleBatch} saveCommandConfig={saveCommandConfig} saveBatchCommandConfig={saveBatchCommandConfig} />,
    leaderboard: <LeaderboardSection topList={state.topList} currentUserId={state.user?.id} />,
    profile: <ProfileSection user={state.user} guildId={selectedGuild} />,
  };

  
  const showContent = activeSection === 'profile' || selectedGuild;

  return (
    <div className="dash-shell">
      <LoadingOverlay visible={state.loading} />
      <AnimatedBackground intensity="normal" />
      <div className="noise-overlay" />
      <div className="dash-glow-mask" />

      <DashboardNavbar
        user={state.user}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        guilds={state.guilds}
        selectedGuild={selectedGuild}
        activeSection={activeSection}
      />
      <DashboardSidebar
        activeSection={activeSection}
        onSectionChange={(id) => { setActiveSection(id); setSidebarOpen(false); }}
        sidebarOpen={sidebarOpen}
        botInfo={state.botInfo}
        guilds={state.guilds}
        selectedGuild={selectedGuild}
        onGuildChange={handleGuildChange}
      />

      <main className="dash-main">
        <div className="dash-content">
          {showContent ? (
            sections[activeSection]
          ) : (
            <div className="dash-empty tw-mt-20">
              <div className="dash-empty-icon"><i className="fas fa-server"></i></div>
              <div className="dash-empty-title">Select a Server</div>
              <div className="dash-empty-desc">Choose a server from the sidebar to get started</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
