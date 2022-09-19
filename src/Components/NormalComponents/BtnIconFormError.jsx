import React from "react";

function BtnIconFormError(props){

  const {textButton, iconInput} = props;

  return(
    <div className="btn_plus_icon_fail">
      <span>{iconInput}</span>
      <button>{textButton}</button>
    </div>
  )
}

export default BtnIconFormError;