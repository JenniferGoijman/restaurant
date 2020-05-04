import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS COMPONENTS & CONTAINERS
import Nav from './components/header/header'
import Login from './containers/user/Login/Login';
import Register from './containers/user/register/Register';
import AdminProducts from './containers/admin/Admin-Products';
import Home from './containers/home/home'


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/admin-products' component={AdminProducts} exact />
          <Route path='/home' component={Home} exact />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
