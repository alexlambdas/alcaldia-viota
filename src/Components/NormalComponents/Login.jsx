import React, {useState} from "react";
import InputPlusIcon from "./InputPlusIcon";
import InputPlusIconError from "./InputPlusIconError";
import BtnIconFormSuccess from "./BtnIconFormSuccess";
import BtnIconFormError from "./BtnIconFormError";
import {Redirect} from "react-router-dom";

import SvgLogin from "../SvgComponents/Login";
import SvgUnlockComponent from "../SvgComponents/Unlock";
import SvgEnter from "../SvgComponents/Enter";

import { ROUTES } from "../../Resources/ReactRoutes";
import {CONST} from "../../Resources/Const";

function Login(props){

  const {isLogin, fnSetUserResponse, fnSetLogin} = props;

  let userRequest = {
    user_userSystem: "",
    pass_userSystem: ""
  }

  const svgLoginComponent = <SvgLogin width="60px" height="60px"/>
  const svgUnlockComponent = <SvgUnlockComponent width="60px" height="60px"/>
  const svgEnter = <SvgEnter width="60px" height="60px"/>

  const [userObjectRequest, setUserObjectRequest] = useState(userRequest);
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [failLogin, setFailLogin] = useState(false);
  
  const fnOnChangeUser = (event) => {
    let content = event.target.value;
    setInputUser(content);
    setUserObjectRequest({...userObjectRequest, user_userSystem: content});
  }

  const fnOnChangePass = (event) => {
    let content = event.target.value;
    setInputPass(content);
    setUserObjectRequest({...userObjectRequest, pass_userSystem: content});
  }

  const validateLogin = (response) => {
    return new Promise((resolve, reject) => {
      if(response.status === 400) reject()
      else if(response.status === 401) reject()
      else resolve(response.json())
    })
  }

  const objectResponse = (response) => {
    fnSetUserResponse(response);
    fnSetLogin(true);
  }

  const errorLogin = () => {
    setFailLogin(true);
  }

  const returnToPageLogin = (event) => {
    event.preventDefault();
    setInputUser("");
    setInputPass("");
    setUserObjectRequest(userRequest);
    setFailLogin(!failLogin);
  }

  const fnHandleLogin = (event) => {
    //console.log(CONST.URL_API_LOGIN);
    //console.log(userObjectRequest);
    event.preventDefault();
    fetch(CONST.URL_API_LOGIN, {
      method: CONST.METHOD_POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObjectRequest)
    })
      .then(res => validateLogin(res))
      .then(res => objectResponse(res))
      .catch(res => errorLogin())
  }

  

  if(isLogin === true){
    return <Redirect to={ROUTES.ROUTE_INTRO} />
  }

  return(
    
    <div>
      {
        failLogin === false ? (
          <div className="login">
            <div>
              <span>Login</span>
            </div>
            <div>
              <form onSubmit={fnHandleLogin}>
                <InputPlusIcon 
                  iconInput={svgLoginComponent}
                  placeHolderText="Ingrese usuario"
                  type="input"
                  value={inputUser}
                  isDisabled=""
                  fnOnChange={fnOnChangeUser}/>
                <InputPlusIcon 
                  iconInput={svgUnlockComponent}
                  placeHolderText="Ingrese contraseña"
                  type="password"
                  value={inputPass}
                  isDisabled=""
                  fnOnChange={fnOnChangePass}/>
                <BtnIconFormSuccess 
                  iconInput={svgEnter}
                  textButton="entrar"/>
              </form>
            </div>
          </div>
        ) : (
          <div className="fail_login">
            <div>
              <span>Error de Login</span>
            </div>
            <div>
              <form onSubmit={returnToPageLogin}>
                <InputPlusIconError 
                  iconInput={svgLoginComponent}
                  placeHolderText="Ingrese usuario"
                  type="input"
                  value=""
                  isDisabled={CONST.INPUT_DISABLE}
                  fnOnChange={fnOnChangeUser}/>
                <InputPlusIconError 
                  iconInput={svgUnlockComponent}
                  placeHolderText="Ingrese contraseña"
                  type="password"
                  value=""
                  isDisabled={CONST.INPUT_DISABLE}
                  fnOnChange={fnOnChangePass}/>
                <BtnIconFormError 
                  iconInput={svgEnter}
                  textButton="regresar"/>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Login;