import React, { useState } from 'react';

export default function TextForm(prop) {

    const handleUpClick = () => {
        // console.log("object---------" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("btn click+ " + newText);
    };
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    };
    const handleClear = ()=>{
        setText('');
    };

    const [text, setText] = useState("Enter text");
    
    return (
        <>
        <div className='container'>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}> ToUpper</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerClick}> ToLower</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}> Clear</button>
        </div>
        <div className="container my-4">
            <h1> Your text summary </h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
