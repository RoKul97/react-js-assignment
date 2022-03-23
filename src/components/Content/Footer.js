import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "60px",
      }}
    >
      <footer
        style={{
          backgroundColor: "tomato",
          color: " white",
          position: "absolute",
        }}
      >
        <p>Some footer!</p>
      </footer>
    </div>
  );
};

export default Footer;
