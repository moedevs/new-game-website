/* tslint:disable:max-line-length */
import * as React from "react";
import { Header } from "./header";

import "./bulma.scss";
import "./girls.scss";
import "./style.scss";
import "./github.scss";

export const Layout = ({ children }: { children: any }) =>
  <div>
    <Header/>
    <>{children}</>
  </div>;
