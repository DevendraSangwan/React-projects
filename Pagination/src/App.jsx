import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 8;

  useEffect(() => {
    fetchUsers();
  }, [searchQuery, page]);

  const fetchUsers = async () => {
    const query = searchQuery || "a"; // default data

    const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`;

    const res = await fetch(url);
    const data = await res.json();

    setUsers(data.items || []);
    setTotalPages(Math.ceil((data.total_count || 0) / limit));
  };

  return (
    <div className="container">

      <h1>GitHub Users Explorer</h1>

      {/* SEARCH */}
      <input
        value={searchText}
        placeholder="Search users..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchQuery(searchText);
            setPage(1);
          }
        }}
      />

      {/* INFO */}
      <p>Page {page} / {totalPages}</p>

      {/* GRID */}
      <div className="grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />

    </div>
  );
}

export default App;