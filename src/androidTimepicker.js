'use strict';

var ReactNative = require('react-native');
var React = require('react')

var {
  TimePickerAndroid,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} = ReactNative;

class androidTimepicker extends React.Component {

  state = {
    presetHour: 7,
    presetMinute: 0,
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
      this.setState(pickerState: newState);

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
          <Text style={styles.alarmTime}>
            0{this.state.presetHour}:{this.state.presetMinute}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  _formatTime(hour, minute) {
     return hour + ':' + (minute < 10 ? '0' + minute : minute);
  }
}

module.exports = androidTimepicker;
