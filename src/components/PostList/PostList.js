import React from 'react'
import { connect } from 'react-redux'

import Post from '../Post/Post'

class PostList extends React.Component {
	static displayName = 'PostList';

	static propTypes = {
		'postList': React.PropTypes.array
	}

	render () {

		let { postList } = this.props
		let postListEls

		if ( postList ) {
			postListEls = postList.map((post, i) => {
					return (<Post key={i} {...post}  />)
				}
			)
		}

		console.log('PostList: ', postList)

		return (
			<div className="PostList">
				{postListEls}
			</div>
		)
	}
}
export default connect((state) => {
	console.log(state.postList)
	return state
})(PostList)