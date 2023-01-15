import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/img/labai.png";
import ReactDOM from "react-dom/client";
import "../styles/Modal.scss";
import styled from "styled-components";
class BoxItem extends React.Component {
  state = {
    isOpen: true,
    list: [],
  };
  componentDidMount() {
    this.setState({
      list: this.props.list,
    });
  }
  componentWillReceiveProps() {
    this.setState({
      list: this.props.list,
    });
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => this.setState({ isOpen: false });

  render() {
    // console.log("aaaaaaaaa1" + this.props.list.name);
    // let list1 = this.state.list;
    console.log(this.state.list);
    return (
      <>
        <Modal
          // className="Modal"
          show={this.props.isOpen}
          onHide={this.props.closeModal}
          backdrop="static"
          className="d-xl-inline-flex justify-content-center "
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal Form Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name input"
            /> */}

            {this.state.list.map((item, index) => {
              return (
                <div className="boxitem">
                  <img className="imgLaBai1" src={logo}></img>
                  <div className="content">
                    <div className="name">{item.name}</div>
                    <div className="des">{item.des}</div>
                  </div>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default BoxItem;
