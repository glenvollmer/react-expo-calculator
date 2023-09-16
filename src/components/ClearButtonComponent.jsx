import React, { TouchableOpacity, Text } from 'react-native';
import ClearButtonComponentStyles from '../styles/components/ClearButtonComponentStyle';

function ClearButtonComponent(props) {
  const { setInput } = props;

  const setInputCallback = () => {
    setInput('');
  };

  return (
    <TouchableOpacity style={ClearButtonComponentStyles.buttonTouchable} onPress={setInputCallback}>
      <Text style={ClearButtonComponentStyles.buttonText}>
        c
      </Text>
    </TouchableOpacity>
  );
}

export default ClearButtonComponent;
