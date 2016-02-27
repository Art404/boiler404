import '../../styles/_Main.scss'
import React, {cloneElement} from 'react'
import {Provider} from 'react-redux'
import AppStore from '../../stores/AppStore'
import Navigation from '../Navigation/Navigation'
import cn from 'classnames'
import {isEqual} from 'lodash'

class App extends React.Component {
  static displayName = 'App';

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    //children are the routes
    const {children} = this.props

    return (
      <Provider store={AppStore}>
        <div className="App">
          <Navigation/>
          <div className="App-content">
            {cloneElement(children, this.props)}
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
