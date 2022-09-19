import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import BackButton from "./BackButton";

import { ROUTES } from "../../Resources/ReactRoutes";
import { CONST } from "../../Resources/Const";

import SvgLaptop from "../../Img/SvgLaptop.svg";
import SvgFileUpload from "../../Img/SvgFileUpload.svg";
import SvgCancel from "../../Img/SvgCancel.svg";
import SvgAccept from "../../Img/SvgAccept.svg";

const styles = [
  {
    visibility: "hidden"
  },
  {
    cursor: "default",
    backgroundColor: "#757575",
    opacity: "0.6"
  }
]

function FormInputFile(props){

  const {subjectMail, messageMail} = props;

  const {userObjectResponse} = props;
  const [file, setFile] = useState(undefined);
  const [finishOk, setFinishOk] = useState(false);

  const onChange = (event) => {
    setFile(event.target.files[0])
  }

  const validateSenderMailing = (response) => {
    return new Promise((resolve, reject) => {
      if(response.status === 400) reject()
      else if(response.status === 401) reject()
      else if(response.status === 500) reject()
      else resolve(response.json())
    })
  }

  const setFinish = () => {
    setFinishOk(true);
  }

  const sendFile = () => {
    let token = userObjectResponse.logedUserSystem.token_userSystem;
    let formData = new FormData();
    formData.append('file', file);
    formData.append('subject_email', subjectMail);
    formData.append('message_email', messageMail);
    fetch(CONST.URL_API_SENDER, {
      method: 'POST',
      body: formData,
      headers: {
        'x-access-token': `${token}`
      }
    })
      .then(res => validateSenderMailing(res))
      .then(res => setFinish())
      .catch(err => console.log(err))
    
  }

  if(finishOk === true){
    return <Redirect to={ROUTES.ROUTE_FORM_SUCCESS} />
  }

  return(
    <div className="container_form_input_file">
      <div>
        <img src={SvgLaptop} alt="laptop" width="100px" height="auto"/>
        <img src={SvgFileUpload} alt="upload file" width="100px" height="auto"/>
      </div>
      <div>
        <div>3. Cargar/Subir un archivo</div>
        <div>
          Archivo separado por comas o (csv) que contiene los correos
          electrónicos y los mensajes para enviar de manerea masiva.
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="file" className="label_input_file">Cargar</label>
          <input 
            id="file" 
            type="file" 
            style={styles[0]}
            onChange={onChange}/>
        </div>
        {
            file === undefined ? (
              <div>
                <div>no hay ningun archivo cargado</div>
                <div>
                  <img 
                    src={SvgCancel} 
                    alt="cancel"
                    className="svg_cancel"/>
                </div>
              </div>
            ) : (
              <div>
                <div>se ha cargado el archivo correctamente</div>
                <div>
                  <img 
                    src={SvgAccept} 
                    alt="cancel"
                    className="svg_cancel"/>
                </div>
              </div>
            )
        }
      </div>
      {
        file === undefined ? (
          <div>
            <Link 
              className="text_decoration"
              to={ROUTES.ROUTE_MESSAGE_MAIL}>
                <BackButton />
            </Link>
            <button disabled style={styles[1]}>Enviar</button>
          </div>
        ) : (
          <div>
            <Link 
              className="text_decoration"
              to={ROUTES.ROUTE_MESSAGE_MAIL}>
                <BackButton />
            </Link>
            <button onClick={sendFile}>Enviar</button>
          </div>
        )
      } 
    </div>
  )
}

export default FormInputFile;