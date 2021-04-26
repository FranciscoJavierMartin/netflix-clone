import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';
import { FAQData } from '../interfaces/faqData';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item: FAQData) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
