import "./App.css";
import sova from "./sova.png";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Which word do you seek?</h1>
          <img src={sova} className="sova-logo" alt="book" />
        </header>
        <main>
          <Dictionary defaultKeyword="knowledge" />
        </main>
        <footer>
          <a
            href="https://github.com/evakalo/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by Eva Kalogjera{" "}
        </footer>
      </div>
    </div>
  );
}
