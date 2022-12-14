import "./Dictionary.css";

// import ReactAudioPlayer from "react-audio-player";
export default function Phonetic(props) {
  if (props.phonetic.audio !== "") {
    return (
      <div className="Phonetics">
        {/* <ReactAudioPlayer src={props.phonetic.audio} onPlay controls /> */}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        *{props.phonetic.text}
      </div>
    );
  }
}
