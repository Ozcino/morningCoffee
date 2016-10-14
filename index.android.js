/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchHighlight
} from 'react-native';

export default class morningCoffee extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.alarmTime}>
            <Text>
              00:00
            </Text>
          </View>
          <View style={styles.alarmStatus}>
            <Text>
              Alarm on/off
            </Text>

            <Switch>

            </Switch>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.brewStartSelector}>
            <Text>
              brewing
            </Text>
            <TextInput>
            </TextInput>
            <Text>
              min before alarm 
            </Text>
          </View>
          <View style={styles.brewButton}>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alarmTime: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alarmStatus: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brewStartSelector: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  brewButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

AppRegistry.registerComponent('morningCoffee', () => morningCoffee);
