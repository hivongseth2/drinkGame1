import React from "react";
import "../styles/Control.scss";
import BocBai from "./BocBai";
// import { toast, ToastContainer } from "react-toastify/dist/components";
import { toast } from "react-toastify";

class Control extends React.Component {
  state = {
    list: [
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
      {
        id: 8,
        name: "Thử thách chụp video",
        description:
          "Người chơi phải chụp một video với một yêu cầu được chỉ định, nếu không thể hoặc chụp sai video thì phải uống.",
      },
      {
        id: 9,
        name: "Thử thách nói tiếng nước ngoài",
        description:
          "Người chơi phải nói một câu bằng tiếng nước ngoài được chỉ định, nếu không thể hoặc nói sai câu thì phải uống.",
      },
      {
        id: 10,
        name: "Thử thách chụp hình với người lạ",
        description:
          "Người chơi phải chụp hình với một người lạ được chỉ định, nếu không thể hoặc chụp sai người thì phải uống.",
      },
      {
        id: 11,
        name: "Thử thách tạo bức tranh",
        description:
          "Người chơi phải tạo một bức tranh với một chủ đề được chỉ định, nếu không thể hoặc tạo sai bức tranh thì phải uống.",
      },
      {
        id: 12,
        name: "Thử thách giải quyết vấn đề",
        description:
          "Người chơi phải giải quyết một vấn đề được chỉ định, nếu không thể hoặc giải quyết sai vấn đề thì phải uống.",
      },
      {
        id: 13,
        name: "Thử thách chơi game",
        description:
          "Người chơi phải chơi một game được chỉ định, nếu thua hoặc không thể chơi được game thì phải uống.",
      },
      {
        id: 14,
        name: "Thử thách tìm kiếm",
        description:
          "Người chơi phải tìm kiếm một thông tin được chỉ định, nếu không thể hoặc tìm kiếm sai thông tin thì phải uống.",
      },
      {
        id: 15,
        name: "Thử thách bắt chuyện",
        description:
          "Người chơi phải bắt chuyện với một người lạ được chỉ định, nếu không thể hoặc bắt chuyện sai người thì phải uống.",
      },
      {
        id: 16,
        name: "Thử thách chạy trong vòng 1 phút",
        description:
          "Người chơi phải chạy trong vòng 1 phút, nếu không thể hoặc chạy sai thời gian thì phải uống.",
      },
      {
        id: 17,
        name: "Thử thách đảo ngược chữ",
        description:
          "người chơi phải đảo ngược từ hoặc cụm từ được chỉ định, nếu không thể hoặc đảo sai thì phải uống",
      },
      {
        id: 18,
        name: "Thử thách chơi bầu cua",
        description: "Người chơi phải chơi bầu cua, nếu thua thì phải uống.",
      },
      {
        id: 19,
        name: "Thử thách giải toán",
        description:
          "Người chơi phải giải một câu toán học, nếu không thể hoặc giải sai câu toán thì phải uống.",
      },
      {
        id: 20,
        name: "Thử thách nhảy chuẩn",
        description:
          "Người chơi phải nhảy một bước nhảy chuẩn được chỉ định, nếu không thể hoặc nhảy sai bước thì phải uống.",
      },
      {
        id: 21,
        name: "Thử thách gửi ảnh yêu thích",
        description:
          "người chơi phải gửi tấm ảnh mà họ thấy đáng yêu nhất cho người bạn thích, nếu không thể hoặc gửi sai ảnh thì phải uống",
      },
      {
        id: 22,
        name: "Thử thách chơi game trên điện thoại",
        description:
          "người chơi phải chơi một game trên điện thoại, nếu thua thì phải uống",
      },
      {
        id: 23,
        name: "Thử thách gọi điện cho người lạ",
        description:
          "người chơi phải gọi điện cho một người lạ, nếu không thể hoặc gọi sai người thì phải uống",
      },
      {
        id: 24,
        name: "Thử thách chơi trò chuyện trực tuyến",
        description:
          "ngườichơi phải tham gia vào một cuộc trò chuyện trực tuyến với người lạ, nếu không thể hoặc trò chuyện sai người thì phải uống.",
      },
      {
        id: 25,
        name: "Thử thách chia sẻ video yêu thích",
        description:
          "người chơi phải chia sẻ một video yêu thích của họ trên mạng xã hội, nếu không thể hoặc chia sẻ sai video thì phải uống.",
      },
      {
        id: 26,
        name: "Thử thách gửi tin nhắn tình yêu",
        description:
          "người chơi phải gửi một tin nhắn tình yêu cho người bạn thích, nếu không thể hoặc gửi sai tin nhắn thì phải uống.",
      },
      {
        id: 27,
        name: "Thử thách gửi bức ảnh tự sướng",
        description:
          "người chơi phải gửi một bức ảnh tự sướng của họ cho người bạn thích, nếu không thể hoặc gửi sai ảnh thì phải uống.",
      },
      {
        id: 28,
        name: "Thử thách chơi trò chuyện nóng",
        description:
          "người chơi phải tham gia vào một cuộc trò chuyện với người lạ về chủ đề nóng, nếu không thể hoặc trò chuyện sai người thì phải uống.",
      },
      {
        id: 29,
        name: "Thử thách chơi trò chuyện với người giới tính ngược",
        description:
          "người chơi phải tham gia vào một cuộc trò chuyện với người giới tính ngược, nếu không thể hoặc trò chuyện sai người thì phải uống.",
      },
      {
        id: 30,
        name: "Thử thách gửi tin nhắn hài hước",
        description:
          "người chơi phải gửi một tin nhắn hài hước cho người bạn thích, nếu không thể hoặc gửi sai tin nhắn thì phải uống.",
      },
      {
        id: 31,
        name: "Thử thách gửi tin nhắn tình yêu dịch",
        description:
          "người chơi phải gửi một tin nhắn tình yêu bằng một ngôn ngữ khác so với ngôn ngữ giao tiếp thông thường, nếu không thể hoặc gửi sai tin nhắn thì phải uống.",
      },
      {
        id: 32,
        name: "Thử thách chơi trò chuyện trực tuyến với người xa",
        description:
          "người chơi phải tham gia vào một cuộc trò chuyện trực tuyến với một người bạn xa, nếu không thể hoặc trò chuyện sai người thì phải uống.",
      },
      {
        id: 33,
        name: "Thử thách gửi tin nhắn hài hước",
        description:
          "người chơi phải gửi một tin nhắn người chơi phải gửi một bức ảnh hài hước cho người bạn thích, nếu không thể hoặc gửi sai ảnh thì phải uống. hài hước cho người bạn thích, nếu không thể hoặc gửi sai tin nhắn thì phải uống.",
      },
      {
        id: 33,
        name: "Thử thách nhảy với người đối diện",
        description:
          "người chơi phải nhảy cùng với người đối diện trong vòng 10 giây, nếu không thể hoặc nhảy sai người thì phải uống.",
      },
      {
        id: 34,
        name: "Thử thách gửi tin nhắn hài hước",
        description:
          "người chơi phải gửi một tin nhắn hài hước cho người bạn thích, nếu không thể hoặc gửi sai tin nhắn thì phải uống.",
      },
      {
        id: 35,
        name: "Thử thách hôn người đối diện",
        description:
          "người chơi phải hôn người đối diện trong vòng 5 giây, nếu không thể hoặc hôn sai người thì phải uống.",
      },
      {
        id: 36,
        name: "Thử thách chơi trò chuyện với người đối diện",
        description:
          "người chơi phải tham gia vào một cuộc trò chuyện với người đối diện trong vòng 5 phút, nếu không thể hoặc trò chuyện sai người thì phải uống.",
      },
      {
        id: 37,
        name: "Thử thách chơi game với người đối diện",
        description:
          "người chơi phải chơi một game với người đối diện, nếu thua thì phải uống.",
      },
      {
        id: 38,
        name: "Thử thách hát với người đối diện",
        description:
          "người chơi phải hát một bài hát cùng với người đối diện, nếu không thể hoặc hát sai bài hát thì phải uống.",
      },
      {
        id: 39,
        name: "Thử thách bắt tay với người đối diện",
        description:
          "người chơi phải bắt tay với người đối diện trong vòng 10 giây, nếu không thể hoặc bắt tay sai người thì phải uống.",
      },
      {
        id: 40,
        name: "Thử thách rót rượu vào cốc",
        description:
          "người chơi bắt đầu từ bạn gần nhất rót rượu vào cốc, rót cốc cho đến khi ai rót làm tràn cốc thì phải uống.",
      },
    ],

    cr_id: "",
    cr_name: "",
    cr_description: "",
    stt: true,
  };
  // componentDidMount() {
  //   let { list } = this.state;
  //   let name;
  //   let des;
  //   let idla = Math.floor(Math.random() * 6); // pham vi hang chuc sua lai thanh 101

