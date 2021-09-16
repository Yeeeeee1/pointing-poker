import React, { ReactElement, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes, { socket, SocketEvent } from "./shared/globalVariables";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";

function App(): ReactElement {
  useEffect(() => {
    socket.on(SocketEvent.CONNECT, () => {
      console.info("Connection success", socket.id);
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
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
