import React from "react";
import Header from "./Header"

function Menu({onDarkMode, onCheck}) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={onCheck}
          onChange={onDarkMode}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
