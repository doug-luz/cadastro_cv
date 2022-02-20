import styled from "styled-components";

export const Container = styled.div`
  display: block;
  border: 2px solid var(--violet);
  border-radius: 8px;
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
    text-decoration: underline;
  }

  p {
    font-size: 18px;
  }
`;
