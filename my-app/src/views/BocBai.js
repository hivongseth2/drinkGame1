import React from "react";
import logo from "../assets/img/labai.png";
import "../styles/BocBai.scss";

class BocBai extends React.Component {
  state = {
    id: 1,
    name: "Thử thách nối từ",
    description:
      "Người chơi phải nối một từ vào từ cuối của từ trước đó, nếu không thể hoặc nối sai từ thì phải uống.",
  };

  render() {
    let { id, name, des } = this.props;

    return (
      <div className="BocBai">
        <img className="imgLaBai" src={logo}></img>
        <div className="content">
          <div className="name">{name}</div>
          <div className="des">{des}</div>
        </div>
      </div>
    );
  }
}
export default BocBai;
