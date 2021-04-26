import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

interface FeatureProps {
  children: React.ReactNode;
}

export default function Feature({ children, ...restProps }: FeatureProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface FeatureSubComponentProps {
  children: React.ReactNode;
}

interface FeatureTitleProps extends FeatureSubComponentProps {}
interface FeatureSubTitleProps extends FeatureSubComponentProps {}

Feature.Title = function FeatureTitle({
  children,
  ...restProps
}: FeatureTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({
  children,
  ...restProps
}: FeatureSubTitleProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
