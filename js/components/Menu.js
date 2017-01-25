import React from 'react'
import { connect } from 'react-redux'

import NavLink from './NavLink'

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="menu col-sm-12">
				<NavLink active={pathname} to="/">Home</NavLink>
			</div>
		)
	}
}

export default connect(state => ({ ui: state.ui }))(Menu)
