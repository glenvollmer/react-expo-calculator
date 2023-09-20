import { StyleSheet } from 'react-native';

const CalculatorViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flex: 0.3,
    width: '100%',
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: '28%',
    marginBottom: '10%',
  },

  inputButtonsContainer: {
    flex: 1,
  },

  arithmeticButtonsContainer: {
    flex: 0.3,
  },

});

export default CalculatorViewStyles;
