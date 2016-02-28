import React from 'react'
import { connect } from 'react-redux'

class Footer extends React.Component {
	static displayName = 'Footer';

	render () {

		return (
			<div className="Footer">
				Footer
			</div>
		)
	}
}
export default connect()(Footer)