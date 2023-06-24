import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('')

  const convertUpperCase = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const convertLowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const convertSentenceCase = () => {
    let newText = text.replace(/(^\w|[\.\?!]\s\w)/g, (match) =>
      match.toUpperCase()
    )
    setText(newText)
  }

  const convertCapitalizedCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/\b\w/g, (match) => match.toUpperCase())
    setText(newText)
  }

  const convertAlternatingCase = () => {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text.charAt(i).toLowerCase()
      } else {
        newText += text.charAt(i).toUpperCase()
      }
    }
    setText(newText)
  }

  const convertInverseCase = () => {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (char === char.toUpperCase()) {
        newText += char.toLowerCase()
      } else {
        newText += char.toUpperCase()
      }
    }
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
          <h5 className="display-6 mx-2 mt-4 mb-4">
            <b>{props.heading}</b>
          </h5>
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{ height: '225px', maxWidth: '850px' }}
        ></textarea>
      </div>
      <div className="d-flex  gap-1 ">
        <button className="btn btn-info mx-1" onClick={convertUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-info mx-1" onClick={convertLowerCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-info mx-1" onClick={convertSentenceCase}>
          Convert To Sentence Case
        </button>
        <button className="btn btn-info mx-1" onClick={convertCapitalizedCase}>
          Convert To Capitalized Case
        </button>
      </div>{' '}
      <div className="d-flex  gap-1 mt-1 ">
        <button className="btn btn-info mx-1" onClick={convertAlternatingCase}>
          Convert To aLtErNaTiNg Case
        </button>
        <button className="btn btn-info mx-2" onClick={convertInverseCase}>
          Convert To InVeRsE Case
        </button>
        <button className="btn btn-dark mx-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="card mx-1 mt-5" style={{ width: '18rem' }}>
        <div class="card-body">
          {' '}
          <h5 className="card-title">Your Text Summary</h5>
          <p className="card-subtitle mb-2 text-muted">
            {text.split(' ').length} words and {text.length} characters.
          </p>
          <p className="card-text">
            {parseInt(text.split(' ').length) * 0.08} minutes to read the above
            text.
          </p>
        </div>
      </div>
    </>
  )
}
