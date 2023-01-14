import React from "react";
import "../styles/Control.scss";
import BocBai from "./BocBai";

class Control extends React.Component {
  state = {
    list: [
      {
        id: 0,
        name: "Thử thách chụp hình với người lạ",
        description:
          "Người chơi phải chụp hình với một người lạ được chỉ định, nếu không thể hoặc chụp sai người thì phải uống.",
      },
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
      {
        id: 3,
        name: "Thử thách đoán tên",
        description:
          "Người chơi phải đoán tên của một người, nếu sai thì phải uống.",
      },
      {
        id: 4,
        name: "Thử thách chụp hình",
        description:
          "Người chơi phải chụp hình với một yêu cầu được chỉ định, nếu không thể hoặc chụp sai hình thì phải uống.",
      },
      {
        id: 5,
        name: "Thử thách lắc chảo",
        description:
          "Người chơi phải lắc chảo đến khi xuất hiện một số được chỉ định, nếu không thể hoặc lắc sai số lần thì phải uống.",
      },
      {
        id: 6,
        name: "Thử thách hát ca khúc",
        description:
          "Người chơi phải hát một bài hát được chỉ định, nếu không thể hoặc hát sai lời thì phải uống.",
      },
      {
        id: 7,
        name: "Thử thách đảo ngược",
        description:
          "Người chơi phải đảo ngược một câu đã được nói trước đó, nếu không thể hoặc đảo sai câu thì phải uống.",
      },
    ],

    cr_id: 7,
    cr_name: "Thử thách đảo ngược",
    cr_description:
      "Người chơi phải đảo ngược một câu đã được nói trước đó, nếu không thể hoặc đảo sai câu thì phải uống.",
  };

  BocBai = () => {
    let { list } = this.state;
    let name;
    let des;
    let idla = Math.floor(Math.random() * 8); // pham vi hang chuc sua lai thanh 101
    list.map((item, index) => {
      if (item.id === idla) {
        this.setState({
          cr_id: item.id,
          cr_name: item.name,
          cr_description: item.description,
        });
      }
    });
  };
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
        <BocBai
          id={this.state.cr_id}
          name={this.state.cr_name}
          des={this.state.cr_description}
        />
      </div>
    );
  }
}
export default Control;
