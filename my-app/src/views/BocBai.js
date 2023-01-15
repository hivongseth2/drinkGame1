import React from "react";
import logo from "../assets/img/labai.png";
import logo1 from "../assets/img/mattruoc.png";

import "../styles/BocBai.scss";

class BocBai extends React.Component {
  state = {
    id: "",
    name: "",
    description: "",
  };

  // componentDidMount() {
  //   //   console.log(res.data.data);
  //   this.setState({
  //     id: this.props.id,
  //     name: this.props.name,
  //     description: this.props.des,
  //   });
  //   console.log(this.state);
  // }
  componentWillReceiveProps() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      description: this.props.des,
    });
  }
  btnXacNhan = () => {
    this.setState({
      id: "",
      name: "",
      des: "",
    });
    console.log(this.state);
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
    return (
      <div className="BocBai">
        {console.log(this.state)}
        {this.state.id == "" ? (
          <img className="imgmattruoc" src={logo1}></img>
        ) : (
          <>
            <img className="imgLaBai" src={logo}></img>
            <div className="content">
              <div className="name">{name}</div>
              <div className="des">{des}</div>
            </div>

            <button className="btnOK" onClick={() => this.btnXacNhan()}>
              Xác nhận
            </button>
          </>
        )}
      </div>
    );
  }
}
export default BocBai;
