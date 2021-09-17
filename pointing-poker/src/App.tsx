import React, { ReactElement, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routes, { socket, SocketEvent } from "./shared/globalVariables";
import { getChatState } from "./redux/store/selectors";
import Chat from "./components/Chat/Chat";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { IMessage } from "./redux/types/chat";
import { setMessage } from "./redux/store/action-creators/chat";
import setNewMessage from "./redux/store/thunk-creators/chat";

function App(): ReactElement {
  const { isOpenChat } = useSelector(getChatState);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on(SocketEvent.CONNECT, () => {
      console.info("Connection success", socket.id);
    });

    socket.on(SocketEvent.MESSAGE_SEND, (message: IMessage) => {
      dispatch(setNewMessage(message));
    });

    return () => {
      socket.off(SocketEvent.MESSAGE_SEND);
      socket.off(SocketEvent.CONNECT);
    };
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
