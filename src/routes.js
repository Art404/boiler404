import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App/App'
import Page from './components/Page/Page'

const createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory()

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Page}/>
    </Route>
  </Router>
)
