import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersInput: '',
  }

  onChangeLettersInput = event => {
    this.setState({lettersInput: event.target.value})
  }

  render() {
    const {lettersInput} = this.state

    return (
      <div className="app-container">
        <img
          alt="letters calculator"
          className="calculator-image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phraseText" className="label">
            Enter the phrase
          </label>
          <input
            id="phraseText"
            type="text"
            className="letters-input"
            placeholder="Enter the phrase"
            value={lettersInput}
            onChange={this.onChangeLettersInput}
          />
          <p className="button">No.of letters: {lettersInput.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
