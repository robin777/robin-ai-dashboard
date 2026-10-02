export default function WelcomeHero({ user, profile }) {
  const fmt = (n) => {
    if (n == null) return "\u2014";
    return Number(n).toLocaleString();
  };

  return (
    <div className="dash-hero">
      <div className="dash-hero-avatar">
        {user?.avatar ? (
          <img
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=96`}
            alt=""
          />
        ) : (
          user?.username?.charAt(0).toUpperCase() || "L"
        )}
      </div>
      <div>
        <h1 className="dash-hero-title">
          Welcome back,{" "}
          <span className="dash-hero-accent">{user?.username || "User"}</span>
        </h1>
        {profile && (
          <p className="dash-hero-sub">
            Rank #{fmt(profile.rank)} &middot; Level {profile.textLevel || 0}{" "}
            &middot; Streak {profile.streak || 0}d
          </p>
        )}
      </div>
    </div>
  );
}
