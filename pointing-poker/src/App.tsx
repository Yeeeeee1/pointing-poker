import React, { ReactElement, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import routes, { socket, SocketEvent } from "./shared/globalVariables";
import { getChatState } from "./redux/store/selectors";
import Chat from "./components/Chat/Chat";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App(): ReactElement {
  const { isOpenChat } = useSelector(getChatState);

  useEffect(() => {
    socket.on(SocketEvent.CONNECT, () => {
      console.info("Connection success", socket.id);
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
      {isOpenChat && <Chat />}
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
