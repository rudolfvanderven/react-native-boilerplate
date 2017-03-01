/**
 * # App.js
 *  Displays startup screen
 *
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { connect } from 'react-redux'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
    StyleSheet,
    View,
    Text
}
from 'react-native'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    helloString: state.example.hello,
    goodbyeString: state.example.goodbye
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

/**
 * ## App class
 */
let reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

let App = React.createClass({

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.helloString}</Text>
      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps)(App)
