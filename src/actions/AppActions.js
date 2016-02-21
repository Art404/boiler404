import alt from '../alt'

class AppActions {
  constructor() {
    this.generateActions(
      'toggleSidebar',
      'listenToDB'
    )
  }
}

export default alt.createActions(AppActions)
