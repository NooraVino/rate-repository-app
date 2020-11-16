import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from'./Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounColor.tab,
    height: theme.height   
  },
  
});




const AppBarTab = () => {
  return <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
   
      <Text color="tab" marginTab="margin">Repot</Text>
   
      </TouchableWithoutFeedback>
    </View>;
};

export default AppBarTab;