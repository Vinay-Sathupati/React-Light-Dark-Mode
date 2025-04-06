// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode', className: null}

  changeMode = () => {
    this.setState(preState => ({
      text: preState.text === 'Light Mode' ? 'Dark Mode' : 'Light Mode',
      className: preState.text === 'Dark Mode' ? null : 'lightMode',
    }))
  }

  render() {
    const {text, className} = this.state
    return (
      <div className="main-container">
        <div className={`${className} container`}>
          <h1 className={`${className} para`}>Click To Change Mode</h1>
          <div>
            <button
              type="button"
              onClick={this.changeMode}
              className="button-styling"
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
