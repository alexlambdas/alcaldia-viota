import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

import SvgFinger from "../../Img/SvgFinger.svg";
import SvgAccept2 from "../../Img/SvgAccept2.svg";

import { ROUTES } from "../../Resources/ReactRoutes";

function FormSuccess(){
  return(
    <div className="container_form_success">
      <div>
        <img src={SvgFinger} alt="laptop" width="100px" height="auto"/>
        <img src={SvgAccept2} alt="upload file" width="100px" height="auto"/>
      </div>
      <div>
        <div>4. Proceso finalizado</div>
        <div>
          Se han enviado exitosamente los correos masivos
          <br/>
        </div>
      </div>
      <div>
        <Link 
          className="text_decoration"
          to={ROUTES.ROUTE_INTRO}>
            <BackButton />
        </Link>
      </div>
    </div>
  )
}

export default FormSuccess;