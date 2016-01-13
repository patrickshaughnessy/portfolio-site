import React from "react";
import NavBar from "./NavBar";

class AppController extends React.Component {

  render() {
    return (
      <div className="outer">
        <div className="backgroundImage"></div>
        <NavBar />
        <div className="viewArea">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppController;
