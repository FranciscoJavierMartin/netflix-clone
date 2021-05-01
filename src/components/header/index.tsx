import React, { ImgHTMLAttributes } from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import {
  Background,
  Container,
  Group,
  Logo,
  ButtonLink,
  Picture,
  Dropdown,
  Profile,
  Feature,
  Text,
  Link,
  FeatureCallOut,
} from './styles/header';

interface HeaderProps {
  bg?: boolean;
  src?: string;
  dontShowOnSmallViewPort?: boolean;
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

interface HeaderFeatureProps extends HeaderSubComponentProps {}
interface HeaderFrameProps extends HeaderSubComponentProps {}
interface HeaderGroupProps extends HeaderSubComponentProps {}
interface HeaderProfileProps extends HeaderSubComponentProps {}
interface HeaderDropdownProps extends HeaderSubComponentProps {}
interface HeaderPictureProps extends HeaderSubComponentProps {
  src: string;
}
interface HeaderLogoProps
  extends HeaderSubComponentProps,
    ImgHTMLAttributes<any> {
  to: string;
}
interface HeaderButtonProps extends HeaderSubComponentProps, LinkProps {
  to: string;
}
interface HeaderFeatureCallOutProps extends HeaderSubComponentProps {}
interface HeaderTextProps extends HeaderSubComponentProps {}
interface HeaderTextLinkProps extends HeaderSubComponentProps {}

Header.Feature = function HeaderFeature({
  children,
  ...restProps
}: HeaderFeatureProps) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: HeaderFrameProps) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({
  children,
  ...restProps
}: HeaderGroupProps) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Profile = function HeaderProfile({
  children,
  ...restProps
}: HeaderProfileProps) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({
  src,
  ...restProps
}: HeaderPictureProps) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({
  children,
  ...restProps
}: HeaderDropdownProps) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
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

Header.Text = function HeaderText({ children, ...restProps }: HeaderTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({
  children,
  ...restProps
}: HeaderTextLinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}: HeaderFeatureCallOutProps) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
