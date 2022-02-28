import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 30%;
  border: 2px solid green;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--neongreen);
  }

  h1 {
    font-size: 32px;
    margin-bottom: 8px;
    margin-left: 30px;
    text-decoration: none;
  }

  p {
    font-size: 18px;
  }
`;
