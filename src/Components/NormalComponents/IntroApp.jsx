import React from "react";

import SvgInternet from "../../Img/SvgInternet.svg";
import SvgMessage from "../../Img/SvgMessage.svg";

function IntroApp(){
  return(
    <div className="container_form_intro_app">
      <div>
        <img src={SvgMessage} alt="laptop" width="100px" height="auto"/>
        <img src={SvgInternet} alt="upload file" width="100px" height="auto"/>
      </div>
      <div>
        <div>Sistema de envio masivo de información</div>
        <div>
          Aplicación que permite gestionar Notificaciones
          masivas enviadas a personas de interes
          relacionadas al municio de <span>Viotá/Cundinamarca. </span>
          Se pueden enviar notificaciones por medio de correos
          electrónicos y mensajes de texto dirigidos a los
          dispositivos móviles.
          <br/>
        </div>
      </div>
    </div>
  )
}

export default IntroApp;