import React from "react";
import {CONST} from "../../Resources/Const";

function SideNavItem(props){

  const {text, type, icon, fnOnClick} = props;

  const logout = () => {
    fnOnClick(false);
  }

  const buildNavItem = () => {
    let item;
    switch(type){
      case(CONST.NAV_BTN_TYPE_LOGOUT):{
        item = (
          <div 
              className="side_nav_item"
              onClick={logout}>
            <div>{icon}</div>
            <div>{text}</div>
          </div>
        )
        
        return item;
      }
      default: {
        item = (
          <div 
              className="side_nav_item">
            <div>{icon}</div>
            <div>{text}</div>
          </div>
        )
        return item;
      }
    }
  }

  return(
    buildNavItem()
  )
}

export default SideNavItem;