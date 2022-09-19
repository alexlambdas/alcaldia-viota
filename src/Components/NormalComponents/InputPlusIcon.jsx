import React from "react";
import {CONST} from "../../Resources/Const";

function InputPlusIcon(props){

  const {
    placeHolderText, 
    iconInput, 
    type, 
    value,
    isDisabled,
    fnOnChange,
    typeApp
  } = props;

  const styles = [
    {
      width: "350px"
    }
  ]

  const onChange = (event) => {
    fnOnChange(event);
  }

  return(
    <div className="input_plus_icon">
      <span>{iconInput}</span>
      {
        typeApp === CONST.INPUT_TYPE_SUBJECT ? (
          <input 
            type={type}
            placeholder={placeHolderText}
            onChange={onChange}
            value={value}
            disable={isDisabled}
            style={styles[0]}/>
        ) : (
          <input 
            type={type}
            placeholder={placeHolderText}
            onChange={onChange}
            value={value}
            disable={isDisabled}/>
        )
      }
    </div>
  )
}

export default InputPlusIcon;