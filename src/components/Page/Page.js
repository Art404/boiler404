import React from 'react'

class Page extends React.Component {
  static displayName = 'Page';

  static propTypes = {
    'main': React.PropTypes.object,
    'agent': React.PropTypes.string,
    'params': React.PropTypes.object,
    'db': React.PropTypes.object
  };

  render () {
    const {main, agent, params} = this.props

    return (
      <div className="Page">
        <button>Send Action</button>
      </div>
    )
  }
}

export default Page
