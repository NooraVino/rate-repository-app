import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";


const SignIn = ({ link, children, onPress }) => (
  <Link
    onPress={onPress}
    to={link}
    component={TouchableWithoutFeedback}
  >
    <Text color="tab">{children}</Text>
  </Link>
);

export default SignIn;