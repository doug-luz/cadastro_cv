import GlobalStyle from "./GlobalStyle/style";
import { Router } from "../src/Routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <GlobalStyle />
      <Router />
      {/* <div>Bem Vindo</div> */}
    </>
  );
};

export default App;
