import store from "../../store/store";

const excludeUser = (userName: string): void => {
  const userIndex = store.users.findIndex(
    (user) => user.firstName === userName
  );

  store.users.splice(userIndex, 1);
};

export default excludeUser;
