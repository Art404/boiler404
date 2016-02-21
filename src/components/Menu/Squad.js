import React from 'react'
import {Link} from 'react-router'
import AppActions from '../../actions/AppActions'

class Squad extends React.Component {
  static displayName = 'Squad';

  static propTypes = {
    'squad': React.PropTypes.array,
    'mobile': React.PropTypes.bool
  };

  closeMenu (mobile) {
    if (mobile) AppActions.toggleSidebar()
  }

  render () {
    if (!this.props.squad) return null
    const {squad, mobile} = this.props

    return (
      <div className="Squad">
        <Link className="Squad-about" to="/about" onClick={this.closeMenu.bind(this, mobile)}>
          {'ABOUT'}
        </Link>
        {this.props.squad.map((s, i) => (
          <a className="Squad-member" href={s.url} key={i}>
            {s.name}
          </a>
        ))}
      </div>
    )
  }
}

export default Squad
