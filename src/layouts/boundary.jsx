import * as React from "react";

import * as Sentry from "@sentry/browser";

export class ErrorBoundary extends React.Component {
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div onClick={() => Sentry.showReportDialog()}>
          Report Feedback
        </div>
      );
    }
    return this.props.children;
  }
}
