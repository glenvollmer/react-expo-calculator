import React, { View } from 'react-native';
import { useState } from 'react';

import NumberButtonsComponent from '../components/NumberButtonsComponent';
import ArithmeticButtonsComponent from '../components/ArithmeticButtonsComponent';
import InputFieldComponent from '../components/InputFieldComponent';

import CalculatorViewStyles from '../styles/views/CalculatorViewStyles';

function CalculatorView() {
  const [input, setInput] = useState('');

  const setInputCallback = (newInput) => {
    const newInputDisplay = input + newInput;
    setInput(newInputDisplay);
  };

  return (
    <View style={CalculatorViewStyles.container}>
      <View style={CalculatorViewStyles.inputContainer}>
        <InputFieldComponent inputField={input} />
      </View>

      <View style={CalculatorViewStyles.buttonsContainer}>
        <View style={CalculatorViewStyles.inputButtonsContainer}>
          <NumberButtonsComponent setInput={setInputCallback} />
        </View>

        <View style={CalculatorViewStyles.arithmeticButtonsContainer}>
          <ArithmeticButtonsComponent />
        </View>
      </View>
    </View>
  );
}

export default CalculatorView;