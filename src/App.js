import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './components/Navbar'
import Chart from './components/Chart'
import CryptoName from './components/CryptoName'
import BuyAndSellButtons from './components/BuyAndSellButtons'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ChangeLoginState from './screens/ChangeLoginState';

function App(){
  return (
  <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={ChangeLoginState} exact />
  </Router>
  );
}



export default App