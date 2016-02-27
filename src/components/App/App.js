import '../../styles/_Main.scss'
import React, {cloneElement} from 'react'
import Navigation from '../Navigation/Navigation'
import cn from 'classnames'
import {isEqual} from 'lodash'

class App extends React.Component {
  static displayName = 'App';

  static propTypes = {
    app: React.PropTypes.object,
    agent: React.PropTypes.string,
    sideOpen: React.PropTypes.bool,
    children: React.PropTypes.object,
    location: React.PropTypes.object,
    params: React.PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const agent = 'desktop'
    const sideOpen = false
    //children are the routes
    const {children} = this.props
    
    return (
      <div className="App">
        <Navigation agent={agent} sideOpen={sideOpen} />
        <div className="App-content">
          {cloneElement(children, this.props)}
        </div>
      </div>
    )
  }
}

export default App
