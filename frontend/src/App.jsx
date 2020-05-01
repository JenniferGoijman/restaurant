import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS COMPONENTS & CONTAINERS
import Nav from './components/header/header'
import Login from './containers/user/login/Login';
import Register from './containers/user/register/Register';


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
