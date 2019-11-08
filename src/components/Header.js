import React from "react";

import userIcon from "../assets/user.png";

function Header() {
  return (
    <div className="header">
      <div>
        <h1 className="til-facebook">facebook.</h1>
      </div>

      <div className="perfil">
        <p className="p-profile" >Meu perfil</p>
        <img className="img-profile" src={userIcon} alt="icon" />
      </div>
    </div>
  );
}

export default Header;
