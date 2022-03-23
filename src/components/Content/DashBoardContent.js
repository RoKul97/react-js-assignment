import React, { useState } from "react";
import classes from "./DashboardPage.module.css";
//import profilePic from "../../assets/my-photo.jpg";
import profilePic from "../../assets/profilePic2.png";
const DashBoardContent = () => {
  const [bindingValue, setBindingValue] = useState("");
  const bindingValueHandler = (e) => {
    e.preventDefault();
    setBindingValue(e.target.value);
  };
  return (
    <div className={classes.main}>
      <section className={classes.profile}>
        <img src={profilePic} alt="profile-pic" />
        <div>
          <h2>Welcome Rohit Kulkarni!</h2>
          <p>Last Login: 04 Feb 2021</p>
        </div>
      </section>
      <hr />
      <strong style={{ color: "red" }}>Account Balance:$4000</strong>
      <table className={classes.customers}>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>01-Feb-2018</td>
            <td>Room Rent</td>
            <td>700</td>
          </tr>
          <tr>
            <td>02-Feb-2018</td>
            <td>Movies</td>
            <td>290</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className={classes.cta}>
        <section className={classes.control}>
          <h3>Subscribe to alerts</h3>
          <div>
            <input type="checkbox" name="SMS Alerts" />
            <label htmlFor="smsAlerts">SMS Alerts</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="marketing-newsletter">Marketing Newsletter</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Flyer">Flyer</label>
          </div>
        </section>
        <section className={classes.controlTwo}>
          <div className={classes.twoWayBinding}>
            <label htmlFor="twoWayBinding">Two Way Data Binding</label>
            <div>
              <input
                type="text"
                placeholder="Enter value for data binding"
                onChange={bindingValueHandler}
              />
            </div>
            <div>
              <input type="text" value={bindingValue} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoardContent;
