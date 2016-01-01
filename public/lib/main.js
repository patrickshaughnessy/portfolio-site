import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link } from 'react-router';

import AppController from "./components/AppController";

ReactDOM.render((
  <Router>
    <Route path="/" component={AppController}>
      <Route path="portfolio" component={Portfolio} />
      <Route path="blog" component={Blog} />
    </Route>
  </Router>
), document.getElementById("react"));
