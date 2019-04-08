import * as React from "react";
import * as B from "bloomer";

import "./navbar.scss";
import { SearchBar } from "./searchbar";

export const Navbar = () =>
  <nav className="navbar dashboard-navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <B.Subtitle>/r/NewGame Dashboard</B.Subtitle>
      </div>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>;

