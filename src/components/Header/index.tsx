import React from 'react';
import imgLogo from '../../assets/logo.svg';
import imgSearch from '../../assets/ic_search.svg';
import imgUser from '../../assets/user.svg';
import imgCart from '../../assets/cart.svg';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="container">
      <img src={imgLogo} alt="Corebiz logo" />

      <div className="search">
        <input type="text" placeholder="O que está procurando?" />
        <button type="button">
          <img src={imgSearch} alt="Buscar" />
        </button>
      </div>

      <div className="account-cart">
        <div className="account">
          <img src={imgUser} alt="Usuário" />
          <span>Minha Conta</span>
        </div>
        <div className="cart">
          <img src={imgCart} alt="Carrinho de compras" />
          <div className="cart-amount">
            <span>1</span>
          </div>
        </div>
      </div>

    </div>
  </Container>
);

export default Header;
