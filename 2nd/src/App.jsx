import { useState } from 'react'

import './App.css'

function App() {
const[joke,setJoke]=useState("");
async function getJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data=await res.json();
    setJoke(data.setup+"😂 " + data.punchline);
}

  return (
    <>
    <div>
<h2>😂 Joke Generator</h2>
      <button onClick={getJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
    </>
  )
}

export default App
