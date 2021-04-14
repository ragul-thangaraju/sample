import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";

export const Layout = (Content, ...propsMapping) => {
  class HOC extends Component {
    /**
     * Creates an instance of HOC.
     * @param {any} props
     * @memberof HOC
     */
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <React.Fragment>
          <Header />
          <Content {...this.props} />
        </React.Fragment>
      );
    }
  }

  return connect(...propsMapping)(HOC);
};
