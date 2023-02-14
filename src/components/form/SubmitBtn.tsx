import { useFormikContext } from 'formik';
import React from 'react';
import Button from '../common/Button';

interface SubmitBtnProps {
  [key: string]: any;
  children?: React.ReactNode;
}

const SubmitBtn: React.FC<SubmitBtnProps> = props => {
  const { children, ...rest } = props;
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={handleSubmit} {...rest}>
      {children}
    </Button>
  );
};

export default SubmitBtn;
