import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const lineStyle = {
    color: "firebrick",
  }
  return <div>
    <div id="home"></div>
      <h1 style={lineStyle}>{name}is a Web Developer from {city}</h1>
    
  </div>;
}

export default Home;
