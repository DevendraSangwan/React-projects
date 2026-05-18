import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>{theme === "light" ? "☀ Light Mode" : "🌙 Dark Mode"}</h1>
        <p>Theme Switcher using Context API</p>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;