import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter Text Here')

  const convertUpperCase = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const convertLowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const clearText = () => {
    setText('')
  }

  const handleOnChange = (event) => {
    console.log('On Change event invoked, text value: ' + event.target.value)
    setText(event.target.value)
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h5>{props.heading}</h5>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={convertUpperCase}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={convertLowerCase}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={clearText}>
        Clear Text
      </button>
      <div className="container my-2">
        <h5>Your Text Summary</h5>
        <p>
          {text.split(' ').length} words and {text.length} characters.
        </p>
        {/* lets assume 0.08 minutes will take to read 1 word in a text doc. */}
        <p>
          {parseInt(text.split(' ').length) * 0.08} minutes to read above text.
        </p>
      </div>
    </>
  )
}
