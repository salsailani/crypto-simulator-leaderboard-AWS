import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function UserAttributes( ){
    const params = (window.location.href)
    var IDtokenMatch = params.match(/=[^&]+/)
    var IDtokenTemp = IDtokenMatch[0]
    var IDtoken = IDtokenTemp.substring(1) //removing the first equal sign

    var tokens = IDtoken.split(".");  //JWT Token 

    var kid = (atob(tokens[0])); //key identifier
    var userInfo = (atob(tokens[1]))

    var name = userInfo.name
    console.log(name)


return(
    <div>
    <h1>{userInfo}</h1>
    <h1>{userInfo.name}</h1>
    </div>
)


}

export default UserAttributes