import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AWS from 'aws-sdk';

function UserAttributes( ){
    const params = new URLSearchParams(window.location.search)
    if (params.has('code')) var accessToken = params.get('code')
    var cognitoidentity = new AWS.CognitoIdentity();
    cognitoidentity.createIdentityPool(accessToken , function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});



}

export default UserAttributes