/**
 * # configureStore.js
 *
 * A Redux boilerplate setup
 *
 */
'use strict'

/**
 * ## Imports
 *
 * Redux functions
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

/**
* ## Reducer
* The reducer contains all the reducers
*/
import reducer from '../reducers'

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore)

/**
 * ## configureStore
 * @param {Object} the state with its keys
 *
 */
export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
