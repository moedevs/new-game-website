import * as React from "react";
import * as B from "bloomer";

import "./navbar.scss";
import { toast, ToastContainer } from "react-toastify";

export const Navbar = () => {
  const popNotification = () => {
    toast("Whoops, that's not available yet, sorry!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      type: toast.TYPE.ERROR,
      closeOnClick: true,
    });
  };
  return (
    <B.Level className="dashboard-navbar" role="navigation" aria-label="main navigation" isMobile>
      <B.LevelLeft>
        <B.LevelItem>
          <p>You are not logged in</p>
        </B.LevelItem>
      </B.LevelLeft>
      <B.LevelRight>
        <B.LevelItem>
          <B.Button isColor="info" onClick={popNotification} disabled>
            <B.Icon className="fab fa-discord"/>
            <span>Login</span>
          </B.Button>
          <ToastContainer/>
        </B.LevelItem>
      </B.LevelRight>
    </B.Level>
  );
};
