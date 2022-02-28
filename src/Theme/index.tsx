import * as C from "./style";
import { ReactNode } from "react";
import { Header } from "../Components/Header";
import { Side } from "../Components/Side/index";
import { useSignup } from "../Contexts/SignupContext";

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  const { state } = useSignup();
  return (
    <C.Container>
      <C.Display>
        <Header />
        <C.InsideContainer>
          <C.SideContainer>
            <Side
              title="Nome"
              description="Identifique-se"
              path="/"
              icon="name"
              isOn={state.page === 1}
            />
            <Side
              path="/languages"
              title="Linguagens"
              description="Quais linguagens domina"
              icon="languages"
              isOn={state.page === 2}
            />
            <Side
              title="Experiência"
              description="Qual é a sua experiência"
              path="/experience"
              icon="experience"
              isOn={state.page === 3}
            />
            <Side
              title="Contato"
              description="Deixe seu contato"
              path="/contact"
              icon="contact"
              isOn={state.page === 4}
            />
          </C.SideContainer>
          <C.PageContainer>{children}</C.PageContainer>
        </C.InsideContainer>
      </C.Display>
    </C.Container>
  );
};
