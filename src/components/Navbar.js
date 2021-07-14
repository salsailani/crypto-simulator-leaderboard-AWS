import React from 'react';
import {  Button, Navbar, Nav, Form } from 'react-bootstrap';
import {
    useHistory
  } from "react-router-dom";

  
function Navbar2(props){

    let history = useHistory();
     function routeChange(){ 
      let path = './Login.js'; 
      history.push(path);
    }
  
    return(
    <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="./">CRYPTO SIMULATOR</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="./">HOME</Nav.Link>
        <Nav.Link href="#leaderboard">LEADERBOARD</Nav.Link>
        <Nav.Link href="#FAQ">FAQ</Nav.Link>
      </Nav>
      <Form inline>
        <Button  onClick={routeChange} variant="outline-info" href={props.URL}>{props.status}</Button>
      </Form>
    </Navbar>
  </div>
    )
  }

  export default Navbar2
  