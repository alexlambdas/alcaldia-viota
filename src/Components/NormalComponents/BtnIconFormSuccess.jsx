import React from "react";

function BtnIconFormSuccess(props){

  const {textButton, iconInput} = props;

  return(
    <div className="button_plus_icon">
      <span>{iconInput}</span>
      <button>{textButton}</button>
    </div>
  )
}

export default BtnIconFormSuccess;