import React from "react";
import "../styles/Control.scss";

class Control extends React.Component {
  state = [
    {
      id: 1,
      name: "Thử thách nối từ",
      description:
        "Người chơi phải nối một từ vào từ cuối của từ trước đó, nếu không thể hoặc nối sai từ thì phải uống.",
    },
    {
      id: 2,
      name: "Thử thách số đoạn",
      description:
        "Người chơi phải đoán số đoạn của một đối tượng được chỉ định, nếu sai thì phải uống.",
    },
  ];

  BocBai = () => {};
  render() {
    return (
      <div className="menuControl">
        <ul>
          <button className="btnXoc">Xóc bài</button>
          <button className="btnBoc" onClick={() => this.BocBai()}>
            Bóc bài
          </button>
          <button className="btnReset">Chơi Lại</button>
        </ul>
      </div>
    );
  }
}
export default Control;
