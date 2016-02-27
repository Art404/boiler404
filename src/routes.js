import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App/App'
import Page from './components/Page/Page'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Page}/>
  </Route>
)
