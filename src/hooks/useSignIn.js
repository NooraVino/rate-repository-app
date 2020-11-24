import { SIGN_IN } from '../graphql/mutations'; 
import {useMutation } from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    return await mutate({variables: { credentials: { username, password } },});
  };

  return [signIn, result];
};

export default useSignIn;