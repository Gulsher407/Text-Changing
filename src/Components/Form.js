import React, { useState } from "react";

export default function Form(props) {

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClickUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    copyTextToClipboard(uppercaseText);
    props.showAlert("Conveted to Uppercase","success")
  };

  const handleClickLowercase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    copyTextToClipboard(lowercaseText);
    props.showAlert("Conveted to Lower","success")

  };

  const handleClearText = () => {
    setText("");
  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
  };

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text) 
    props.showAlert("Copied to the clipboard","success")

  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "data.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("text file downloaded","success")

  };


  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'gray' }}>
        <h2>Enter Your Data Below</h2>
        <div>
          <textarea
            className="form-control"
            id="mybox"
            rows="6"
            style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={handleClickUppercase}
        >
          Uppercase
        </button>
        <button
          className="btn btn-secondary mx-2 mt-2"
          onClick={handleClickLowercase}
        >
          Lowercase
        </button>
        <button
          className="btn btn-secondary mx-2 mt-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-secondary mx-2 mt-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-success mt-2"
          onClick={() => copyTextToClipboard(text)}
        >
          Copy Text
        </button>
        <button
          className="btn btn-info mx-2 mt-2"
          onClick={handleDownloadText}
        >
          Download Text
        </button>
        
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters
        </p>
        <h2>Preview Text</h2>
        <p className="px-6 py-10 mt-3">{text}</p>
      </div>
    </>
  );
}
