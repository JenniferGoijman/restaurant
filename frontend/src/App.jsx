import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/login' component = { Login } exact />
        </Switch> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
