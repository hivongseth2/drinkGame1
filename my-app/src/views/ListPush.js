import React from "react";
import "../styles/ListPush.scss";

class ListPush extends React.Component {
  state = {
    list: [
      {
        // id: null,
        // name: null,
        // description: null,
      },
    ],
    stt: false,
  };

  componentWillReceiveProps() {
    this.setState({
      stt: true,
    });
    this.addList();
  }

  componentWillMount() {
    this.setState({
      stt: true,
    });
    this.addList();
  }
  addList = () => {
    if (this.props.id != "") {
      const w = {
        id: this.props.id,
        name: this.props.name,
        description: this.props.description,
      };
      if (this.state.stt) {
        this.setState({
          list: [...this.state.list, w],
        });
        this.setState({
          stt: false,
        });
        //   console.log(this.state.list);
        this.render();
      }
    }

    return;
  };
  render() {
    // this.setState({
    //   id: id,
    //   name: name,
    //   description: des,
    let { list } = this.state;
    // let isEmpty = Object.keys().length === 0;

    let count = 0;
    console.log(list);
    // });
    return (
      <>
        <div className="container">
          <div className="items">
            <div className="items-head">
              <p>Bài đã bóc</p>
              <hr />
            </div>
            {list.map((item, index) => {
              if (item.id != undefined) {
                return (
                  <div className="items-body">
                    <div className="items-body-content">
                      <span>{`${index} - ${item.name}`}</span>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
export default ListPush;
