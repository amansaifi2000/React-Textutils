import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpclick = () =>
    {
        if (text.length === 0) {
            setText("");
            props.showAlert("Please Enter Some Text To Convert Into Uppercase", "warning");
          } else {
        let nextText = text.toUpperCase();
        setText(nextText)
        props.showAlert("Converted Into Uppercase!", "success")
    }
}
        const handleLoclick = () =>
        {   
        if (text.length === 0) {
        setText("");
        props.showAlert("Please Enter Some Text To Convert Into Lowercase", "warning");
          } else {
            let nextText1 = text.toLowerCase();
            setText(nextText1)
            props.showAlert("Converted Into Lowercase!", "success")
        }
    }
        const handleSeclick = () =>
        {
            if (text.length === 0) {
                setText("");
                props.showAlert("Please Enter Some Text", "warning");
              } else {
                let sentenceCase = text[0].toUpperCase() + text.slice(1).toLowerCase();
                setText(sentenceCase);
                props.showAlert("Converted Into Sentence Case!", "success");
              }     
        }
        const handleDeclick = () =>
        {
            let clearText = ''
                setText(clearText)
                props.showAlert("Your Text Has Been Cleared!", "success")
        }
        const handleCoclick = () =>
        {
        navigator.clipboard.writeText(text)
                props.showAlert("Your Text Has Been Copied!", "success")
        }
        const handleCaclick = () =>
        {
    if (text.trim().length === 0) {
      setText("");
      props.showAlert("Please Enter Some Text!", "warning");
    } else {
      const sentenceCase1 = (text) => { 
        if(text.trim().length) return text[0].toUpperCase() + text.slice(1).toLowerCase() 
        else return text
      };
      const words = text.split(' ').map(sentenceCase1);
      const capitalizedSentence = words.join(' ');
      setText(capitalizedSentence);
      props.showAlert("Converted Into Capitalized Text!", "success");
    }
    }
        const handleExclick = () =>
        {
            let removeSpaces = text.split(/[ ]+/)
            setText(removeSpaces.join(" "))   
            props.showAlert("Spaces Has Been Removed!", "success")
        }
    const handleonChange = (event) =>
    {
        // let nextText = text.toUpperCase;
        setText(event.target.value)
    }
    
    const [text,setText] = useState("")    
  return (
    <>
    <div className= "Container" style = {{color:props.mode === 'dark'?'white':'#092f48'}} >
<div className="mb-3">
<h1 className = "mb-4">{props.heading}</h1>
<textarea className="form-control" value={text}onChange={handleonChange} style = {{backgroundColor: props.mode 
    === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#092f48'}}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleSeclick}>Sentence Case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCaclick}>Capital Letters</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExclick}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCoclick}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleDeclick}>Clear Text</button>
</div>
<div className = "Container my-3" style = {{color : props.mode === 'dark'?'white':'#092f48'}}>
<h2>Text Summary</h2>
<p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
{ text.length > 0 && <p>{(text.length / 200).toFixed(1)} Minutes to read</p> }
<h2>Preview Text</h2>
<p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
</>
  )
}
