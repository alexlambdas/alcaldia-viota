import React from "react";

function FormSendFile(props){

  const {icon} = props;

  return(
    <div className="container_form_send_file">
      <div>2. Enviar notificaciones masivas (csv).</div>
      <div>
        <span></span>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default FormSendFile;