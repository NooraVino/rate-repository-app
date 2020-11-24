import React from 'react';
import * as yup from 'yup';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import  useSignIn  from '../hooks/useSignIn';
import { useHistory }from 'react-router-native';

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
});

const validationSchema = yup.object().shape({
username: yup
.string()
.required("Username is required"),
password: yup
.string()
.required("Password is required"),
});

const initialValues = {
  username: '',
  password: '',
};


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();


  const onSubmit = async(values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      //console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <View style={styles.formContainer}>
      <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;