import React, { Component } from 'react'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      value: '' ,
      urlError: false,
      wrongUrlsString: ''
    }
    this.validateUrls = this.validateUrls.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reloadPage() {
    window.location.reload();
  }

  validateUrls(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const enteredUrls = this.state.value
    const splitEachUrl = enteredUrls.split("\n");
    const urlRegex = /(\s+)|(\%)|(\[)|(\{)|(\])|(\})|(\,)|(\')|(\~)|(\#)|(\$)|(\_)|(\:)|(\|)/;

    const newUrls = []
    const wrongUrls = []

    // 
    for (let i = 0; i < splitEachUrl.length; i++) {
      let splitAfterComma = splitEachUrl[i].split(",/");
      if (/(^\/)/.test(splitAfterComma[0])) {
        if (urlRegex.test(splitAfterComma[0])) {
          newUrls.push('"' + splitAfterComma[0] + '",/' + splitAfterComma[1])
        } else {
          newUrls.push(splitEachUrl[i])
        }
      }
      // if (/(^\/)/.test(splitEachUrl[i])) {
      //   if (urlRegex.test(splitEachUrl[i])) {
      //     newUrls.push('"' + splitEachUrl[i] + '"')
      //   } else {
      //     newUrls.push(splitEachUrl[i])
      //   }
      // } else {
      //   this.setState({ urlError: true })
      //   wrongUrls.push(splitEachUrl[i])
      // }
    }

    // If there're wrong urls
    if (wrongUrls.length > 0) {
      let errorString = ''

      wrongUrls.forEach((element) => {
        errorString = errorString + element + "<br />";
      })

      this.wrongUrlsString = errorString
    } 

    // Build new URLs strixwng
      let newUrlString = ''

      newUrls.forEach((element) => {
        newUrlString = newUrlString + element + "\n"
      })

      document.getElementById('outputTextBlock').value = newUrlString
  }
  
  render() {
    return (
      <div className="Inputs-container">
        <p>Urls for Redirections</p>
        <form onSubmit={ this.handleSubmit }>
          <textarea
            rows="10"
            cols="100"
            value={ this.state.value }
            onChange={ this.validateUrls }
            placeholder="/inventory/used-2017-mazda-mazda6-grand-touring-fwd-4d-sedan-jm1gl1w50h1131756"
          />
          <button
            type="submit"
            className="btn"
          >
            Validate
          </button>
        </form>
        <button
          onClick = { () => this.reloadPage() }
        >
          Clean
        </button>
        {
          this.state.urlError ?
          <div className="ErrorContainer" style = {{ "color": "red" }}>
            <p>There are issues in this Urls:</p>
            <span dangerouslySetInnerHTML={{ __html:this.wrongUrlsString }} />
          </div>
          : null
        }
      </div>
    )
  }
}

export default Inputs