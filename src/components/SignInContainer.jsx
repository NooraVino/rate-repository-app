import React from 'react';
import { Formik } from "formik";
import SignInForm from './SignInForm';
import { StyleSheet, View } from 'react-native';



const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInContainer = ({ onSubmit, validationSchema }) => (
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
export default SignInContainer;