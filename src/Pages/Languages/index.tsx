import { useHistory } from "react-router-dom";
import { Theme } from "../../Theme/index";
import * as C from "./style";
import { SignpuActions, useSignup } from "../../Contexts/SignupContext";
import { useEffect } from "react";
import { Language } from "../../Components/Language";

export const Languages = () => {
  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: SignpuActions.setPage,
        payload: 2,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  const { state, dispatch } = useSignup();

  const setLanguages = (languages: string) => {
    dispatch({
      type: SignpuActions.setLanguages,
      payload: languages,
    });
  };

  const handleNext = () => {
    if (state.name !== "") {
      history.push("/experience");
    }
  };
  const handleBefore = () => {
    if (state.name !== "") {
      history.push("/");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>3/4 </p>
        <h2>
          {state.name}, agora escolha as linguagens em que você possui
          conhecimento
        </h2>
        <p>Selecione todas as opções em que está apto a trabalhar </p>
        <hr />

        <C.Display>
          <Language
            title="Javascript"
            icon="javascript"
            // isSelected={state.experience === 0}
            onClick={() => setLanguages("Javascript")}
          />
          <Language
            title="CSS"
            icon="css"
            // isSelected={state.experience === 1}
            onClick={() => setLanguages("CSS")}
          />
          <Language
            title="HTML"
            icon="html"
            // isSelected={state.experience === 2}
            onClick={() => setLanguages("HTML")}
          />
          <Language
            title="React"
            icon="react"
            // isSelected={state.experience === 0}
            onClick={() => setLanguages("React")}
          />
          <Language
            title="NodeJs"
            icon="node"
            // isSelected={state.experience === 1}
            onClick={() => setLanguages("NodeJs")}
          />
          <Language
            title="Angular"
            icon="angular"
            // isSelected={state.experience === 2}
            onClick={() => setLanguages("Angular")}
          />
          <Language
            title="Python"
            icon="python"
            // isSelected={state.experience === 0}
            onClick={() => setLanguages("Python")}
          />
          <Language
            title="Java"
            icon="java"
            // isSelected={state.experience === 1}
            onClick={() => setLanguages("Java")}
          />
          <Language
            title="PHP"
            icon="php"
            // isSelected={state.experience === 2}
            onClick={() => setLanguages("PHP")}
          />
        </C.Display>
        <button onClick={handleBefore}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
