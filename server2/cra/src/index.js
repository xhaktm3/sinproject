import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <div id='header'>
      <Link to="/">HOME</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
