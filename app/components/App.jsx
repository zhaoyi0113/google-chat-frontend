import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import '../assets/scss/main.scss';
import Main from './Main.jsx';
import Chat from './Chat.jsx';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(App);
