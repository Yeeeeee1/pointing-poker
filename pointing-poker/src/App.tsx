import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./shared/globalVariables";

function App(): ReactElement {
  return (
    <div>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
