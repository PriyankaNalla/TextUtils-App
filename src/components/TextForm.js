import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [linesCount, setLinesCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleCountWords = () => {
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;
    let characterCount = text.replace(/\s+/g, '').length; // count characters excluding whitespaces
    // setCount(wordCount);
    setCharCount(characterCount);

    let sentences = text.trim().split(/\.+/);
    let sentenceCount = sentences.filter(sentence => sentence.length > 0).length;
    setSentenceCount(sentenceCount);

    let lines = text.trim().split(/\n+/);
    let linesCount = lines.filter(line => line.length > 0).length;
    setLinesCount(linesCount);
    props.showAlert("Count function is performed successfully", "success");
  };

  const handleRefresh = () => {
    setText("Enter Text here");
    setCount(0);
    setCharCount(0);
    setSentenceCount(0);
    setLinesCount(0);
    props.showAlert("Refresh is performed successfully", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied successfully", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces trimmed successfully", "success");
  }

  return (
    <>
      <div className="div my-4" style={{ color: props.colorPalette.color }}>
        <h2>{props.heading}</h2>
        {/* Form div */}
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.colorPalette.backgroundColor,
              color: props.colorPalette.color
            }}
            id="myBox"
            rows="8"
          >
          </textarea>
        </div>
        {/* Form div ended */}
        <button disabled={text.length==0} className={`btn btn-${props.colorPalette.buttonColor} m-2`} id="ubtn" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button disabled={text.length==0} className={`btn btn-${props.colorPalette.buttonColor} m-2`} id="lbtn" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button disabled={text.length==0} className={`btn btn-${props.colorPalette.buttonColor} m-2`} id="cpbtn" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length==0} className={`btn btn-${props.colorPalette.buttonColor} m-3`} id="esbtn" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length==0} className={`btn btn-${props.colorPalette.buttonColor} m-2`} id="cbtn" onClick={handleCountWords}>Count</button>

        <div className="container">
          <h2>Your text summary</h2>
          <p>
            Number of Words:{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} <br />
            Number of Characters: {charCount} <br />
            Number of words can be read in {0.008 * count} minutes <br />
            Number of Sentences: {sentenceCount} <br />
            Number of Lines: {linesCount} <br />
          </p>
          <h2>Your text Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
        <button className={`btn btn-${props.colorPalette.buttonColor} my-2`} id="rbtn" onClick={handleRefresh}>Refresh</button>
      </div>
    </>
  );
}
