import React from 'react';
import * as yup from 'yup';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

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
  const onSubmit = values => {
    console.log(values);

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