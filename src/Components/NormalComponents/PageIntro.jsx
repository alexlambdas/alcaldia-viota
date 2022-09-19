import React from "react";
import SideNav from "./SideNav";
import IntroApp from "./IntroApp";
import HeaderNav from "./HeaderNav";
import {Redirect} from "react-router-dom";

import {ROUTES} from "../../Resources/ReactRoutes";

function PageIntro(props){

  const {isLogin, fnSetLogin} = props;

  if(isLogin === false){
    return <Redirect to={ROUTES.ROUTE_LOGIN} />
  }

  return(
    <div className="container_page_intro">
      <SideNav 
        fnSetLogin={fnSetLogin}/>
      <div>
        <div className="container_nav_header">
          <HeaderNav />
        </div>
        <div className="container_intro_app">
          <IntroApp />
        </div>
      </div>
    </div>
  )
}

export default PageIntro;