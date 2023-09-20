import React, { View } from 'react-native';
import ButtonComponent from './ButtonComponent';
import { calculate } from '../modules/calculate';

import ArithmeticButtonsComponentStyles from '../styles/components/ArithmeticButtonsComponentStyles';

function ArithmeticButtonsComponent(props) {
  const {
    setOperation, operation, a, b, setInput, clear,
  } = props;

  return (
    <View style={ArithmeticButtonsComponentStyles.container}>
      <ButtonComponent
        buttonCharacter="/"
        setInput={setOperation}
      />

      <ButtonComponent
        buttonCharacter="*"
        setInput={setOperation}
      />

      <ButtonComponent
        buttonCharacter="-"
        setInput={setOperation}
      />

      <ButtonComponent
        buttonCharacter="+"
        setInput={setOperation}
      />

      <ButtonComponent
        buttonCharacter="="
        setInput={() => calculate(a, b, operation, setInput, clear)}
      />

    </View>
  );
}

export default ArithmeticButtonsComponent;
