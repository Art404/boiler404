import React from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-router'

class Navigation extends React.Component {
  static displayName = 'Navigation';

  render () {
    return (
      <nav className="Navigation">
        <div className="Navigation-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navigation
