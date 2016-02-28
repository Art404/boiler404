import React from 'react'
import { connect } from 'react-redux'

import { addPost } from '../../actions/AppActions'

class AddPost extends React.Component {
	static displayName = 'AddPost';

	static propTypes = {
		'dispatch': React.PropTypes.func,
		'input': React.PropTypes.string
	}

	render () {
		let input
		const { dispatch } = this.props

		return (
			<div className="AddPost">
				<input ref={node => {
					input = node
				}} />
				<button onClick={() => {
					dispatch(addPost(input.value))
					input.value = ''
				}}>
					Add Post
				</button>
			</div>
		)
	}
}
export default connect()(AddPost)