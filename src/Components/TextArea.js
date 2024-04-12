import React, {useState} from 'react'

export default function TextArea(props) {
    
    const valueChanged = (event)=>{
        setText(event.target.value);
    }

    const clickedButton = () => {
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const clickedColorButton = () => {
        setCol({...col, color: "red"});
        props.showAlert("Converted to different color", "success");
    }

    const [text, setText] = useState('')
    const [col, setCol] = useState({backgroundColor : props.mode === "light" ? "#d9d9d9": "grey"})      //Doubts

    return (
        <>
        <div className="mb-3" style={{color : props.mode === 'light' ? 'black': 'white'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value = {text} style= {col} onChange = {valueChanged}id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary my-2" onClick={clickedButton}>Conver to UC</button>
            <button className="btn btn-primary mx-2" onClick={clickedColorButton}>Change Color</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'light' ? 'black': 'white'}}>
            <h2>Text Summay:</h2>
            <p><b>{text === ""? 0: text.split(" ").length} Words and {text.length} Characters</b></p>
            <h2>Text : </h2>
            <p>{text}</p>
        </div>
        </>
    );
}