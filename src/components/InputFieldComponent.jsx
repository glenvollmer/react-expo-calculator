import React, { Text, View } from 'react-native';
import InputFieldComponentStyles from '../styles/components/InputFieldComponentStyles';

function InputFieldComponent(props) {
  const { inputField } = props;
  const input = inputField.toString();

  return (
    <View style={InputFieldComponentStyles.container}>
      <Text style={InputFieldComponentStyles.inputField}>{input}</Text>
    </View>
  );
}

export default InputFieldComponent;
