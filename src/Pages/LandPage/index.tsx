import { useHistory } from "react-router-dom";
import * as C from "./style.js";
import { Theme } from "../../Theme/index";
import { SignpuActions, useSignup } from "../../Contexts/SignupContext";
import { ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";

export const LandPage = () => {
  useEffect(() => {
    dispatch({
      type: SignpuActions.setPage,
      payload: 1,
    });
  }, []);

  const history = useHistory();

  const { state, dispatch } = useSignup();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignpuActions.setName,
      payload: e.target.value,
    });
  };

  const handleNext = () => {
    if (state.name !== "") {
      history.push("/languages");
    } else {
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

  return (
    <Theme>
      <C.Container>
        <p>1/4 </p>
        <h2>Preencha seu nome</h2>
        <hr />

        <label>
          Nome completo
          <input value={state.name} autoFocus onChange={handleChangeName} />
        </label>
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
