import React from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-router'
import AppActions from '../../actions/AppActions'

class Navigation extends React.Component {
  static displayName = 'Navigation';

  static propTypes = {
    'agent': React.PropTypes.string,
    'sideOpen': React.PropTypes.bool
  };

  closeMenu () {
    if (this.props.sideOpen) AppActions.toggleSidebar()
  }

  render () {
    const {agent} = this.props

    return (
      <nav className="Navigation">
        {agent === 'mobile' ?
          <div
            className="Navigation-menu-btn"
            onClick={AppActions.toggleSidebar.bind(this)} /> : null}
        <div className="Navigation-logo">
          <Link to="/" onClick={this.closeMenu.bind(this)}>
            <Logo />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navigation
