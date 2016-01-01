import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import ViewController from "./ViewController";


class AppController extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     view: 'home'
  //   };
  // }

  // renderView(view){
  //   this.setState({view: view});
  // }

  render() {
    return (
      <div className="outer">
        <div className="backgroundImage"></div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default AppController;
