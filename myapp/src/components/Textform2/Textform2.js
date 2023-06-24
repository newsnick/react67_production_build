/* import React, { useState } from 'react'

export default function Textform2(props) {
  const [text, setText] = useState('')
  const [formattedText, setFormattedText] = useState('')

  const convertUnderlineText = () => {
    setFormattedText((prevText) => prevText + ' underline')
  }

  const convertMirrorText = () => {
    setFormattedText((prevText) => prevText + ' mirror')
  }

  const clearText = () => {
    setText('')
    setFormattedText('')
  }

  const convertBoldText = () => {
    setFormattedText((prevText) => prevText + ' bold')
  }

  const convertItalicText = () => {
    setFormattedText((prevText) => prevText + ' italic')
  }

  const handleOnChange = (event) => {
    console.log('On Change event invoked, text value: ' + event.target.value)
    setText(event.target.value)
  }

  const formatText = () => {
    let formatted = text
    const formatClasses = formattedText.split(' ')
    formatClasses.forEach((formatClass) => {
      switch (formatClass) {
        case 'underline':
          formatted = `<u>${formatted}</u>`
          break
        case 'mirror':
          formatted = formatted.split('').reverse().join('')
          break
        case 'bold':
          formatted = `<strong>${formatted}</strong>`
          break
        case 'italic':
          formatted = `<em>${formatted}</em>`
          break
        default:
          break
      }
    })
    return formatted
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h5 className="display-6 mx-2 mt-4 mb-4">
            <b>{props.heading}</b>
          </h5>
        </label>

        <div style={{ position: 'relative' }}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{ height: '225px', maxWidth: '850px', zIndex: 1 }}
          />{' '}
          {formattedText && (
            <div
              className="formatted-text-overlay"
              style={{ position: 'absolute', top: 100, left: 10, zIndex: 1 }}
              dangerouslySetInnerHTML={{ __html: formatText() }}
            />
          )}
        </div>
      </div>

      <button className="btn btn-success mx-1" onClick={convertUnderlineText}>
        Underline Text
      </button>
      <button className="btn btn-success mx-1" onClick={convertMirrorText}>
        Mirror Text Converter
      </button>
      <button className="btn btn-success mx-1" onClick={convertBoldText}>
        Bold Text Converter
      </button>
      <button className="btn btn-success mx-1" onClick={convertItalicText}>
        Italic Text Converter
      </button>
      <button className="btn btn-dark mx-1" onClick={clearText}>
        Clear Text
      </button>

      <div className="card mx-1 mt-5" style={{ width: '18rem' }}>
        <div className="card-body">
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
 */

import React, { useState } from 'react'

export default function Textform2(props) {
  const [text, setText] = useState('')
  const [formattedText, setFormattedText] = useState('')

  const convertUnderlineText = () => {
    setFormattedText((prevText) => prevText + ' underline')
  }

  const convertMirrorText = () => {
    setFormattedText((prevText) => prevText + ' mirror')
  }

  const clearText = () => {
    setText('')
    setFormattedText('')
  }

  const convertBoldText = () => {
    setFormattedText((prevText) => prevText + ' bold')
  }

  const convertItalicText = () => {
    setFormattedText((prevText) => prevText + ' italic')
  }

  const handleOnChange = (event) => {
    console.log('On Change event invoked, text value: ' + event.target.value)
    setText(event.target.value)
  }

  const formatText = () => {
    let formatted = text
    const formatClasses = formattedText.split(' ')
    formatClasses.forEach((formatClass) => {
      switch (formatClass) {
        case 'underline':
          formatted = `<u>${formatted}</u>`
          break
        case 'mirror':
          formatted = formatted.split('').reverse().join('')
          break
        case 'bold':
          formatted = `<strong>${formatted}</strong>`
          break
        case 'italic':
          formatted = `<em>${formatted}</em>`
          break
        default:
          break
      }
    })
    return formatted
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h5 className="display-6 mx-2 mt-4 mb-4">
            <b>{props.heading}</b>
          </h5>
        </label>

        <div style={{ position: 'relative' }}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{ height: '225px', maxWidth: '850px', zIndex: 1 }}
          />{' '}
          {formattedText && (
            <div
              className="formatted-text-overlay"
              style={{ position: 'absolute', top: 100, left: 10, zIndex: 1 }}
            >
              <p
                style={{ margin: 0 }}
                dangerouslySetInnerHTML={{ __html: formatText() }}
              />
            </div>
          )}
        </div>
      </div>

      <button className="btn btn-success mx-1" onClick={convertUnderlineText}>
        Underline Text
      </button>
      <button className="btn btn-success mx-1" onClick={convertMirrorText}>
        Mirror Text Converter
      </button>
      <button className="btn btn-success mx-1" onClick={convertBoldText}>
        Bold Text Converter
      </button>
      <button className="btn btn-success mx-1" onClick={convertItalicText}>
        Italic Text Converter
      </button>
      <button className="btn btn-dark mx-1" onClick={clearText}>
        Clear Text
      </button>

      <div className="card mx-1 mt-5" style={{ width: '18rem' }}>
        <div className="card-body">
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
