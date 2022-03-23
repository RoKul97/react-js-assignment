import React from "react";
import Anagram from "react-anagram-animation";

export default function AnimatedComponent() {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <Anagram words={["Meet the TEAM", "TeeM eht MEAT"]} />
    </div>
  );
}
