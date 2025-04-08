import { useState } from "react";
import About from './About';

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
  const [page, setPage] = useState('home');
  return (
    <>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      {/* 
        <button>About</button>
        <h1>Hello World</h1>
      */}
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}

export default App;