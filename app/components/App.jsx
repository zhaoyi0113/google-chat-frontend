import React from 'react';
import { connect } from 'react-redux';

import '../assets/scss/main.scss';
import Main from './Main.jsx';

const App = () => {
  return (
    <div className="root">
      <Main />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
