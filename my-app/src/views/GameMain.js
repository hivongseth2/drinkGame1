import React from "react";
import logo from "../assets/img/bobai.png";
import "../styles/bobai.scss";

class GameMain extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className="introImg" src={logo}></img>
        </div>
      </>
    );
  }
}
export default GameMain;
