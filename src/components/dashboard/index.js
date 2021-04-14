import React, { Component } from "react";
import PropTypes from "prop-types";
import Wrapper from "./Wrapper";
import { connect } from "react-redux";
import { authenticate } from "../../actions/loginInAction";
import { PATH } from "../../config/routes";
import { logout } from "../../utils/Utility";
// import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLoading: false,
      hasError: false,
      showLoginError: false,
    };
  }

  /**
   * Handles change
   */
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * Handles onClick Logout
   */
  onClickLogout = () => {
    logout();
    this.props.history.push(PATH.LOGIN);
  };

  /**
   * Renders login screen design
   */
  render() {
    return (
      <Wrapper>
        <>
          <h3>Dashboard</h3>
          <button onClick={() => this.onClickLogout()}>logout</button>
        </>
      </Wrapper>
    );
  }
}

/**
 * Type of the props used in the component
 */
Dashboard.propTypes = {
  authenticate: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { authenticate })(Dashboard);
