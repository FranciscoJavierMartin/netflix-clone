import React, { InputHTMLAttributes } from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

interface OptFormProps {
  children: React.ReactNode;
}

export default function OptForm({ children, ...restProps }: OptFormProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface OptFormSubComponentProps {
  children?: React.ReactNode;
}

interface OptFormInputProps
  extends OptFormSubComponentProps,
    InputHTMLAttributes<any> {}
interface OptFormButtonProps extends OptFormSubComponentProps {}
interface OptFormTextProps extends OptFormSubComponentProps {}
interface OptFormBreakProps extends OptFormSubComponentProps {}

OptForm.Input = function OptFormInput(props: OptFormInputProps) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({
  children,
  ...restProps
}: OptFormButtonProps) {
  return (
    <Button {...restProps}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  );
};

OptForm.Text = function OptFormText({
  children,
  ...restProps
}: OptFormTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({
  children,
  ...restProps
}: OptFormBreakProps) {
  return <Break {...restProps} />;
};
