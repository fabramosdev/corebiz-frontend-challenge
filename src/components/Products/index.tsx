/* eslint-disable no-nested-ternary */
import React, { useEffect, useCallback, useState } from 'react';
import NumberFormat from 'react-number-format';
import api from '../../services/api';

import starOn from '../../assets/rate-on.svg';
import starOff from '../../assets/rate-off.svg';
import { Container } from './styles';

interface IProductsProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: [{
    quantity: number;
    value: number;
  }];
}

const Products:React.FC = () => {
  const [listProducts, setListProducts] = useState<IProductsProps[]>([]);

  const getProducts = useCallback(async () => {
    try {
      await api.get('/products').then((products) => setListProducts(products.data));
    } catch (err) {
      await err.message;
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container>
      <h3>Mais Vendidos</h3>

      {listProducts.map((item) => (
        <>
          <div className="product-item">
            <img src={item.imageUrl} alt="Imagem" />
            <div className="info">
              <span>{item.productName}</span>
              {/* Ternário horroroso -- Refazer essa lógica */}
              <div className={`rate-${item.stars}`}>
                {item.stars === 1
                  ? (
                    <>
                      <span><img src={starOn} alt="Imagem classificação" /></span>
                      <span><img src={starOff} alt="Imagem classificação" /></span>
                      <span><img src={starOff} alt="Imagem classificação" /></span>
                      <span><img src={starOff} alt="Imagem classificação" /></span>
                      <span><img src={starOff} alt="Imagem classificação" /></span>
                    </>
                  )
                  : item.stars === 2
                    ? (
                      <>
                        <span><img src={starOn} alt="Imagem classificação" /></span>
                        <span><img src={starOn} alt="Imagem classificação" /></span>
                        <span><img src={starOff} alt="Imagem classificação" /></span>
                        <span><img src={starOff} alt="Imagem classificação" /></span>
                        <span><img src={starOff} alt="Imagem classificação" /></span>
                      </>
                    )
                    : item.stars === 3
                      ? (
                        <>
                          <span><img src={starOn} alt="Imagem classificação" /></span>
                          <span><img src={starOn} alt="Imagem classificação" /></span>
                          <span><img src={starOn} alt="Imagem classificação" /></span>
                          <span><img src={starOff} alt="Imagem classificação" /></span>
                          <span><img src={starOff} alt="Imagem classificação" /></span>
                        </>
                      )
                      : item.stars === 4
                        ? (
                          <>
                            <span><img src={starOn} alt="Imagem classificação" /></span>
                            <span><img src={starOn} alt="Imagem classificação" /></span>
                            <span><img src={starOn} alt="Imagem classificação" /></span>
                            <span><img src={starOn} alt="Imagem classificação" /></span>
                            <span><img src={starOff} alt="Imagem classificação" /></span>
                          </>
                        )
                        : item.stars === 5
                          ? (
                            <>
                              <span><img src={starOn} alt="Imagem classificação" /></span>
                              <span><img src={starOn} alt="Imagem classificação" /></span>
                              <span><img src={starOn} alt="Imagem classificação" /></span>
                              <span><img src={starOn} alt="Imagem classificação" /></span>
                              <span><img src={starOn} alt="Imagem classificação" /></span>
                            </>
                          )
                          : ''}
              </div>
              <span>{item.listPrice ? `de ${item.listPrice}` : ''}</span>
              <span>
                <NumberFormat value={item.price} displayType="text" prefix="R$" />
              </span>
              <span>
                {item.installments.length > 0 ? `ou em ${item.installments[0].quantity}x de ${item.installments[0].value}` : ''}
              </span>
              <button type="button">COMPRAR</button>
            </div>
          </div>
        </>
      ))}

    </Container>
  );
};

export default Products;
