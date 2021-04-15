import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class RedirectAfterFBSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
    };
  }

  componentDidMount() {
    window.addEventListener("load", function (event) {
      window.close();
    });
  }

  /**
   * Renders login screen design
   */
  render() {
    return (
      <>
        <h3>Redirect</h3>
      </>
    );
  }
}

/**
 * Type of the props used in the component
 */
RedirectAfterFBSignIn.propTypes = {
  history: PropTypes.object,
};

export default connect(null, {})(RedirectAfterFBSignIn);
