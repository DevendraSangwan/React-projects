import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");
  const [timeLeft, setTimeLeft] = useState(20);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
      setTimeLeft(20);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      setAuthor("");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          fetchQuote();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>

      <div className="quote-box">
        <p className="quote">"{quote}"</p>
        <h3>{author && `- ${author}`}</h3>
      </div>

      <p className="timer">
        Next quote in: <span>{timeLeft}</span> sec
      </p>

      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
