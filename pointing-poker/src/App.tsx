import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./shared/globalVariables";
import Footer from "./components/Footer/Footer";

function App(): ReactElement {
  return (
    <div>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
