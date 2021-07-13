import React from 'react';
import {  Button, Navbar, Nav, Form } from 'react-bootstrap';
import {
    useHistory
  } from "react-router-dom";

  
function Navbar2(){

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
        <Button  onClick={routeChange} variant="outline-info" href="https://cryptosimulatorleadeba1b835f-ba1b835f-dev.auth.us-east-1.amazoncognito.com/login?client_id=1cnogskunu6mcsgsqa1t2tga54&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://production.d35jd4sqaf8f3h.amplifyapp.com">Login/Signup</Button>
      </Form>
    </Navbar>
  </div>
    )
  }

  export default Navbar2
  