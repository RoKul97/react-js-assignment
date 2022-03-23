//import { useState } from "react";
import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Team from "./pages/Team";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/about" exact>
              <About />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/team">
              <Team />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
