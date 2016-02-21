import alt from '../alt'
import AppActions from '../actions/AppActions'
import {cloneDeep, findKey} from 'lodash'
import MobileDetect from 'mobile-detect'
import request from 'superagent'

class AppStore {
  constructor() {
    const md = new MobileDetect(window.navigator.userAgent)
    this.bindActions(AppActions)
    this.state = {
      'agent': md.mobile() ? 'mobile' : 'desktop',
      'sideOpen': false
    }
    this.getDB()
  }

  toggleSidebar () {
    this.setState({
      'sideOpen': !this.state.sideOpen
    })
  }

  getDB () {
    request.get('/getDB').end((err, resp) => {
      if (err) console.error(err)
      else this.setState(resp.body)
    })
  }
 }

export default alt.createStore(AppStore, 'AppStore')
