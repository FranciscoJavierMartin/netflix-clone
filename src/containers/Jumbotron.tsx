import React from 'react';
import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';
import { JumboData } from '../interfaces/jumboData';

const JumbotronContainer: React.FC = () => {
  return (
    <Jumbotron.Container>
      {(jumboData as JumboData[]).map((item: JumboData) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;
