
function App() {
  let name = "Yujia";
  
  const handleClick = () => {
    name = "Amanda"
  }
  
  return (
    <div>
      <h1>Hello World</h1>
      {name}
      <button onClick="handleClick">Update</button>
    </div>
  );
}

export default App