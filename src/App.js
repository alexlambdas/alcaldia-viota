import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from "./Components/NormalComponents/PageLogin";
import PageSubject from "./Components/NormalComponents/PageSubject";
import PageMessage from "./Components/NormalComponents/PageMessage";
import PageIntro from "./Components/NormalComponents/PageIntro";
import PageInputFile from "./Components/NormalComponents/PageInputFile";
import PageSuccess from "./Components/NormalComponents/PageSuccess";

import {ROUTES} from "./Resources/ReactRoutes";
import "./styles.css";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userObjectResponse, setUserObjectResponse] = useState({});
  const [subjectMail, setSubjectMail] = useState("");
  const [messageMail, setMessageMail] = useState("");

  const fnSetUserResponse = (user) => {
    /*console.log(user);*/
    setUserObjectResponse(user);
  }

  const fnSetLogin = (login) => {
    setIsLogin(login);
  }

  const fnSetSubjectMail = (subject) => {
    /*console.log(subject);*/
    setSubjectMail(subject);
  }

  const fnSetMessageMail = (message) => {
    /*console.log(message);*/
    setMessageMail(message);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route 
            path={ROUTES.ROUTE_FORM_SUCCESS} 
            render={() => {
              return(
                <PageSuccess 
                  isLogin={isLogin}
                  fnSetLogin={fnSetLogin}/>
              )
            }}/>
          <Route 
            path={ROUTES.ROUTE_MESSAGE_MAIL} 
            render={() => {
              return(
                <PageMessage 
                  isLogin={isLogin}
                  fnSetLogin={fnSetLogin}
                  fnSetMessageMail={fnSetMessageMail}/>
              )
            }}/>
          <Route 
            path={ROUTES.ROUTE_SUBJECT_MAIL} 
            render={() => {
              return(
                <PageSubject 
                  isLogin={isLogin}
                  fnSetLogin={fnSetLogin}
                  fnSetSubjectMail={fnSetSubjectMail}/>
              )
            }}/>
          <Route 
            path={ROUTES.ROUTE_INPUT_FILE} 
            render={() => {
              return(
                <PageInputFile 
                  isLogin={isLogin}
                  fnSetLogin={fnSetLogin}
                  userObjectResponse={userObjectResponse}
                  subjectMail={subjectMail}
                  messageMail={messageMail}/>
              )
            }}/>
          <Route 
            path={ROUTES.ROUTE_INTRO} 
            render={() => {
              return(
                <PageIntro 
                  isLogin={isLogin}
                  fnSetLogin={fnSetLogin}/>
              )
            }}/>
          <Route 
            path={ROUTES.ROUTE_LOGIN}
            render={() => {
              return(
                <PageLogin
                  isLogin={isLogin}
                  fnSetUserResponse={fnSetUserResponse}
                  fnSetLogin={fnSetLogin}/>
              )
            }}/>
          <Route exact path="/">
            <Redirect to="/alcaldia-viota/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
