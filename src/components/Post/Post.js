import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {
	static displayName = 'Post';

	static propTypes = {
		'text': React.PropTypes.string
	}

	render () {
		const { text } = this.props

		return (
			<li className="Post">
				{text}
			</li>
		)
	}
}
export default connect()(Post)