import React from "react";
import FormInputFile from "./FormInputFile";
import FormValidateFile from "./FormValidateFile";
import FormSendFile from "./FormSendFile";

function Mailing(){
  return(
    <div className="container_mailing">
      <div className="container_mailing_forms">
        <FormInputFile />
        <FormSendFile />
      </div>
    </div>
  )
}

export default Mailing;