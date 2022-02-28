import { useHistory } from "react-router-dom";
import { Theme } from "../../Theme/index";
import * as C from "./style.js";
import { SignpuActions, useSignup } from "../../Contexts/SignupContext";
import { useEffect } from "react";
import { ExperienceLevel } from "../../Components/ExperienceLevel";

export const Experience = () => {
  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: SignpuActions.setPage,
        payload: 3,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  const { state, dispatch } = useSignup();

  const setExperience = (level: number) => {
    dispatch({
      type: SignpuActions.setExperience,
      payload: level,
    });
  };

  const handleNext = () => {
    if (state.name !== "") {
      history.push("/contact");
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
        <h2>{state.name}, Assinale sua experiência</h2>
        <p>Selecione a opção que em melhor se enquadra </p>
        <hr />

        <ExperienceLevel
          title="Sou um programador Júnior"
          description="Programo a menos de 1 ano"
          isSelected={state.experience === 0}
          onClick={() => setExperience(0)}
        />
        <ExperienceLevel
          title="Tenho certa experiência"
          description="Atuo na área entre 1 e 5 anos"
          isSelected={state.experience === 1}
          onClick={() => setExperience(1)}
        />
        <ExperienceLevel
          title="Sou um programador Experiente"
          description="Programo a mais de 5 anos"
          isSelected={state.experience === 2}
          onClick={() => setExperience(2)}
        />
        <button onClick={handleBefore}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
