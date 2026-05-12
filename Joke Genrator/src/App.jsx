import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Loading...");
  const [timeLeft, setTimeLeft] = useState(20);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
      const data = await response.json();

      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} — ${data.delivery}`);
      }

    setTimeLeft(20);
    } catch (error) {
      setJoke("Failed to fetch joke.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          fetchJoke();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Random Joke Generator</h1>

      <div className="quote-box">
        <p className="quote">🤣 {joke} 🤣 </p>
      </div>

      <p className="timer">
        Next Joke in: <span>{timeLeft}</span> sec
      </p>

      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default App;
