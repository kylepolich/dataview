import React from 'react'
import { connect } from 'react-redux'

class ColumnStats extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var typ = this.props.typ
		var stats = this.props.stats
		var s = ""
		var keys = Object.keys(stats)
		for (var i=0; i < keys.length; i++) {
			var key = keys[i]
			var val = stats[key]
			s += key + "=" + val + "\n"
		}
		return (
			<div className="column-stats">
			{s}
			</div>
		)
	}
}
export default connect(state => ({ ui: state.ui }))(ColumnStats)
