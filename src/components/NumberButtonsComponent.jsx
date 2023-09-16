import React, { View } from 'react-native';
import ButtonComponent from './ButtonComponent';
import ClearButtonComponent from './ClearButtonComponent';

import NumberButtonsComponentStyles from '../styles/components/NumberButtonsComponentStyles';

function NumberButtonsComponent(props) {
  const { setInput, input } = props;

  const setInputCallback = (newInput) => {
    const newInputDisplay = input + newInput;
    setInput(newInputDisplay);
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

      <ClearButtonComponent setInput={setInput} />
    </View>
  );
}

export default NumberButtonsComponent;
