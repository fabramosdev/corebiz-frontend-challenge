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

      {listProducts.map((item) => (
        <>
          <div className="product-item">
            <img src={item.imageUrl} alt="Imagem" />
            <div className="info">
              <span className="info-product-name">{item.productName}</span>

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
              <span className="info-product-listprice">{item.listPrice ? `de ${item.listPrice}` : <br />}</span>
              <span className="info-product-price">
                <NumberFormat value={item.price} displayType="text" prefix="R$" />
              </span>
              <span className="info-product-installments">
                {item.installments.length > 0 ? `ou em ${item.installments[0].quantity}x de ${item.installments[0].value}` : <br />}
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
