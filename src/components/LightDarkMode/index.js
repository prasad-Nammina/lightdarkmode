// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  getText = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getTextButton = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const textButton = this.getTextButton()

    const {isLightMode} = this.state

    const modeClassName = isLightMode ? 'lightmode' : 'darkmode'

    const headingClassName = isLightMode ? 'heading-light' : 'heading-dark'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className={`container ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <button type="button" className="btn" onClick={this.getText}>
            {textButton}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
