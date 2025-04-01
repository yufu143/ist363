// brings in react useState code
import { useState } from "react";

// sets up useState, what variable, what function changes it, and what start value
const Home = () => {
  const [name, setName]  = useState('Yujia');

let handleClick = () => {
  setName(Yujia);
}

  return (
    <div>
      <h1>Hello World</h1>
      {name}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

/*
function App() {
  let name = "Yujia";
  const handleClick = () => {
    name = "Amanda"
    // check to show this function runs
    console.log(name);
  }
*/

export default App