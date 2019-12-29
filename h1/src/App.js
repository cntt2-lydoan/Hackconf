import './App.css';

import React, { Component, Fragment } from 'react';
import Direction from './direction/Direction';
import { BrowserRouter } from 'react-router-dom';


 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Direction />
      </BrowserRouter>
    )
  }
}
export default App;
