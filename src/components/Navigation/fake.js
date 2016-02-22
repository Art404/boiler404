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
    return (
      <Topbar el="nav" className="Nav">
        <Left el="button" className="Nav-menu" onClick={this.openNav} />
        <Wrapper className="Logo-wrap">
          <Link el="a" href="/">
            <Logo el="img" className="Logo" src={this.imgSrc} />
          </Link>
        </Wrapper>
        <Right className="Nav-github">
          <Note el="p">{'View on GitHub'}</Note>
          <Icon className='Github-icn' />
        </Right>
      </Topbar>
    )
  }
}

export default Navigation

