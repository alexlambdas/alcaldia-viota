import React from "react";
import SideNav from "./SideNav";
import FormSubjectMail from "./FormSubjetMail";
import HeaderNav from "./HeaderNav";
import { Redirect } from "react-router-dom";

import { ROUTES } from "../../Resources/ReactRoutes";

function PageSubject(props){
  const {isLogin, fnSetLogin, fnSetSubjectMail} = props;

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
        <div className="container_page_subject">
          <FormSubjectMail 
            fnSetSubjectMail={fnSetSubjectMail}/>
        </div>
      </div>
    </div>
  )
}

export default PageSubject;