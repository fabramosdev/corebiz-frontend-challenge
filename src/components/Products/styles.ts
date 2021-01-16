import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;

  .product-item {
    display: flex;
    flex-direction: column;

    .info{
      display: flex;
      flex-direction: column;
      text-align: center;

      button {
        display: none;
      }
  }
    }


  .product-item:hover {
    .info {
      background: yellow;

      button {
      display: block;
    }
    }


  }
`;
