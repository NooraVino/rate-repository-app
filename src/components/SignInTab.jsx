import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";


const SignIn = ({ link }) => (
  <Link
    to={link}
    component={TouchableWithoutFeedback}
  >
    <Text color="tab">SignIn</Text>
  </Link>
);

export default SignIn;