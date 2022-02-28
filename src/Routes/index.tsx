import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Experience } from "../Pages/Experience";
import { LandPage } from "../Pages/LandPage";
import { Languages } from "../Pages/Languages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandPage />
        </Route>
        <Route path="/languages">
          <Languages />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
