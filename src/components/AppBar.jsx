import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RepositoriesTab from './RepositoriesTab';
import SignInTab from './SignInTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.tab,
    height: 100,
    flexDirection: 'row',
    display: "flex",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container} >

      <ScrollView horizontal>
        <SignInTab link="/signIn" />
        <RepositoriesTab link="/" />

      </ScrollView>
    </View>

  );
};

export default AppBar;