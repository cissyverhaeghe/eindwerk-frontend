import { createContext, useState } from "react";
import { destroyCookie } from "nookies";

const UserContext = createContext({
  user: {},
  login: (user) => {},
  logout: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userIsLoggedIn = Object.keys(user) != 0;

  const loginHandler = (user) => {
    setUser(user);
  };
  const logoutHandler = () => {
    setUser({});
    destroyCookie(null, "cookiebackend");
  };

  const contextValue = {
    user: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
