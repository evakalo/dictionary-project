import Synonyms from "./Synonyms";
import "./Dictionary.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <section>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="Definitions">
              {index + 1}. {definition.definition}
              <br />
              <em className="Example">{definition.example}</em>
              <br />
            </div>
          );
        })}{" "}
      </section>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
