import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchInputLength = () => {
    const {searchInput} = this.state
    return searchInput.length
  }

  render() {
    const length = this.searchInputLength()
    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputElement" className="phrase">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputElement"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearchInput}
          />
          <button type="button" className="button">
            No.of letters: {length}
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
