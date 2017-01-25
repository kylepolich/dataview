import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'
import TableView from './TableView'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var ui = this.props.ui.toJS()
		var schema = ui.schema
		if (schema == undefined) {
			return <Loading />
		}
		var tables = Object.keys(schema)
		return (
			<div className="main">
				{tables.map(function(tblname) {
					var tbl = schema[tblname]
					return <TableView key={tbl.name} table={tbl} />
				})}
			</div>
		)
	}
}
export default connect(state => ({ ui: state.ui }))(Home)
