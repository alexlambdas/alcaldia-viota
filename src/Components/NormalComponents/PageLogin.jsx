import React from "react";
import Login from "./Login";

function PageLogin(props){

  return(
    <div className="container_page_login">
      <Login {...props}/>
    </div>
  )
}

export default PageLogin;