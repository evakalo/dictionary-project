import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {/* <h2>Synonyms:</h2> */}
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
