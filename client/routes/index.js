import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import About from '../containers/About/About'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
)
