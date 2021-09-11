import React,{useState} from 'react'

function Textform(props) {
    const [text, setText] = useState("")

    const handleUpClick=()=>{
        setText(text.toUpperCase())
        text.length && props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick=()=>{
        setText(text.toLowerCase())
        text.length && props.showAlert("Converted to Lowercase","success")
    }

    const handleCopy = () => {
        // var textFromBox = document.getElementById("myBox");
        // textFromBox.select();
        navigator.clipboard.writeText(text);
        // navigator.clipboard.writeText(textFromBox.value);
        // document.getSelection().removeAllRanges()
        text.length===0?props.showAlert("Nothing to copy","warning"):props.showAlert("Copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        text.length && props.showAlert("Extra Spaces are removed","success")
    }

    const handleSpaces = ()=>{
		let newText = text.replace(/\s/g, '')
		setText(newText)
        text.length && props.showAlert("Spaces are removed","success")
	}

    const handleSpecialCharcter = ()=>{
		let newText = text.replace(/[^a-zA-Z ]/g, "")
		setText(newText)
        text.length && props.showAlert("Special Charcters are removed","success")
	}

    const handleReverseText = () => {
        let newText = text.split(" ").reverse().join(" ") 
        setText(newText) 
        text.length && props.showAlert("Text Reversed","success")
        }
     
        const handleCapitlizeClick = () => {
            let newText = text.replace(/\b\w/g, l => l.toUpperCase())
            setText(newText);
            text.length && props.showAlert("First letter converted to uppercase","success")
        }

        const handleDuplicate = () => {
            let arrOfText = text.split(" ");
            arrOfText = arrOfText.filter(function (item, index, inputArray) {
              return inputArray.indexOf(item) === index;
            });
            const newText = arrOfText.join(" ");
            setText(newText);
            text.length && props.showAlert("Duplicate word removed","success")
          }

        const handleDownload = () => {
            const element = document.createElement("a");
            const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = "myFile.txt";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
            text.length && props.showAlert("Text file downloaded","success")
          }

          const handleTextColor = () => {
            let newText = document.getElementById("myBox").style.color="red";
            setText(newText);
            text.length && props.showAlert("Text color changes to red","success")
          };

    const handleClearClick=()=>{
        setText('')
        props.showAlert("Text Area cleared","success")
    }

    const handleInverseClick = ()=>{
        let newText =''
        for (const letter of text) {

            if (letter === letter.toLowerCase()) {
                newText = newText+(letter.toUpperCase());
            } else {
                newText = newText+(letter.toLowerCase());
            }
        }
        setText(newText);
       text.length && props.showAlert("Text Case changed","success")
    }

    const handleOnChange=(e)=>{
        console.log("onChange is clicked")
        setText(e.target.value)
    }

    return (
        <div className="container mt-3">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label" style={{color:props.mode==="dark"?"white":"black"}}><h3>Enter your Text to Analyze</h3></label>
                <textarea className="form-control" value={text} id="myBox" rows="8" style={{background:props.mode==="dark"?"#000B2B":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange}></textarea>
            </div>
            <div>        
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleInverseClick}>Convert Case</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleSpaces}>Remove Spaces</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleSpecialCharcter}>Remove Special Charcter</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleReverseText}>Reverse Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleCapitlizeClick}>Capitalize first letter</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleDuplicate}>Remove Duplicates</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleDownload}>Download .txt</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==="light"?"primary":"success"} m-2`} onClick={handleTextColor}>Text color Changer</button>
            </div>
            <div className="my-4" style={{color:props.mode==="dark"?"white":"black"}}>
                <h3>Your Text Summery</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charcters</p>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} times take to read</p>
                <h4>Preview</h4>
                <p style={{color:text.length>0?"green":"red"}}>{text.length>0?text:"Nothing to preview here"}</p>
            </div>
        </div>
    )
}

export default Textform
