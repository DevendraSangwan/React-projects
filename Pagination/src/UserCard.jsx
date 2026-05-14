function UserCard({ user }) {
  return (
    <div className="card">

      <img src={user.avatar_url} alt="profile" />

      <h3>{user.login}</h3>

      <a href={user.html_url} target="_blank">
        View Profile
      </a>

    </div>
  );
}

export default UserCard;