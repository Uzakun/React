import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newUpText = text.toUpperCase();
        setText(newUpText);
        props.showAlert("Upper Case Enabled", "success");

    }

    const handleLoClick = () => {
        let newLoText = text.toLowerCase();
        setText(newLoText);
        props.showAlert("Lower Case Enabled", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div>
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#606060':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Uppercase</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Words and Characters</h1>
                <p>{text.split().length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} time(in Minutes) will be taken to read this whole text.</p>
          </div>
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above box to preview it here."}</p>
          </div>
        </>
    )
}