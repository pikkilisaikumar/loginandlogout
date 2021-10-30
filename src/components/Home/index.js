import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isTrue: true}

  onButton = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  render() {
    let sai
    const {isTrue} = this.state
    if (isTrue) {
      sai = 'Please Login'
    } else {
      sai = 'Welcome User'
    }
    return (
      <div className="backgrounddetails">
        <div className="card-container">
          <Message logindata={sai} />
          <button type="button" onClick={this.onButton} className="buttonone">
            {isTrue && <Login />}
            {!isTrue&&<Logout />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
