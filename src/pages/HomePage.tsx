import React from 'react';
import FaqsContainer from '../containers/FAQS';
import FooterContainer from '../containers/Footer';
import JumbotronContainer from '../containers/Jumbotron';

export default function HomePage() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
