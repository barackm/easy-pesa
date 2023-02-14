import React from 'react';
import { Text, View } from 'react-native';
import * as Yup from 'yup';
import Form from '../../../components/form/Form';
import FormikTextInput from '../../../components/form/FormikTextInput';
import SubmitBtn from '../../../components/form/SubmitBtn';
import SocialLogin from '../SocialLogin';

import styles from '../SignIn/styles';

interface SignUpContainerProps {}
const SignUpContainer: React.FC<SignUpContainerProps> = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    fullName: Yup.string().required().min(4).label('Full Name'),
    password: Yup.string()
      .required()
      .min(6)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextHeading}>Sign Up to Your Account</Text>
        <Text style={styles.headerTextSubHeading}>
          Make sure your account is safe and secure
        </Text>
      </View>
      <Form
        initialValues={{ email: '', password: '', fullName: '' }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
        style={styles.form}>
        <View style={styles.formInputsContainer}>
          <FormikTextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FormikTextInput
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
          />
          <FormikTextInput
            name="password"
            label="Password"
            secureTextEntry
            placeholder="Enter your password"
          />
          <SocialLogin helperText="Sign up with your social media account" />
        </View>
        <View style={styles.formButtonsContainer}>
          <SubmitBtn>Create Account</SubmitBtn>
        </View>
      </Form>
    </View>
  );
};

export default SignUpContainer;
