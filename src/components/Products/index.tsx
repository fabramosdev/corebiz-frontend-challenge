import React, { useEffect, useCallback, useState } from 'react';
import api from '../../services/api';

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
      alert(err);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(listProducts);

  return (
    <Container>
      <h3>Mais Vendidos</h3>

      {listProducts.map((item) => (
        <>
          <div className="product-item">
            <img src={item.imageUrl} alt="Imagem" />
            <div className="info">
              <span>{item.productName}</span>
              <span>{item.stars}</span>
              <span>{item.listPrice ? `de ${item.listPrice}` : ''}</span>
              <span>{`por ${item.price}`}</span>
              <span>
                {item.installments.length > 0 ? `ou em ${item.installments[0].quantity} de ${item.installments[0].value}` : ''}
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
