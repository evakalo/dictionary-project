import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input className="Form" type="search" onChange={updateWord}></input>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
