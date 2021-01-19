import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .product-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    height: 353px;
    color: #7A7A7A;

    .info{
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 100%;

      button {
        display: none;
      }

      .info-product-name {
        font-size: 12px;
        margin-top: 10px;
      }

      .info-product-listprice {
        font-size: 12px;
      }

      .info-product-price {
        font-size: 18px;
        font-weight: 700;
        color: #000;
      }

      .info-product-installments {
        font-size: 11px;
      }
  }
    }


  .product-item:hover {
    .info {
      background: #E6E8EA;
        button {
        margin: 0 auto;
        display: block;
        background: black;
        width: 125px;
        height: 32px;
        color: white;
        border: 0;
        border-radius: 5px;
        margin-top : 8px;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
`;
