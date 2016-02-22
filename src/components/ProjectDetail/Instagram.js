/*eslint-disable no-undef*/
import React from 'react'
import {findDOMNode} from 'react-dom'

class Instagram extends React.Component {
  static propTypes = {
    'embed': React.PropTypes.string
  };

  componentDidMount () {
    this.waitForInsta()
  }

  waitForInsta () {
    let timer

    const checker = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        clearInterval(timer)
        this.createInstagram()
      }
    }

    timer = setInterval(checker, 500)
  }

  createInstagram () {
    window.instgrm.Embeds.process()
  }

  render () {
    return (
      <div
        className="ProjectDetail-instagram"
        dangerouslySetInnerHTML={{'__html': this.props.embed}}/>
    )
  }
}

export default Instagram

