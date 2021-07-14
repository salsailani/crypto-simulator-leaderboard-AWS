import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import LoggedIn from './screens/LoggedIn';

function App(){
  return (
  <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoggedIn} exact />
  </Router>
  );
}



export default App