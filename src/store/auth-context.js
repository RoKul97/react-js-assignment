import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  //logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (token) => {
    setToken(token);
    setIsLogin((prevState) => !prevState);
  };

  const userIsLoggedIn = isLogin;
  // const logoutHandler = () => {
  //   setToken(null);
  // };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    //logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
