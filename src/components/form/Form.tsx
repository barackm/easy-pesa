import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';

interface FormProps {
  children: React.ReactNode;
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  style?: any;
}

const Form: React.FC<FormProps> = props => {
  const {
    children,
    initialValues,
    onSubmit,
    validationSchema,
    style = {},
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <View style={style}>{children}</View>}
    </Formik>
  );
};

export default Form;
