import { useState, useEffect } from "react";
import "./App.css"

export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query) {
        setUsers([]);
        return;
      }
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then((res) => res.json())
        .then((data) => setUsers(data.items || []));
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);


  

  return (
    <div className="main-container">
      <div className="header">
        <h2>🚀 GitHub Finder</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Kise search karna hai? (e.g. salma-shaik)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="results-grid">
        {users.length > 0 ? (
          users.map((u) => (
            <div key={u.id} className="user-card">
              <img src={u.avatar_url} alt={u.login} />
              <h3>{u.login}</h3>
              <a href={u.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          ))
        ) : (
          query && <p className="status-text">Searching for users...</p>
        )}
      </div>
    </div>
  );
}