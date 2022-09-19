import React from "react";
import SideNav from "./SideNav";
import FormInputFile from "./FormInputFile";
import HeaderNav from "./HeaderNav";
import {Redirect} from "react-router-dom";

import {ROUTES} from "../../Resources/ReactRoutes";

function PageInputFile(props){

  const {isLogin, fnSetLogin, userObjectResponse, subjectMail, messageMail} = props;

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
        <div className="container_input_file">
          <FormInputFile 
            userObjectResponse={userObjectResponse}
            subjectMail={subjectMail}
            messageMail={messageMail}/>
        </div>
      </div>
      
    </div>
  )
}

export default PageInputFile;