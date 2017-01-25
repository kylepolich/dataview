import axios from "axios"
import Immutable from 'immutable';

const init = {
	loaded: 0,
	schema: {}
}

const defaultState = Immutable.fromJS(init);

export default function ActivityReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'DO_INIT':
		var url = "http://localhost:8080/public/json/schema.json"
	    var dispatch = action.payload.dispatch
		axios
			.get(url)
			.then(function(result) {
				var content = result['data']
				dispatch({type: "LOAD_SCHEMA", payload: content})
			})
			.catch((err) => {
				console.log(err)
			})
			break
		case 'LOAD_SCHEMA':
			var schema = action.payload
			nstate.schema = schema
			nstate.loaded = 1
			break
	}
	return Immutable.fromJS(nstate)
}
