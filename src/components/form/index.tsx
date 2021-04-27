import React, { ButtonHTMLAttributes, FormHTMLAttributes, InputHTMLAttributes } from 'react';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children, ...restProps }: FormProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface FormSubComponentProps {
  children?: React.ReactNode;
}

interface FormErrorProps extends FormSubComponentProps {}
interface FormBaseProps
  extends FormSubComponentProps,
    FormHTMLAttributes<any> {}
interface FormTitleProps extends FormSubComponentProps {}
interface FormTextProps extends FormSubComponentProps {}
interface FormTextSmallProps extends FormSubComponentProps {}
interface FormLinkProps extends FormSubComponentProps {
  to: string;
}
interface FormInputProps
  extends FormSubComponentProps,
    InputHTMLAttributes<any> {}
interface FormSubmitProps extends FormSubComponentProps, ButtonHTMLAttributes<any> {}

Form.Error = function FormError({ children, ...restProps }: FormErrorProps) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: FormBaseProps) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: FormTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: FormTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({
  children,
  ...restProps
}: FormTextSmallProps) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: FormLinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput(props: FormInputProps) {
  return <Input {...props} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }: FormSubmitProps) {
  return <Submit {...restProps}>{children}</Submit>;
};
