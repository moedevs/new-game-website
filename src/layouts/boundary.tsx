import * as React from "react";

import * as Sentry from "@sentry/browser";

export class ErrorBoundary extends React.Component {
  state = { error: null } as { error: Error };

  componentDidCatch(error: any, errorInfo: any) {
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
        <a onClick={() => Sentry.showReportDialog()}>
          Report Feedback
        </a>
      );
    }
    return this.props.children;
  }
}
