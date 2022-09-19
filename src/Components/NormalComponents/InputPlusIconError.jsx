import React from "react";

function InputPlusIconError(props){

  const {
    placeHolderText, 
    iconInput, 
    type, 
    value,
    isDisabled,
    fnOnChange
  } = props;

  const onChange = (event) => {
    fnOnChange(event);
  }

  return(
    <div className="input_plus_icon_error">
      <span>{iconInput}</span>
      <input 
        type={type}
        placeholder={placeHolderText}
        onChange={onChange}
        value={value}
        disable={isDisabled}/>
    </div>
  )
}

export default InputPlusIconError;