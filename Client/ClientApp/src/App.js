import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './custom.css';
import './Css/Main.css';  
import './Css/Styles.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    );
  }
}
