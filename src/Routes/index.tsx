import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LandPage } from "../Pages/LandPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LandPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
