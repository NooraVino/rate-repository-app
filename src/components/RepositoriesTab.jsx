import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";


const AppBarTab = ({ link }) => (
  <Link
    to={link}
    component={TouchableWithoutFeedback}
  >
    <Text color="tab">Repositories</Text>
  </Link>
);

export default AppBarTab;