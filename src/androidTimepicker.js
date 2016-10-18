'use strict';

var ReactNative = require('react-native');
var React = require('react');

var {
  TimePickerAndroid,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} = ReactNative;

class AndroidTimepicker extends React.Component {

  state = {
    presetHour: 10,
    presetMinute: 15,
  };

  showPicker = async (stateKey, options) => {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = hour + ':' + (minute < 10 ? '0' + minute : minute);
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
    );
  };

}

const styles = StyleSheet.create({

  alarmTime: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
    margin: 25,
    color: '#f0f8ff'
  },

});

module.exports = AndroidTimepicker;
