import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TimePickerAndroid,
  View,
  Switch,
  TouchHighlight,
  TouchableWithoutFeedback,
  Slider,
} from 'react-native';

export default class morningCoffee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      interval: '10',
      activated: true,
      presetHour: 7,
      presetMinute: 0};

  };

  showPicker = async (stateKey, options) => {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = _formatTime(hour, minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute; }


      else if (action === TimePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      }
      this.setState(newState);

      } catch ({code, message}) {
        console.warn(`Error : `, message);
        }
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.container}>

            <TouchableWithoutFeedback
              onPress={this.showPicker.bind(this,'preset',{ hour: this.state.presetHour, minute: this.state.presetMinute, })}>
              <Text style={styles.alarmTime}>
                0{this.state.presetHour}:{this.state.presetMinute}0
              </Text>
            </TouchableWithoutFeedback>

            <View style={styles.alarmStatus}>
              <Text style={styles.alarmText}>
                Alarm on/off
              </Text>
              <Switch
                value={this.state.activated}
                onValueChange={(value => this.setState({activated: value}))}/>
            </View>

        </View>

        <View style={styles.container}>

          {this.intervalSelector()}

          <View style={styles.brewButton}>
            <Text style={styles.alarmText}>
              BrewNow!
            </Text>
          </View>

        </View>

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
    alignItems: 'center',
    fontSize: 100,
    margin: 25
  },
  alarmStatus: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alarmText: {
    fontSize: 30,
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
    flex: 5,
    flexDirection: 'column',
    minWidth: 200,
    justifyContent: 'center',
  },
  sliderText: {
    fontSize: 20,
  }

});

AppRegistry.registerComponent('morningCoffee', () => morningCoffee);
