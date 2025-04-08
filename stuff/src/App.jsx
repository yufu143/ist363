import { useState } from "react";

function About () {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// conditional rendering aka navigation SPAs
function App () {
  return (
    <>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      <button>About</button>
      <h1>Hello World</h1>
    </>
  );
}

export default App;