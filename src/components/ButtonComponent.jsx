import React, { TouchableOpacity, Text } from 'react-native';
import ButtonComponentStyles from '../styles/components/ButtonComponentStyle';

function ButtonComponent(props) {
  const { buttonCharacter, setInput } = props;

  const setInputCallback = () => {
    setInput(buttonCharacter);
  };

  return (
    <TouchableOpacity style={ButtonComponentStyles.buttonTouchable} onPress={setInputCallback}>
      <Text style={ButtonComponentStyles.buttonText}>
        {buttonCharacter}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
