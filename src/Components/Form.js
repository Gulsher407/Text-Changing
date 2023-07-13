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
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleClickLowercase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    copyTextToClipboard(lowercaseText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Clearded", "success");

  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
    props.showAlert("Extra-Spaces Removed", "success");

  };

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to the clipboard", "success");
  };
  const handleReverseText = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
    copyTextToClipboard(reversedText);
    props.showAlert("Text Reversed", "success");
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "data.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("Text file downloaded", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className=" mt-2" >Enter Your Data Below</h2>
        <div>
          <textarea
            className="form-control"
            id="mybox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
              borderColor: props.mode === "dark" ? "white" : "black",
              borderRadius: "2px",
              padding: "8px",
              fontSize: "16px",
              resize: "none",
            }}
            value={text}
            onChange={handleChange}
          ></textarea>



        </div>
        <button
          disabled={!text || text.trim().length === 0}
          className="btn btn-primary mt-2 mx-0"
          onClick={handleClickUppercase}>
          Uppercase
        </button>
        <button
          disabled={!text || text.trim().length === 0}
          className="btn btn-secondary mx-3 mt-2"
          onClick={handleClickLowercase}
        >
          Lowercase
        </button>
        <button
          disabled={!text}
          className="btn btn-danger mx-2 mt-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-2 mt-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={!text || text.trim().length === 0}
          className="btn btn-success mt-2 mx-2"
          onClick={() => copyTextToClipboard(text)}
        >
          Copy Text
        </button>
        <button
          disabled={!text || text.trim().length === 0}
          className="btn btn-info mx-2 mt-2"
          onClick={handleDownloadText}>
          Download Text
        </button>
        <button
          disabled={!text || text.trim().length === 0}
          className="btn btn-primary mt-2 mx-2"
          onClick={handleReverseText}>

          Reverse Text
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <h2>Preview Text</h2>
        <p className="px-6 py-10 mt-3">{text}</p>
      </div>
    </>
  );
}
