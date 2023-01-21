import React from "react";
import logo from "../assets/img/labai.png";
import logo1 from "../assets/img/mattruoc.png";
import ListPush from "./ListPush";

import "../styles/BocBai.scss";

class BocBai extends React.Component {
  state = {
    id: "",
    name: "",
    description: "",
  };

  componentDidMount() {
    //   console.log(res.data.data);
    this.setState({
      id: this.props.id,
      name: this.props.name,
      description: this.props.des,
    });
    // console.log(this.state);
  }
  componentWillReceiveProps() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      description: this.props.des,
    });
  }
  btnXacNhan = () => {
    let crI = this.props.id;
    this.deleteCo(crI);
    this.setState({
      id: "",
      name: "",
      des: "",
    });
    this.props.setStt(true);
    // console.log(this.props.stt);
  };

  deleteCo = (item) => {
    this.props.del(item);
    // console.log(item);
  };

  render() {
    // const mystyle = {
    //   color: "white",
    //   backgroundColor: "DodgerBlue",
    //   padding: "10px",
    //   fontFamily: "Arial",
    // };

    // let isEmpty = Object.keys(this.state.id).length === 0;

    let { id, name, des } = this.props;
    // this.setState({
    //   id: this.props.id,
    // });

    // this.setState({
    //   id: this.props.id,
    //   name: this.props.name,
    //   description: this.props.des,
    // });
    {
    }

    return (
      <div className="BocBai">
        {/* {console.log(this.state)} */}
        {this.props.stt === true ? (
          <>
            <img className="imgmattruoc" src={logo1}></img>
          </>
        ) : (
          <>
          {/* <div className="BocBai__Container">
            <img className="imgLaBai" src={logo}></img>
            <div className="content">
              <div className="name">{name}</div>
              <div className="des">{des}</div>
            </div>

            <button className="btnOK" onClick={() => this.btnXacNhan()}>
              Xác nhận
            </button>
          </div> */}
          <div className="BocBai__Container">
            <div className="BocBai__Content" style={{ backgroundImage: `url(${logo})` }}>
              <div className="name">{name}</div>
              <div className="des">{des}</div>
            </div>

            <button className="btnOK" onClick={() => this.btnXacNhan()}>
              Xác nhận
            </button>
            {/* {console.log(this.state.name)} */}
          </div>
          </>
        )}

        <ListPush
          id={this.state.id}
          name={this.state.name}
          des={this.state.description}
        />
      </div>
    );
  }
}
export default BocBai;
