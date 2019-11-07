import React from "react";

import userIcon from "../../assets/user.png";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>facebook.</h1>
      </div>

      <div className="perfil">
        <p>Meu perfil</p>
        <img src={userIcon} alt="icon" />
      </div>
    </div>
  );
}

export default Header;
