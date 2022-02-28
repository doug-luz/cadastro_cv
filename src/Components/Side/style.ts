import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0px;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 40px;

  h2 {
    font-size: 30px;
    color: var(--darkviolet);
    text-align: right;
  }
  h4 {
    font-size: 18px;
    color: var(--darkgray);
    text-align: right;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: var(--lightviolet);
  font-size: 40px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Dot = styled.div<{ isOn: any }>`
  width: 15px;
  height: 15px;
  border: 4px solid var(--lightviolet);
  background: ${(props) => (props.isOn ? "var(--neongreen)" : "var(--violet)")};
  margin: 0 -5px 0 30px;
`;
