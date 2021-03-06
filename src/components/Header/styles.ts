import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 16px auto;

  .container {
    display: flex;
    justify-content: space-between;

    width: 100%
  }

  .search {
    display: flex;

    input {
    width: 700px;
    border: none;
    border-bottom: 2px solid gray;
  }

    button {
      border: 0;
      background: none;
    }
  }

  .account-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    .account {
      padding-right: 21px;
      img {
        margin: 0 5px
      }
    }

    .cart {
      display: flex;
      width: 55px;

      img {
        margin: 0 10px;

      }

      .cart-amount {
        position: relative;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        span {
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      }
      }

    }
  }
`;
