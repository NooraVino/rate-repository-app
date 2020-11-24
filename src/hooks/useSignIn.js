import { SIGN_IN } from '../graphql/mutations'; 
import {useMutation, useApolloClient  } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();


  const signIn = async ({ username, password }) => {
    const {data} =  await mutate({variables: { credentials: { username, password } },});
    await authStorage.setAccessToken(data.authorize.accesToken);
   
    await apolloClient.resetStore();
    console.log(data);
    console.log("mitä");
    
    return data;
  };

  return [signIn, result];
};

export default useSignIn;