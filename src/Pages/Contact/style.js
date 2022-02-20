import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 28px;
  }
  hr {
    background-color: var(--darkgray);
    border: 0;
    height: 1.5px;
    margin: 45px;
  }
  label {
    font-size: 18px;
    input {
      box-sizing: border-box;
      margin: 10px 0 0 0;
      width: 100%;
      padding: 25px 10px;
      border: 1.5px solid var(--neongreen);
      border-radius: 8px;
      color: var(--gray);
      background-color: var(--violet);
    }
  }
  button {
    margin-top: 30px;
    padding: 20px 60px;
  }
`;
