import React from "react";
import NavList from "components/NavList";

export default function Sidebar({ links }) {
  return (
    <div className="sidebar">
      <NavList links={links} />
    </div>
  );
}
