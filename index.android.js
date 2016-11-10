import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  NativeModules,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TimePickerAndroid,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Notification from 'react-native-system-notification';
import AlarmModule from 'alarm-module';

export default class morningCoffee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      interval: 10,
      activated: true,
      presetHour: 10,
      presetMinute: 30
    };
  };

  showPicker = async (stateKey, options) => {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = hour + ':' + (minute < 10 ? '0' + minute : minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute; }
      this.setState(newState);
      } catch ({code, message}) {
        console.warn(`Error opening timePicker: `, message);
      }
  };

  render() {
    return (
      <Image source={require('./img/coffee.jpg')} style={styles.backgroundContainer}>
        <View style={styles.container}>

          {this.androidTimepicker()}

        </View>
        <View style={styles.container}>

          {this.intervalSelector()}
          {this.brewButton()}

        </View>
      </Image>
    )};

    alarmStatusToggle() {
      return (
        <View style={styles.alarmStatus}>
          <Text style={styles.alarmText}>
            Alarm on/off
          </Text>
          <Switch
            value={this.state.activated}
            onValueChange={(value => this.setState({activated: value}))}/>
        </View>
    )};

    intervalSelector() {
      return (
        <View style={styles.slider}>
          <Text style={styles.sliderText}>
            Start brewing {this.state.interval} min before alarm
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={30}
            onValueChange={(value => this.setState({interval: value}))}
            step={1}
          />
        </View>
    )};

    brewButton() {
      return (
        <TouchableHighlight
          onPress={() => AlarmModule.startAlarm(this.state.presetHour, this.state.presetMinute, this.state.interval )}>
          <Text style={styles.alarmText}>
            Brew!
          </Text>
        </TouchableHighlight>
    )};

    androidTimepicker() {

      return (
        <View>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this,'preset',{
              hour: this.state.presetHour,
              minute: this.state.presetMinute,
            })}>
            <View>
              <Text style={styles.alarmTime}>
                {this.state.presetHour}:{this.state.presetMinute}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    )};

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  alarmTime: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
    margin: 25,
    color: '#f0f8ff'
  },
  alarmText: {
    fontSize: 30,
    color: '#f0f8ff',
  },
  brewStartSelector: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brewButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  slider: {
    flex: 5,
    flexDirection: 'column',
    minWidth: 200,
    justifyContent: 'center',
  },
  sliderText: {
    fontSize: 20,
    color: '#f0f8ff',
  }

});

AppRegistry.registerComponent('morningCoffee', () => morningCoffee);
