function App() {
  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      Subscribe to Janu
      <p>Let's {handleNameChange()} Money</p>
    </div>
  );
}

export default App;
