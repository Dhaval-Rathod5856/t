import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearText = ()=>{
      let txtclear = "";
      setText(txtclear);
      props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to ClipBoard!", "success");
    }
    const handleOnChange = (event)=>{
      setText(event.target.value);
     }
     const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove Extra Spaces", "success");
     }
  return (
      <>
    
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1 className='mb-4' >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
      </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Nothing to preview!"}</p>
      </div> 

    </>
  )
}
