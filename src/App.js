import "./App.css";
import ExpenceApp from "./Components/ExpenseApp";

function App() {
  console.log("hello");

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
        <ExpenceApp />
      </header>
    </div>
  );
}

export default App;
