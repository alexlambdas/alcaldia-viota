import React from "react";
import SideNav from "./SideNav";
import FormMessageMail from "./FormMessageMail";
import HeaderNav from "./HeaderNav";
import { Redirect } from "react-router-dom";

import { ROUTES } from "../../Resources/ReactRoutes";

function PageMessage(props){
  const {isLogin, fnSetLogin, fnSetMessageMail} = props;

  if(isLogin === false){
    return <Redirect to={ROUTES.ROUTE_LOGIN} />
  }

  return(
    <div className="container_page_intro">
      <div>
        <SideNav 
          fnSetLogin={fnSetLogin}/>
      </div>
      <div>
        <div className="container_nav_header">
          <HeaderNav />
        </div>
        <div className="container_page_message">
          <FormMessageMail 
            fnSetMessageMail={fnSetMessageMail}/>
        </div>
      </div>
    </div>
  )
}

export default PageMessage;