import React, { View } from 'react-native';
import ButtonComponent from './ButtonComponent';

import NumberButtonsComponentStyles from '../styles/components/NumberButtonsComponentStyles';

function NumberButtonsComponent(props) {
  const {
    setInput, input, a, b, clear,
  } = props;

  const setInputCallback = (newInput) => {
    if ((a === undefined && b === undefined) || (a !== undefined && b !== undefined)) {
      const newInputDisplay = input + newInput;
      setInput(newInputDisplay);
    } else if (a === undefined && b !== undefined) {
      setInput(newInput);
    }
  };

  const CreateNumberButtons = (args) => {
    const numberButtons = [];
    const { inputCallback } = args;

    for (let i = 0; i < 10; i += 1) {
      const buttonCharacter = i.toString();

      const buttonComponent = (
        <ButtonComponent
          key={i}
          buttonCharacter={buttonCharacter}
          setInput={inputCallback}
        />
      );

      numberButtons.push(buttonComponent);
    }

    return numberButtons;
  };

  return (
    <View style={NumberButtonsComponentStyles.container}>
      <CreateNumberButtons inputCallback={setInputCallback} />

      <ButtonComponent
        buttonCharacter="."
        setInput={setInputCallback}
      />

      <ButtonComponent
        buttonCharacter="c"
        setInput={clear}
      />
    </View>
  );
}

export default NumberButtonsComponent;
