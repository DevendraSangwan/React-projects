import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Student Management Portal</h1>
        <p>Learn React Router beautifully.</p>

        <Link to="/students">
          <button className="button">View Students</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;