import * as React from "react";
import { Header } from "./header";
import * as Sentry from "@sentry/browser";

import "./bulma.scss";
import "./girls.scss";
import "./style.scss";
import "./github.scss";
import { ErrorBoundary } from "./boundary";

export const Layout = ({ children }) =>
  <div>
    <Header/>
    {Sentry.init({ dsn: "https://7d23ee1165d84ce2bd7d4b0800f6f3aa@sentry.io/1260791" })}
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  </div>;
