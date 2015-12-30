import React from "react";

class AppController extends React.Component {
  render() {
    return (
      <div className="outer">
        <div className="backgroundImage"></div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle float-left collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-bars"></i>
              </button>
              <button type="button" className="navbar-toggle float-right collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                Connect <span className="caret"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home <span className="sr-only">(current)</span></a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right hidden-xs">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Connect <span className="caret"></span></a>
                  <ul className="dropdown-menu social">
                    <li><a target="_blank" href="https://www.facebook.com/patrick.shaughnessy.5815"><i className="fa fa-lg fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/pattshaughnessy"><i className="fa fa-lg fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://github.com/patrickshaughnessy"><i className="fa fa-lg fa-github"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/pub/patrick-shaughnessy/14/2b1/77"><i className="fa fa-lg fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="http://stackoverflow.com/users/5294685/patrick-shaughnessy"><i className="fa fa-lg fa-stack-overflow"></i></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul className="social visible-xs-block" >
            <li><a target="_blank" href="https://www.facebook.com/patrick.shaughnessy.5815"><i className="fa fa-lg fa-facebook"></i></a></li>
            <li><a target="_blank" href="https://twitter.com/pattshaughnessy"><i className="fa fa-lg fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://github.com/patrickshaughnessy"><i className="fa fa-lg fa-github"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/pub/patrick-shaughnessy/14/2b1/77"><i className="fa fa-lg fa-linkedin"></i></a></li>
            <li><a target="_blank" href="http://stackoverflow.com/users/5294685/patrick-shaughnessy"><i className="fa fa-lg fa-stack-overflow"></i></a></li>
          </ul>
        </div>

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
              <a role="button" className="btn learnMore">Learn More <span className="caret"></span></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppController;
