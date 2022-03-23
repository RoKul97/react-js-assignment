import { Fragment } from "react";
import SideBar from "./SideBar";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Fragment>
      <section className={classes.section}>
        <SideBar />
        <aside>{props.children}</aside>
      </section>
    </Fragment>
  );
};

export default Layout;
