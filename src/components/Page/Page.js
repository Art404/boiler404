import React from 'react'
import {connect} from 'react-redux'

class Page extends React.Component {
  static displayName = 'Page';

  static propTypes = {
    'dispatch': React.PropTypes.string,
    'sendAction': React.PropTypes.func
  };

  render () {
    const {dispatch} = this.props

    return (
      <div className="Page">
        <button style={{'marginRight': 20}} onClick={() => {
          dispatch({
            type: 'sendAction'
          })}}>
          {'Send Action'}
        </button>
        <p>{this.props.sendAction}</p>
      </div>
    )
  }
}

export default connect((state)=> {
  return state
})(Page)
