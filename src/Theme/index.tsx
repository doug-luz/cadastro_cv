import * as C from "./style";
import { ReactNode } from "react";
import { Header } from "../Components/Header";

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <C.Container>
      <C.Display>
        <Header />
        <C.InsideContainer>
          <C.SideContainer>Side</C.SideContainer>
          <C.PageContainer>{children}</C.PageContainer>
        </C.InsideContainer>
      </C.Display>
    </C.Container>
  );
};
