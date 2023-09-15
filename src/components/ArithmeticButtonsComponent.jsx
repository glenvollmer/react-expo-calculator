import React, { View } from 'react-native';
import ButtonComponent from './ButtonComponent';

import ArithmeticButtonsComponentStyles from '../styles/components/ArithmeticButtonsComponentStyles';

function ArithmeticButtonsComponent(props) {
  const { setInput } = props;

  return (
    <View style={ArithmeticButtonsComponentStyles.container}>
      <ButtonComponent
        buttonCharacter="/"
        setInput={setInput}
      />

      <ButtonComponent
        buttonCharacter="*"
        setInput={setInput}
      />

      <ButtonComponent
        buttonCharacter="-"
        setInput={setInput}
      />

      <ButtonComponent
        buttonCharacter="+"
        setInput={setInput}
      />

      <ButtonComponent
        buttonCharacter="="
        setInput={setInput}
      />

    </View>
  );
}

export default ArithmeticButtonsComponent;
