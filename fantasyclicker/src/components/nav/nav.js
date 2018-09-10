import React from "react";
import "./nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li id="rightWrong">{props.rightWrong}</li>

      <li id="currrentScore">Current Score: {props.score}</li>

      <li id="topScore">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;