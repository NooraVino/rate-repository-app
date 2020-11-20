import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderColor: theme.colors.inputBorder,
    backgroundColor: theme.backgroundColor.textInput,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 4,
    margin: 7,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;