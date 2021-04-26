import React, { AnchorHTMLAttributes } from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

interface FooterProps {
  children: React.ReactNode;
}

export default function Footer({ children, ...restProps }: FooterProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface FooterSubComponentProps {
  children?: React.ReactNode;
}

interface FooterRowProps extends FooterSubComponentProps {}
interface FooterColumnProps extends FooterSubComponentProps {}
interface FooterLinkProps
  extends FooterSubComponentProps,
    AnchorHTMLAttributes<any> {}
interface FooterTitleProps extends FooterSubComponentProps {}
interface FooterTextProps extends FooterSubComponentProps {}
interface FooterBreakProps extends FooterSubComponentProps {}

Footer.Row = function FooterRow({ children, ...restProps }: FooterRowProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({
  children,
  ...restProps
}: FooterColumnProps) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: FooterLinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({
  children,
  ...restProps
}: FooterTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: FooterTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({
  children,
  ...restProps
}: FooterBreakProps) {
  return <Break {...restProps}>{children}</Break>;
};
