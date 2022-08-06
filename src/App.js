import "./App.css";
import book from "./book.png";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary</h1>
          <img src={book} className="book-logo" alt="book" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Eva Kalogjera </footer>
      </div>
    </div>
  );
}
