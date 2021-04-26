import React, { ImgHTMLAttributes } from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

interface HeaderProps {
  bg?: boolean;
  children: React.ReactNode;
}

export default function Header({
  bg = true,
  children,
  ...restProps
}: HeaderProps): any {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

interface HeaderSubComponentProps {
  children?: React.ReactNode;
}

interface HeaderFrameProps extends HeaderSubComponentProps {}
interface HeaderLogoProps
  extends HeaderSubComponentProps,
    ImgHTMLAttributes<any> {
  to: string;
}
interface HeaderButtonProps extends HeaderSubComponentProps, LinkProps {
  to: string;
}

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: HeaderFrameProps) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: HeaderLogoProps) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({
  children,
  ...restProps
}: HeaderButtonProps) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
