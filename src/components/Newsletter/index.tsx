import React from 'react';

import { Container } from './styles';

const Newsletter: React.FC = () => (
  <Container>
    <div className="content">
      <span>Participe de nossas news com promoções e novidades!</span>
    </div>
    <div className="content-inputs">
      <input type="text" placeholder="Digite seu nome" />
      <input type="text" placeholder="Digite seu email" />
      <button type="button">Eu quero!</button>
    </div>
  </Container>
);

export default Newsletter;
