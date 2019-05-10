import * as React from "react";
import { Header } from "./header";
import * as Sentry from "@sentry/browser";
import { ErrorBoundary } from "./boundary";
import "./bulma.scss";
import "./style.scss";
import "./github.scss";

export const Layout = ({ children }) => {
  if (process.env.NODE_ENV === "production") {
    Sentry.init({ dsn: "https://7d23ee1165d84ce2bd7d4b0800f6f3aa@sentry.io/1260791" });
  }

  return (
    <>
      <Header/>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </>
  );
};
