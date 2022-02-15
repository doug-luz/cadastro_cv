import { useHistory } from "react-router-dom";
import * as C from "./style.js";
import { Theme } from "../../Theme/index";

export const LandPage = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push("/languages");
  };

  return (
    <Theme>
      <C.Container>
        <p>1/3</p>
        <h2>Preencha seu nome</h2>
        <hr />

        <label>
          Nome completo
          <input autoFocus />
        </label>
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
