import React, { useState } from "react";
import Menu from "./Menu";

function Header({onDarkMode, darkMode}) {


  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu onDarkMode={onDarkMode} onCheck={darkMode ? true : false }/>
      </div>
    </div>
  );
}

export default Header;
