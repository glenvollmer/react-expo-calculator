import React, { View } from 'react-native';
import ButtonComponent from './ButtonComponent';

import NumberButtonsComponentStyles from '../styles/components/NumberButtonsComponentStyles';

function NumberButtonsComponent(props) {
  const { setInput } = props;

  const CreateNumberButtons = (args) => {
    const numberButtons = [];
    const { setInputCallback } = args;

    for (let i = 0; i < 10; i += 1) {
      const buttonCharacter = i.toString();

      const buttonComponent = (
        <ButtonComponent
          key={i}
          buttonCharacter={buttonCharacter}
          setInput={setInputCallback}
        />
      );

      numberButtons.push(buttonComponent);
    }

    return numberButtons;
  };

  return (
    <View style={NumberButtonsComponentStyles.container}>
      <CreateNumberButtons setInputCallback={setInput} />

      <ButtonComponent
        buttonCharacter="."
        setInput={setInput}
      />
    </View>
  );
}

export default NumberButtonsComponent;
