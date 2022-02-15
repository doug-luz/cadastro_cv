import GlobalStyle from "./GlobalStyle/style";
import { Router } from "../src/Routes";
import { SignupProvider } from "./Contexts/SignupContext";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <div>Bem Vindo</div> */}
    </>
  );
};

export default App;
