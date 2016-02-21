import '../../styles/_Main.scss'
import React, {cloneElement} from 'react'
import Navigation from '../Navigation/Navigation'
import Menu from '../Menu/Menu'
import MenuMobile from '../Menu/MenuMobile'
import connectToStores from 'alt-utils/lib/connectToStores'
import AppStore from '../../stores/AppStore'
import AppActions from '../../actions/AppActions'
import cn from 'classnames'
import {isEqual} from 'lodash'

class App extends React.Component {
  static displayName = 'App';

  static propTypes = {
    app: React.PropTypes.object,
    main: React.PropTypes.object,
    main: React.PropTypes.object,
    squad: React.PropTypes.array,
    agent: React.PropTypes.string,
    sideOpen: React.PropTypes.bool,
    children: React.PropTypes.object,
    location: React.PropTypes.object,
    params: React.PropTypes.object
  };

  static getStores() {
    return [AppStore]
  }

  static getPropsFromStores() {
    return AppStore.getState()
  }

  constructor (props) {
    super(props)
    this.state = {
      'fixed': false,
      'mounted': false
    }
    this.checkScroll = this.checkScroll.bind(this)
  }

  componentWillMount () {
    AppActions.listenToDB()
  }

  componentDidMount () {
    this.setState({'mounted': true})
    document.addEventListener('scroll', this.checkScroll)
  }

  componentDidUpdate (prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) window.scrollTo(0, 0)
  }

  checkScroll () {
    if (document.body.scrollTop >= 50 && !this.state.fixed) {
      this.setState({ 'fixed': true })
    } else if (document.body.scrollTop <= 50 && this.state.fixed) {
      this.setState({ 'fixed': false })
    }
  }

  render() {
    //children are the routes
    const appProps = App.getPropsFromStores()
    const {children, params, main, agent, sideOpen, squad} = this.props
    const {fixed, mounted} = this.state
    const appClasses = cn('App', {
      '--fixed': fixed,
      '--mobile': agent === 'mobile',
      '--sideOpen': sideOpen
    })

    if (!mounted) return null

    let MenuComponent = null

    if (main) {
      const menuProps = {
        'params': params,
        'config': main,
        'squad': squad
      }
      const Component = agent === 'desktop' ? Menu : MenuMobile
      MenuComponent = React.createElement(Component, menuProps)
    }

    return (
      <div className={appClasses}>
        <Navigation agent={agent} sideOpen={sideOpen} />
        {MenuComponent}
        <div className="App-content">
          {agent === 'mobile' ? <div className="Blocker" onClick={AppActions.toggleSidebar.bind(this)} /> : null}
          {cloneElement(children, this.props)}
        </div>
      </div>
    )
  }
}

export default connectToStores(App)
