import React from "react";
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 greetingArea">
                  <h1>Hi!</h1>
                  <h2>
                    I'm Patrick.
                  </h2>
                  <h3>
                    I make things with javascript.
                  </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 text-center">
              <Link role="button" className="btn learnMore" to="portfolio">Portfolio <span className="caret"></span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
