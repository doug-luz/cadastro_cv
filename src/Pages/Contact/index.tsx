import { useHistory } from "react-router-dom";
import * as C from "./style.js";
import { Theme } from "../../Theme/index";
import { SignpuActions, useSignup } from "../../Contexts/SignupContext";
import { ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";

export const Contact = () => {
  useEffect(() => {
    dispatch({
      type: SignpuActions.setPage,
      payload: 4,
    });
    if (state.name === "") {
      history.push("/");
    }
  }, []);

  const history = useHistory();

  const { state, dispatch } = useSignup();

  const handleChangeLinkedin = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignpuActions.setLinkedin,
      payload: e.target.value,
    });
  };

  const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignpuActions.setGithub,
      payload: e.target.value,
    });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignpuActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleFinish = () => {
    if (state.linkedin !== "" && state.github !== "" && state.email !== "") {
      console.log({ state });
    } else {
      console.log("Entrou");
      toast.error("Insira seu nome!", {
        autoClose: 5,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleBefore = () => {
    history.push("/experience");
  };

  return (
    <Theme>
      <C.Container>
        <p>4/4 </p>
        <h2>Estamos acabando {state.name}</h2>
        <p>Preencha seus dados de contato</p>
        <hr />

        <label>
          Qual seu Linkedin?
          <input
            autoFocus
            type="url"
            value={state.linkedin}
            onChange={handleChangeLinkedin}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            autoFocus
            type="url"
            value={state.github}
            onChange={handleChangeGithub}
          />
        </label>

        <label>
          Qual seu Email?
          <input
            autoFocus
            type="email"
            value={state.email}
            onChange={handleChangeEmail}
          />
        </label>
        <button onClick={handleBefore}>Anterior</button>

        <button onClick={handleFinish}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
