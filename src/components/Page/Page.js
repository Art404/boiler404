import React from 'react'
import  { connect } from 'react-redux'

import AddPost from '../AddPost/AddPost'
import PostList from '../PostList/PostList'
import Footer from '../Footer/Footer'

class Page extends React.Component {
  static displayName = 'Page';

  static propTypes = {
    'main': React.PropTypes.object,
    'agent': React.PropTypes.string,
    'params': React.PropTypes.object,
    'db': React.PropTypes.object
  };

  render () {
    const { main, 
            agent, 
            params } = this.props

    // console.log('props', this.props)
    return (
      <div className="Page">
        <AddPost />
        <PostList />
        <Footer />
      </div>
    )
  }
}

export default connect()(Page)
