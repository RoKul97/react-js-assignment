import React, { useState, useEffect } from "react";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import classes from "./TeamContent.module.css";
// const DUMMY_USERS = [
//   {
//     id: "d1",
//     uName: "rohit",
//     img: "https://cdn-icons-png.flaticon.com/512/4736/4736380.png",
//   },
//   {
//     id: "d2",
//     uName: "mayuri",
//     img: "https://cdn-icons.flaticon.com/png/512/3678/premium/3678158.png?token=exp=1635315388~hmac=46b33a263ecfd29fb91c7b3cf4af6e56",
//   },
//   {
//     id: "d3",
//     uName: "mihir",
//     img: "https://cdn-icons.flaticon.com/png/128/3344/premium/3344361.png?token=exp=1635315388~hmac=3c96b9bbbad22a0fd0219279c93491cc",
//   },
// ];

//dummy response structure
// const users={
//   login:'mojombo',
//   avatar_url:'sasa',
// }
// transform this into a new object to match your fields in DUMMY_USERS
//{
// id:userData.id
// uName:userData.login
// img:userData.avatar_url
//}
const TeamContent = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    const transformedUserData = data.map((userData) => {
      return {
        id: userData.id,
        uName: userData.login,
        img: userData.avatar_url,
      };
    });
    //setUsers(transformedUserData);
    let newArray = [];
    for (let i = 0; i < 8; i++) {
      newArray.push(transformedUserData[i]);
    }
    setUsers(newArray);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={classes.main}>
      <h2>Meet the Team</h2>
      <hr />
      <div className={classes.wrapper}>
        {/* <section className={classes['user-info']}></section> */}
        <section className={classes.userInfo}>
          {users.map((m) => {
            return (
              <>
                <img
                  src={m.img}
                  style={{
                    height: "45px",
                    width: "45px",
                    border: "thin solid black",
                    borderRadius: "100%",
                  }}
                  alt={m.uName}
                />
                <h3>{m.uName}</h3>
              </>
            );
          })}
        </section>
        <section className={classes.animatedComp}>
          <div className={classes.comp}>
            <AnimatedComponent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamContent;
