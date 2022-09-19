import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputPlusIcon from "./InputPlusIcon";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

import SvgKeyboard from "../../Img/SvgKeyboard.svg";
import SvgLogin from "../SvgComponents/Login";
import { ROUTES } from "../../Resources/ReactRoutes";
import { CONST } from "../../Resources/Const";

function FormSubjectMail(props){

  const {fnSetSubjectMail} = props;

  const svgLoginComponent = <SvgLogin width="60px" height="60px"/>

  const [inputUser, setInputUser] = useState("");

  const fnOnChangeSubject = (event) => {
    setInputUser(event.target.value);
  }

  const setSubject = () => {
    fnSetSubjectMail(inputUser);
  }

  return(
    <div>
      <div className="container_form_subject">
        <div>
          <img src={SvgKeyboard} alt="keyboard" width="100px" height="auto"/>
          <img src={SvgKeyboard} alt="keyboard" width="100px" height="auto"/>
        </div>
        <div>
          <div>1. Ingresa el asunto de los correos</div>
          <div>
          <InputPlusIcon 
            iconInput={svgLoginComponent}
            placeHolderText="asunto"
            type="input"
            value={inputUser}
            isDisabled=""
            fnOnChange={fnOnChangeSubject}
            typeApp={CONST.INPUT_TYPE_SUBJECT}/>
          </div>
        </div>
        <div>
          <Link 
            className="text_decoration"
            to={ROUTES.ROUTE_INTRO}>
            <BackButton />
          </Link>
          {
            inputUser.length <= 5 ? (
              <NextButton 
                enable={false}/>
            ) : (
              <Link 
                className="text_decoration"
                onClick={setSubject}
                to={ROUTES.ROUTE_MESSAGE_MAIL}>
                <NextButton 
                  enable={true}/>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FormSubjectMail;