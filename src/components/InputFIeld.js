import React from "react";
import { useState } from "react";

export default function InputField(props){
    const [text,setText]=useState("");
    
    const changeToUpper=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const changeToLower=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };
    
    const clear=()=>{
        setText("");
    };

    const changeText=(event)=>{
        setText(event.target.value);
    };

    const alternateCase=()=>{
        let textArray = text.split("");
        let newText = [];
        textArray.forEach((letter,index)=>{
            newText[index] = index%2===0 ? textArray[index].toUpperCase() : textArray[index].toLowerCase();
        })
        newText = newText.join("");
        setText(newText);
    }
    const capitalCase=()=>{
        let textArray = text.toLowerCase().split(" ");
        let newText = [];
        for(var i=0;i<textArray.length;i++){
            textArray[i] = textArray[i][0].toUpperCase()+textArray[i].substring(1);
            newText.push(textArray[i]);
        }
        newText = newText.join(" ");
        setText(newText);
    }
    const copyToClipBoard=()=>{
        navigator.clipboard.writeText(text);
        alert("copied to ClipBoard");
    }
    return(
        <>
        <div className="mb-3">
        <h2 className="form-label">Enter the text below to analyze</h2>
        <textarea className="form-control" id="my-box" placeholder="enter the text here" value={text} onChange={changeText} rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={changeToUpper}>ToUpperCase</button>
        <button className="btn btn-secondary mx-1" onClick={changeToLower}>ToLowerCase</button>
        <button className="btn btn-success mx-1" onClick={alternateCase}>AlternateCase</button>
        <button className="btn btn-info mx-1" onClick={capitalCase}>CapitalCase</button>
        <button className="btn btn-warning mx-1" onClick={copyToClipBoard}>CopyToClipBoard</button>
        <button className="btn btn-danger mx-1" onClick={clear}>Clear</button>
        </div>
        <div className="conatiner">
            <h3>Text Summary</h3>
            <p>{text=="" ? text.trim().split(" ").length=0 : text.trim().split(" ").length}words and {text.length}characters</p>
            <p>{0.008* text.trim().split(" ").length}minutes takes to read the text</p>
            <h3>Text Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}