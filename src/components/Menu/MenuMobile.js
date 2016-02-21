import React from 'react'
import {Link} from 'react-router'
import AppActions from '../../actions/AppActions'
import Squad from './Squad'

class MenuMobile extends React.Component {
  static displayName = 'MenuMobile';

  static propTypes = {
    params: React.PropTypes.object,
    squad: React.PropTypes.array,
    config: React.PropTypes.object
  };

  render() {
    const {config, squad} = this.props

    return (
      <section className="MenuMobile">
        <div className="MenuMobile-links">
          {Object.keys(config.pages).map((p, i) => {
            if (p === 'home') return null
            return (
              <Link
                to={`/${config.pages[p].url}`}
                className="MenuMobile-link"
                key={i}
                onClick={AppActions.toggleSidebar.bind(this)}>
                <span className={`MenuMobile-icn ${config.pages[p].url}`} />
                {p}
              </Link>
            )
          })}
        </div>
        <Squad mobile={true} squad={squad} />
      </section>
    )
  }
}

export default MenuMobile
