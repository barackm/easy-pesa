import React from 'react';
import * as Yup from 'yup';
import { Text, TouchableOpacity, View } from 'react-native';
import Form from '../../../components/form/Form';
import styles from './styles';
import FormikTextInput from '../../../components/form/FormikTextInput';
import SubmitBtn from '../../../components/form/SubmitBtn';
import SocialLogin from '../SocialLogin';

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextHeading}>Login to Your Account</Text>
        <Text style={styles.headerTextSubHeading}>
          Make sure that you already have an Account
        </Text>
      </View>
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
        style={styles.form}>
        <View>
          <FormikTextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FormikTextInput
            name="password"
            label="Password"
            secureTextEntry
            placeholder="Enter your password"
          />
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <SocialLogin />
        </View>
        <View style={styles.formButtonsContainer}>
          <SubmitBtn>Sign In</SubmitBtn>
        </View>
      </Form>
    </View>
  );
};

export default SignInContainer;
