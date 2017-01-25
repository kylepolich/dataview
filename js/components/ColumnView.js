import React from 'react'
import { connect } from 'react-redux'

import ColumnStats from './ColumnStats'

class ColumnView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var column = this.props.column
		return (
			<div className="column">
				<div className="row">
					<div className="col-xs-12 col-sm-3">{column.name}</div>
					<div className="col-xs-12 col-sm-1">{column.nullable}</div>
					<div className="col-xs-12 col-sm-1">{column.typ}</div>
					<div className="col-xs-12 col-sm-1">{column.ord}</div>
					<div className="col-xs-12 col-sm-6"><ColumnStats typ={column.typ} stats={column.stats} /></div>
				</div>
			</div>
		)
	}
}
export default connect(state => ({ ui: state.ui }))(ColumnView)
