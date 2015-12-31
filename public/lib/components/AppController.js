import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import ViewController from "./ViewController";

class AppController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'blog'
    };
  }

  renderView(view){
    this.setState({view: view});
  }

  render() {
    return (
      <div className="outer">
        <div className="backgroundImage"></div>
        <NavBar renderView={this.renderView.bind(this)} />
        <ViewController view={this.state.view} renderView={this.renderView.bind(this)} />
      </div>
    );
  }
}

export default AppController;
