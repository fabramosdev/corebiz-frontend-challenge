import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  height: 225px;
  width: 100%;
  color: white;

  .main-container {
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    margin: 0 auto;
  }

  .address {
    padding-top: 25px;
    width: 33.33%;
    display: flex;
    flex-direction: column;
  }

  .address h3 {
    font-size: 20px;
    font-weight: 700;
  }

  .address h3::after {
    display: block;
    height: 5px;
    width: 45px;
    background-color: white;
    content: '';
    margin: 10px 0;
    border-radius: 5px;
}

.address a {
  text-decoration: none;
  color: white;
}

  .contact {
    display: flex;
    flex-direction: column;
    padding: 40px;

    img {
      padding: 10px;
    }
  }
  .brand {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;

    .corebiz {
      padding-right: 15px;
    }
  }
`;
