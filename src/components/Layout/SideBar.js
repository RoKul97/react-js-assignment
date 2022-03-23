import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
//import AuthForm from "../Auth/AuthForm";
//import "../../index.css";
import classes from "./SideBar.module.css";
const SideBar = () => {
  const authCtx = useContext(AuthContext);
  //const isLoggedIn = authCtx.isLoggedIn;

  return (
    <>
      {/* {!isLoggedIn && <AuthForm />} */}

      <>
        {authCtx.isLoggedIn && (
          <div className={`${classes.sidenav}`}>
            <h2>iJavaScript</h2>
            <NavLink
              className={classes.li}
              activeClassName={classes.active}
              to="/dashboard"
            >
              DASHBOARD
            </NavLink>

            <NavLink
              className={classes.li}
              activeClassName={classes.active}
              to="/about"
            >
              ABOUT
            </NavLink>

            <NavLink
              className={classes.li}
              activeClassName={classes.active}
              to="/team"
            >
              TEAM
            </NavLink>
          </div>
        )}
      </>

      {/* <div className={classes.sidenav}>
        <h2>iJavaScript</h2>
        <Link to="/dashboard">DASHBOARD</Link>
        <hr />
        <Link to="/about">ABOUT</Link>
        <hr />
        <Link to="/team">TEAM</Link>
      </div> */}
    </>
  );
};

export default SideBar;
