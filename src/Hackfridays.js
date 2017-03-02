'use strict'
/**
 * ## imports
 *
 */
/**
 * ### React
 *
 * Necessary components from ReactNative
 */
import React from 'react'
import { AppRegistry } from 'react-native'

/**
 * ### Router-Flux
 *
 * Necessary components from Router-Flux
 */
import {
    Router,
    Scene} from 'react-native-router-flux'

/**
 * ### Redux
 *
 * ```Provider``` will tie the React-Native to the Redux store
 */
import {
    Provider} from 'react-redux'

/**
 * ### configureStore
 *
 *  ```configureStore``` will connect the ```reducers```, the
 *
 */
import configureStore from './store/configureStore'

/**
 * ### containers
 *
 * All the top level containers
 *
 */
import App from './containers/App'

/**
 * ## States
 * Initial states
 *
 */
import initialState from './reducers/initialState'

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure
 * @returns {Object} object with 1 key
 */
function getInitialState () {
  const _initState = {
    example: initialState
  }
  return _initState
}

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState```
 */
export default function native (platform) {
  let Hackfridays = React.createClass({
    render () {
      // configureStore will combine reducers from main application
      // it will then create the store based on aggregate state from all reducers
      const store = configureStore(getInitialState())

      // setup the router table with App selected as the initial component
      // note: See https://github.com/aksonov/react-native-router-flux/issues/948
      return (
        <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: 'white' }}>
            <Scene key='root' hideNavBar>
              <Scene key='App' component={App} type='replace' initial />
            </Scene>
          </Router>
        </Provider>
      )
    }
  })
    /**
     * registerComponent to the AppRegistery and off we go....
     */

  AppRegistry.registerComponent('hackfridays', () => Hackfridays)
}
