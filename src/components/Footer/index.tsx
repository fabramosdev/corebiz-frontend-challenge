import React from 'react';

import btn1 from '../../assets/btn_contact-1.png';
import btn2 from '../../assets/btn_contact-2.png';
import logoCorebiz from '../../assets/corebiz.png';
import logoVtex from '../../assets/logo-vtex.png';
import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <div className="main-container">
      <div className="address">
        <h3>Localização</h3>
        <p>Avenida Andromeda, 200. Bloco 6 e 8</p>
        <p>Alphaville SP</p>
        <a href="mailto:teste@mail.com">teste@teste.com</a>
        <a href="tel:+552199999999">21 99999-9999</a>
      </div>
      <div className="contact">

        <img src={btn2} alt="Fale conosco" />

        <img src={btn1} alt="Fale Conosco" />

      </div>
      <div className="brand">
        <div className="corebiz">
          <p>Created by</p>
          <img src={logoCorebiz} alt="Core Biz" />
        </div>
        <div className="vtex">
          <p>Powered by</p>
          <img src={logoVtex} alt="VTEX" />
        </div>
      </div>
    </div>

  </Container>
);

export default Footer;
