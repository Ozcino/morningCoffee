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
  TouchHighlight,
  Slider,
} from 'react-native';

export default class morningCoffee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      interval: '10'};

  };

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
          {this.intervalSelector()}
          <View style={styles.brewButton}>

          </View>
        </View>
      </View>
    )};
    intervalSelector() {
      return (
        <View style={styles.slider}>
          <Text>
            {this.state.interval} min
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={30}
            onValueChange={(value => this.setState({interval: value}))}
            step={1}
          />
        </View>
    )};

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
    justifyContent: 'center',
    alignItems: 'center'
  },
  brewButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    flexDirection: 'column',
    minWidth: 200,
  justifyContent: 'center'
  }

});

AppRegistry.registerComponent('morningCoffee', () => morningCoffee);
