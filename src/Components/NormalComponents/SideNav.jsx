import React from "react";
import SideNavItem from "./SideNavItem";
import { Link } from "react-router-dom";

import ImgGovCo from "../../Img/gov-co_300x100px.png";
import ImgSimbolo from "../../Img/alcaldia_simbolo_300x166px.png";
import SvgWebMail from "../SvgComponents/WebMail";
import SvgSmarthphoneMail from "../SvgComponents/SmarthphoneMail";
import SvgLogout from "../SvgComponents/Logout";
import SvgBackMesasge from "../SvgComponents/BackMessage";
import { ROUTES } from "../../Resources/ReactRoutes";
import { CONST } from "../../Resources/Const";

function SideNav(props){

  const {fnSetLogin} = props;

  return(
    <div className="container_side_nav">
      <div>
        <img 
          src={ImgGovCo} 
          alt=".gov.co"/>
      </div>
      <div>
          <img 
            src={ImgSimbolo} 
            alt="Alcaldia de Viota"/>
      </div>
      <div className="items_side_nav">
        <div>
          <span>Notificaciones masivas por</span>
        </div>
        <div>
          <Link 
            className="text_decoration"
            to={ROUTES.ROUTE_INTRO}>
            <SideNavItem 
              text="Página principal"
              icon={<SvgBackMesasge width="30px" height="30px" fill="white"/>}/>
          </Link>
        </div>
        <div>
          <Link 
            className="text_decoration"
            to={ROUTES.ROUTE_SUBJECT_MAIL}>
            <SideNavItem 
              text="Correo electronico"
              icon={<SvgWebMail width="30px" height="30px" fill="white"/>}/>
          </Link>
        </div>
        <div>
          <SideNavItem 
            text="Mensajes de texto"
            icon={<SvgSmarthphoneMail width="30px" height="30px" fill="white"/>}/>
        </div>
        <div>
          <SideNavItem 
            text="Salir"
            type={CONST.NAV_BTN_TYPE_LOGOUT}
            icon={<SvgLogout width="30px" height="30px" fill="white"/>}
            fnOnClick={fnSetLogin}/>
        </div>
      </div>
    </div>
  )
}

export default SideNav;