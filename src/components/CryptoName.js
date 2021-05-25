import React from 'react';
import '../App.css';


function CryptoName(props){
    return(
      <div>
  
      <p fontFamily='Kalam-Bold' style={{
       fontSize: 40,
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       marginTop: '50px'
      }}>
  
      {props.name} </p>
      </div>
    );
  } 
  

  export default CryptoName