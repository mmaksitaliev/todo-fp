import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ path, label }) {
  return (
    <li>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
}
