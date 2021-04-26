import React, { ImgHTMLAttributes } from 'react';
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

interface JumbotronProps {
  children: any;
  direction: 'row' | 'row-reverse';
}

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}: JumbotronProps) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

interface JumbotronSubComponentProps {
  children: any;
}

interface JumbotronContainerProps extends JumbotronSubComponentProps {}

interface JumbotronPaneProps extends JumbotronSubComponentProps {}

interface JumbotronTitleProps extends JumbotronSubComponentProps {}

interface JumbotronSubTitleProps extends JumbotronSubComponentProps {}

interface JumbotronImageProps extends ImgHTMLAttributes<any> {}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: JumbotronContainerProps) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: JumbotronPaneProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: JumbotronTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: JumbotronSubTitleProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage(props: JumbotronImageProps) {
  return <Image {...props} />;
};
