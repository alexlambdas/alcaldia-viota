import React from "react";

function NextButton(props){

  const {enable} = props;

  const buildButtonNext = () => {
    let button = enable === true ? (
      <div className="btn_next">Siguiente</div>
    ) : (
      <div className="btn_next_disable">Siguiente</div>
    )
    return button;
  }
  
  return(buildButtonNext())
}

export default NextButton;