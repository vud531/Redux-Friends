import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/login'>Log In</Link>
        <Link to='/home'>Home</Link>

        <Route path='/login' component={Login}/>
        <PrivateRoute exact path="/home" component={Home} />
      </div>

    );
  }
}

export default App;
