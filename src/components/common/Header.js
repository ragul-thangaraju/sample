import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { PATH } from "../../config/routes";
// import { logout } from "../../utils/Utility";
import { getAppSettings } from "../../actions/commonAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  state = {
    showNav: false,
    clientLogo: "",
  };

  componentDidMount = () => {
    this.props.getAppSettings((success, clientLogo) => {
      if (success) {
        this.setState({ clientLogo });
      }
    });
  };

  render() {
    return <div></div>;
  }
}

/**
 * Type of the props used in the component
 */
Header.propTypes = {
  getAppSettings: PropTypes.func,
};
export default connect(null, { getAppSettings })(Header);
