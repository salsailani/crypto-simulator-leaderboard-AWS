import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button } from 'react-bootstrap';

function BuyandSellButtons(){
    return(
      <div class="text-center">
      <Button variant="outline-success m-3" size="lg">Buy</Button>
      <Button variant="outline-danger m-3" size="lg">Sell</Button>
      </div>
    )
  }

  export default BuyandSellButtons