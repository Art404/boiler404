import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App/App'
import Page from './components/Page/Page'
import About from './components/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'

const createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory()


export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Page}/>
      <Route name="project" path="about" component={About}/>
      <Route name="project" path="project/:projectID" component={ProjectDetail}/>
      <Route name="category" path="/:cat" component={Page}>
        <Route path="tagged/:subtag" component={Page} />
      </Route>
    </Route>
  </Router>
)
