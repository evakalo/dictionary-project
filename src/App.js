import "./App.css";
import book from "./book.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <h1>Dictionary</h1>
        <img src={book} className="book-logo" alt="book" />
      </header>
    </div>
  );
}
