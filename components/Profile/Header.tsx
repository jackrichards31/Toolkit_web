import React from "react";
import Theme from "../Home/Theme";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p>Manage your account settings and set e-mail preferences.</p>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Header;
