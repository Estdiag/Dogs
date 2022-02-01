import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorOccurred: false };
  }
  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true });
  }
  render() {
    return this.state.errorOccurred ? <h1>not found</h1> : this.props.children;
  }
}
