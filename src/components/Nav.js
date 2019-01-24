import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ path, label }) {
  return (
    <li>
      <NavLink to={path} className="sidebar__link" activeClassName="active">
        {label}
      </NavLink>
    </li>
  );
}

export default Nav;
