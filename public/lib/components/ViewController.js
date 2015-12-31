import React from "react";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Blog from "./Blog";

class ViewController extends React.Component {
  render() {
    let view;
    switch(this.props.view){
      case 'home':
        view = <Home renderView={this.props.renderView.bind(this)} />
        break;
      case 'portfolio':
        view = <Portfolio renderView={this.props.renderView.bind(this)} />
        break;
      case 'blog':
        view = <Blog renderView={this.props.renderView.bind(this)} />
        break;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default ViewController;
