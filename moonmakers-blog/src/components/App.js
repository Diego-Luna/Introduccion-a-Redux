import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./Menu";
import Ususarios from "./Usuarios";

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <div className="margen">
        <Route exact path="/" component={Ususarios} />
        <Route exact path="/tareas" component={Tareas} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;
