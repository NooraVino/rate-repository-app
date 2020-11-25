import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignInForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" testID="usernameField" />
      <FormikTextInput name="password" placeholder="Password" testID="passwordField" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text buttonStyle="buttonFlex" testID="submitButton">SignIn</Text>
      </TouchableWithoutFeedback>
    </View>
  );

};
export default SignInForm;