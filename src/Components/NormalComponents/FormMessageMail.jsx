import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputPlusIcon from "./InputPlusIcon";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

import SvgIdCard from "../SvgComponents/IdCard";
import SvgMessage from "../../Img/SvgMessage.svg";
import { ROUTES } from "../../Resources/ReactRoutes";
import { CONST } from "../../Resources/Const";

function FormMessageMail(props){

  const {fnSetMessageMail} = props;

  const svgIdCard = <SvgIdCard width="60px" height="60px"/>

  const [inputUser, setInputUser] = useState("");

  const fnOnChangeSubject = (event) => {
    setInputUser(event.target.value);
  }

  const setMessage = () => {
    fnSetMessageMail(inputUser);
  }

  return(
    <div>
      <div className="container_form_message">
        <div>
          <img src={SvgMessage} alt="keyboard" width="100px" height="auto"/>
          <img src={SvgMessage} alt="keyboard" width="100px" height="auto"/>
        </div>
        <div>
          <div>2. Ingresa el mensaje de los correos</div>
          <div>
          <InputPlusIcon 
            iconInput={svgIdCard}
            placeHolderText="mensaje"
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
            to={ROUTES.ROUTE_SUBJECT_MAIL}>
            <BackButton />
          </Link>
          {
            inputUser.length <= 15 ? (
              <NextButton 
                enable={false}/>
            ) : (
              <Link 
                className="text_decoration"
                onClick={setMessage}
                to={ROUTES.ROUTE_INPUT_FILE}>
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

export default FormMessageMail;