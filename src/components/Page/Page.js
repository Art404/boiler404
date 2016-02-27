import React from 'react'
import  { connect } from 'react-redux'

class Page extends React.Component {
  static displayName = 'Page';

  static propTypes = {
    'main': React.PropTypes.object,
    'agent': React.PropTypes.string,
    'params': React.PropTypes.object,
    'db': React.PropTypes.object
  };

  render () {
    const {main, agent, params, dispatch} = this.props

    console.log('props', this.props)
    return (
      <div className="Page">
        <button onClick={() => {
          dispatch({
            type: 'sendAction'
          })
        }}>Send Action</button>
        <p>{this.props.sendAction}</p>
      </div>
    )
  }
}

export default connect((state)=> {
  console.log(state)
  return state
})(Page)