  //   while (idla == this.state.cr_id) {
  //     idla = Math.floor(Math.random() * 6); // pham vi hang chuc sua lai thanh 101
  //   }
  //   // list.map((item, index) => {
  //   //   if (item.id == idla) {
  //   //     this.setState({
  //   //       cr_id: item.id,
  //   //       cr_name: item.name,
  //   //       cr_description: item.description,
  //   //     });
  //   //   }
  //   //    if (check == false) {
  //   //     console.log("aaaaaaaaaaaaaaa");
  //   //     this.setState({
  //   //       cr_id: "",
  //   //       cr_name: "",
  //   //       cr_description: "",
  //   //       stt: true,
  //   //     });
  //   //   }

  //   // });

  //   let check = false;
  //   // list.map((item, index) => {
  //   //   if (item.id == idla) {
  //   //     this.setState({
  //   //       cr_id: item.id,
  //   //       cr_name: item.name,
  //   //       cr_description: item.description,
  //   //       stt: false,
  //   //     });
  //   //     check = true;
  //   //     return;
  //   //   }
  //   //   if (check == false) {
  //   //     console.log("aaaaaaaaaaaaaaa");
  //   //     this.setState({
  //   //       cr_id: "",
  //   //       cr_name: "",
  //   //       cr_description: "",
  //   //       stt: true,
  //   //     });
  //   //   })

