import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./shared/globalVariables";
import "./App.scss";

function App(): ReactElement {
  return (
    <div className="app-container">
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
