import React, { Component } from 'react'

class Outputs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      copySuccess: false
    }
  }

  copyToClipboard = () => {
    const element = this.textarea
    element.select()
    document.execCommand("copy")
    this.setState({ copySuccess: true })
  }

  render() {
    return (
      <div className="Output-container">
        <p>Validated Urls</p>
        <textarea
          readOnly
          rows="10"
          cols="100"
          id="outputTextBlock"
          placeholder="Validated urls will show here"
          ref = {(textarea) => this.textarea = textarea}
        />
        <button 
          className="btn" 
          onClick = { () => this.copyToClipboard() }
        >
          Copy
        </button>
        {
          this.state.copySuccess ?
          <div style = {{ "color": "green" }}>
            Copied to clipboard
          </div> : null
        }
      </div>
    )
  }
}

export default Outputs