  //   list.map((item, index) => {
  //     if (item.id == idla) {
  //       this.setState({
  //         cr_id: item.id,
  //         cr_name: item.name,
  //         cr_description: item.description,
  //         stt: false,
  //       });
  //       return;
  //     }
  //     // if (check == false) {
  //     //   this.setState({
  //     //     cr_id: "",
  //     //     cr_name: "",
  //     //     cr_description: "",
  //     //     stt: true,
  //     //   });
  //     // }
  //   });
  // }

  deleteItem = (itemx) => {
    let currentItem = this.state.list;

    currentItem = currentItem.filter((item) => item.id !== itemx);

    this.setState({
      list: currentItem,
    });
  };

  BocBai = () => {
    let list = this.state.list;
    if (list.length == 0) {
      toast.error("Đã hết bài");
      return;
    }
    let name;
    let des;
    let idla = Math.floor(Math.random() * 41); // pham vi hang chuc sua lai thanh 101

    // while (idla == this.state.cr_id) {
    //   idla = Math.floor(Math.random() * 5); // pham vi hang chuc sua lai thanh 101
    // }
    let kt = false;
    // console.log(this.state.list);
    list.map((item, index) => {
      if (item.id == idla) {
        this.setState({
          cr_id: item.id,
          cr_name: item.name,
          cr_description: item.description,
          stt: false,
        });

        kt = true;
        // toast.success("Đã rút bài thành công");
      }
    });

    // console.log("aaaaaaaaaaaaaaa");
    // this.setState({
    //   cr_id: "",
    //   cr_name: "",
    //   cr_description: "",
    //   stt: true,
    // });
    // this.BocBai();
    // console.log("tu boc id : " + idla);
    // while (this.state.check) {
    if (!kt) {
      return this.BocBai();
    }
    document.getElementById("buttonBoc").click();

    // this.setState({
    //   stt: false,
    // });
  };

  setSTT = (gt) => {
    this.setState({
      stt: gt,
    });
  };
  render() {
    return (
      <div className="menuControl">
        <ul>
          <button className="btnXoc">Xóc bài</button>
          {
            <button
              className="btnBoc"
              id="buttonBoc"
              disabled={!this.state.stt}
              onClick={() => this.BocBai()}
            >
              Bóc bài
            </button>
          }
          <button className="btnReset" onClick={() => this.choilai()}>
            Chơi Lại
          </button>
        </ul>
        <BocBai
          id={this.state.cr_id}
          name={this.state.cr_name}
          des={this.state.cr_description}
          setStt={this.setSTT}
          stt={this.state.stt}
          del={this.deleteItem}
        />
      </div>
    );
  }
}
export default Control;
