import { Route, Switch } from "react-router-dom";
import { LandPage } from "../Pages/LandPage/index";

export const Router = () => {
  return (
    <Switch>
      <Route path="/">
        <LandPage />
      </Route>
    </Switch>
  );
};
