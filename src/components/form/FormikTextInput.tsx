import { useFormikContext } from 'formik';
import React from 'react';
import TextInput from '../common/TextInput';

interface FormikTextInputProps {
  name: string;
  [x: string]: any;
}
const FormikTextInput: React.FC<FormikTextInputProps> = props => {
  const { errors, values, setFieldValue, setFieldTouched, touched } =
    useFormikContext<any>();

  const { name, ...rest } = props;

  const touch = touched[name];
  const error = touch ? errors[name] : '';
  const value = values[name as keyof typeof values];

  return (
    <TextInput
      onChangeText={(v: string) => {
        setFieldValue(name, v);
      }}
      onBlur={() => {
        setFieldTouched(name);
      }}
      value={value}
      // @ts-ignore
      error={error}
      {...rest}
      name={name}
    />
  );
};

export default FormikTextInput;
