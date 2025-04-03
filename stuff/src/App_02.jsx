function App() {
  const handleChange = (event) => {
    // whole event 
    console.log(event);
    // value of the typing (here: input HTML element)
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App