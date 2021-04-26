import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext<any>(null);

interface AccordionProps {
  children: React.ReactNode;
}

export default function Accordion({ children, ...restProps }: AccordionProps) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

interface AccordionSubComponentProps {
  children?: React.ReactNode;
}

interface AccordionTitleProps extends AccordionSubComponentProps {}
interface AccordionFrameProps extends AccordionSubComponentProps {}
interface AccordionItemProps extends AccordionSubComponentProps {}
interface AccordionHeaderProps extends AccordionSubComponentProps {}
interface AccordionBodyProps extends AccordionSubComponentProps {}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: AccordionTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({
  children,
  ...restProps
}: AccordionFrameProps) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}: AccordionItemProps) {
  const [toggleShow, setToggleShow] = useState<boolean>(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({
  children,
  ...restProps
}: AccordionHeaderProps) {
  const { setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((prevState: any) => !prevState)}
      {...restProps}
    >
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: AccordionBodyProps) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
