import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.svg"

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <Link className="navbar-brand" href="/">
        <div className="d-flex align-items-center">
          <img src={logo} height="35" class="d-inline-block align-top" alt="Project Manager" />
          <h1 className="brand-name ml-2">Project Manager</h1>
        </div>
      </Link>
    </nav>
  );
};

export default HeaderNav;
