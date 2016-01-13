import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Admin from './components/Admin';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import AppController from "./components/AppController";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppController}>
      <IndexRoute component={Home} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="blog" component={Blog} />
      <Route path="admin" component={Admin} />
    </Route>
  </Router>
), document.getElementById("react"));
