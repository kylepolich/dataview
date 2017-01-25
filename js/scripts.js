import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import * as reducers        from './reducers';
import Immutable            from 'immutable';
import promiseMiddleware    from './lib/promiseMiddleware';
import immutifyState        from './lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

import routes               from './util/routes';

var rs = localStorage.getItem('reduxState')

var initialState = immutifyState(window.__INITIAL_STATE__);

if (rs != undefined) {
	rs = JSON.parse(rs)
	initialState = immutifyState(rs)
}

const history = createBrowserHistory();

const reducer = combineReducers(reducers);

const logger = (store) => (next) => (action) => {
  console.log("Action fired: ", action)
  next(action)
}

const store = applyMiddleware(logger,promiseMiddleware)(createStore)(reducer, initialState);

store.subscribe(()=>{
  var state = store.getState()
  var nstate = {}
  var keys = Object.keys(state)
  for (var i=0; i < keys.length; i++) {
    var key = keys[i]
    var val = state[key]
    nstate[key] = val.toJS()
  }
  var s = JSON.stringify(state)
  localStorage.setItem('reduxState', s)
})

const app = document.getElementById('app')

try {
	render(<Provider store={store}>
				<Router children={routes} history={history} />
			</Provider>, app)
}
catch (err) {
	console.log(err)
}


var dispatch = store.dispatch
dispatch({type: "DO_INIT", payload: { env: process.env.NODE_ENV, dispatch } })
