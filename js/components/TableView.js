import React from 'react'
import { connect } from 'react-redux'

import ColumnView from './ColumnView'

class TableView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var table = this.props.table
		var name = table['name']
		var count = table['count']
		var columns = table['columns']
		return (
			<div className="table">
				<h2>{name}</h2>
				{count}
				{columns.map(function(column) {
					return <ColumnView key={column.name} column={column} />
				})}
			</div>
		)
	}
}
export default connect(state => ({ ui: state.ui }))(TableView)
