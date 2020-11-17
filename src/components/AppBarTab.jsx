import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';


const AppBarTab = () => {
  return <View>
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <Text color="tab" marginTab="margin">Repot</Text>
    </TouchableWithoutFeedback>
  </View>;
};

export default AppBarTab;