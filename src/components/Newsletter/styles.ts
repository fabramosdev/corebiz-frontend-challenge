import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #F2F2F2;
  width: 100vw;
  height: 148px;

  margin: 0 auto;

  .content {
    margin: 0 auto;
    padding: 8px;

    span {
      font-size: 22px;
      font-weight: 700;
      color: #333
    }
  }
  .content-inputs {
    margin: 0 auto;
    input {
      border: 0;
      width: 280px;
      height: 48px;
      border-radius: 4px;
      padding-left: 16px;
      margin: 0 8px;

      font-size: 12px;
      color: #585858;
      font-weight: 700;
    }

    button {
      border: 0;
      background: #000;
      width: 140px;
      height: 48px;
      border-radius: 4px;
      color: white;
    }
  }
`;
