import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/accordion';

interface ToggleContextState {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleContextState>(null as any);

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
interface AccordionItemProps extends AccordionSubComponentProps {}
interface AccordionHeaderProps extends AccordionSubComponentProps {}
interface AccordionBodyProps extends AccordionSubComponentProps {}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: AccordionTitleProps) {
  return <Title {...restProps}>{children}</Title>;
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
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((prevState: boolean) => !prevState)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
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
