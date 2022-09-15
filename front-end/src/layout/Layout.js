import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
 export default function Layout() {
  return (
    <div
      className="container-fluid bg-dark"
      style={{
        fontFamily: "Ariel",
        // backgroundColor: "#FFB93A",
        // backgroundColor: 
        color: "#FFB93A",
        height: "200vh",
        // width: "200vh"
      }}
    >
      <div className="row">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-10">
          <Routes />
        </div>
      </div>
    </div>
  );
}