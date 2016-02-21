import React from 'react'
import {isEmpty, uniq, cloneDeep} from 'lodash'
import Grid from '../Grid/Grid'

class About extends React.Component {
  static displayName = 'About';

  static propTypes = {
    'db': React.PropTypes.object,
    'squad': React.PropTypes.array
  };

  constructor (props) {
    super(props)
    this.state = {
      'activePress': null
    }
  }

  createSquad (squad) {
    return squad.map((s, i) => (
      <div className="About-member" key={i}>
        <div className="About-member-role">{s.role}</div>
        <div className="About-email">
          <span className="About-email-icn" />
          {`${s.name}@art404.com`}
        </div>
      </div>
    ))
  }

  getPressProjects (db, active) {
    let gridCards = []

    Object.keys(db).forEach((d, i) => {
      d = cloneDeep(db[d])
      if (d.additional && !isEmpty(d.additional.press)) {
        let card = {
          'layout': {
            'framed': true,
            'landscape': false,
            'showInfo': false,
            'tall': false
          },
          'project': d
        }

        if (active) {
          d.additional.press.forEach((p) => {
            const hasPub = p.publication === active
            if (p.publication === active) {
              gridCards.push(card)
            }
          })
        } else {
          gridCards.push(card)
        }
      }
    })

    return <Grid cards={gridCards} />
  }

  getPressLinks (db) {
    let press = []

    Object.keys(db).forEach((d, i) => {
      d = db[d]
      if (d.additional && !isEmpty(d.additional.press)) {
        d.additional.press.forEach((p) => {
          press.push(p.publication)
        })
      }
    })

    press = uniq(press)

    return press.map((p, i) => {
      const isLast = i === press.length - 1
      return (
        <span
          key={i}
          className="About-press-link"
          onClick={() => {
            this.setState({
              'activePress': this.state.activePress === p ? null : p
            })
          }}>
          {isLast ?
            <span className="About-grammar">
              {' and '}
            </span>: ''}
          {p}
          {isLast ?
            <span className="About-grammar">
              {'.'}
            </span>
            :
            <span className="About-grammar">
              {', '}
            </span>}
        </span>
      )
    })
  }

  render () {
    if (isEmpty(this.props.db)) return null
    const {db, squad} = this.props, {activePress} = this.state

    return (
      <div className="About">
        <div className="About-blurb">
          <p>
            {'Art404 is an artup company based in New York City making work across conceptual art, interactive web apps, installation, performance and branding.'}
          </p>
          <div className="About-contact">
            <div className="About-email">
              <div className="About-member-role">{'GENERAL'}</div>
              <span className="About-email-icn" />
              {'info@art404.com'}
            </div>
          </div>
          <div className="About-squad">
            {this.createSquad(squad)}
          </div>
          <div className="About-press">
            {'You can read about us in '}
            {this.getPressLinks(db)}
          </div>
        </div>
        {activePress ?
          <div className="About-filter">
            {'FILTERING BY: '}{activePress}
            <span onClick={() => {
              this.setState({
                'activePress': null
              })
            }}>
            <span className="About-filter-remove">
              {' - UNFILTER'}
            </span>
            </span>
          </div> : null}
        <div className="About-grid">
          {this.getPressProjects(db, activePress)}
        </div>
      </div>
    )
  }
}

export default About
