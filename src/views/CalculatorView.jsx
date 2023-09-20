import React, { View } from 'react-native';
import { useEffect, useState } from 'react';

import NumberButtonsComponent from '../components/NumberButtonsComponent';
import ArithmeticButtonsComponent from '../components/ArithmeticButtonsComponent';
import InputFieldComponent from '../components/InputFieldComponent';

import CalculatorViewStyles from '../styles/views/CalculatorViewStyles';

function CalculatorView() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [operation, setOperation] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setA(input);
  }, [input]);

  useEffect(() => {
    setB(a);
    setA();
  }, [operation]);

  const clear = () => {
    setA();
    setB();
    setInput('');
    setOperation('');
  };

  return (
    <View style={CalculatorViewStyles.container}>
      <View style={CalculatorViewStyles.inputContainer}>
        <InputFieldComponent inputField={input} />
      </View>

      <View style={CalculatorViewStyles.buttonsContainer}>
        <View style={CalculatorViewStyles.inputButtonsContainer}>
          <NumberButtonsComponent setInput={setInput} input={input} a={a} b={b} clear={clear} />
        </View>

        <View style={CalculatorViewStyles.arithmeticButtonsContainer}>
          <ArithmeticButtonsComponent
            setOperation={setOperation}
            operation={operation}
            a={a}
            b={b}
            setInput={setInput}
            clear={clear}
          />
        </View>
      </View>
    </View>
  );
}

export default CalculatorView;
