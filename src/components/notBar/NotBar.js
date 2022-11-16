import React from "react";
import DateHour from "./Date/Date";
// import NavBar from './NavBar/NavBar';
// import appleLogo from '../../asset/img/appleLogo.svg'
import whiteAppleLogo from "../../asset/img/appleLogo_white.svg";

import "./notBar.css";

export default function notBar() {
  return (
    <div className="notBar">
      <img src={whiteAppleLogo} alt="apple" className="appleLogo" />

      <div className="navbar-menu" id="navBarHighlight">
        Reminder
      </div>
      <div className="navbar-menu">File</div>
      <div className="navbar-menu">Edit</div>
      <div className="navbar-menu">View</div>
      <div className="navbar-menu">Go</div>
      <DateHour />
    </div>
  );
}
