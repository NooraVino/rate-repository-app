import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RepositoriesTab from './RepositoriesTab';
import SignInTab from './SignInTab';
import theme from '../theme';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from "../contexts/AuthStorageContext";



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.tab,
    height: 100,
    flexDirection: 'row',
    display: "flex",
  },
});


const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);

  console.log(data);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();

    await apolloClient.resetStore();
  };


  return (
    <View style={styles.container} >

      <ScrollView horizontal>
        <RepositoriesTab link="/" />
        {data?.authorizedUser ? (
          <SignInTab onPress={logout} link="/"> SignOut </SignInTab>
        ) : (
            <SignInTab link="/signIn">SignIn</SignInTab>
          )
        }

      </ScrollView>
    </View>

  );
};

export default AppBar;