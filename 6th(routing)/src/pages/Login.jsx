import { useNavigate } from "react-router-dom";
import{useState} from "react"

function Login() {
  const navigate = useNavigate();
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };


  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button className="button" onClick={handleLogin}>
          Login
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "15px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;