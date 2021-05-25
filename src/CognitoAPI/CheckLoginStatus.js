import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';


 function CheckLoginStatus(){
    console.log(Auth.currentUserInfo())
    
    return (
      <h2>Check Login</h2>
    )

  }


export default CheckLoginStatus