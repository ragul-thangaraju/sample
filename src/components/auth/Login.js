import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { PATH } from "../../config/routes";
import { isEmptyString } from "../../utils/Validations";
import { isLoggedIn } from "../../utils/Utility";
import { authenticate } from "../../actions/loginInAction";
import FacebookButton from "../common/FbButton";

const regexp = /^\S*$/;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showLoading: false,
      hasError: false,
      showLoginError: false,
      showPassword: false,
    };
  }

  componentDidMount = () => {
    if (isLoggedIn()) {
      this.props.history.push(PATH.INDEX_PAGE);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value.trim("") });
  };
  /**
   * Handles onSubmit Login Form
   */
  onClickLogin = () => {
    const { email, password } = this.state;
    this.setState({ showLoginError: false });
    if (
      isEmptyString(email) ||
      isEmptyString(password) ||
      !regexp.test(email) ||
      !regexp.test(password)
    ) {
      this.setState({ hasError: true });
    } else {
      this.setState({ showLoading: true });
      this.props.authenticate(
        this.state.email.trim(),
        this.state.password.trim(),
        (result) => {
          console.log(result, "resultresultresultresult");
          this.setState({ showLoading: false });
          if (result) {
            this.props.history.push(PATH.INDEX_PAGE);
          } else {
            this.setState({ showLoginError: true });
          }
        }
      );
    }
  };

  /**
   * Renders login screen design
   */
  render() {
    const {
      email,
      password,
      hasError,
      showLoginError,
      showPassword,
    } = this.state;
    return (
      <>
        <h3>Login</h3>
        <p className="text-muted">
          Login to your account using your credentials
        </p>
        <div className="form-group">
          <label>Email</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e) => this.handleChange(e)}
              value={email}
            />
          </div>
          {hasError && (isEmptyString(email) || !regexp.test(email)) && (
            <div>
              <small className="text-danger">Enter valid email.</small>
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="input-group mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={(e) => this.handleChange(e)}
              value={password}
              onKeyPress={(event) => {
                if (event.key === "Enter") this.onClickLogin();
              }}
            />
            <div
              className="input-group-append"
              onClick={() =>
                this.setState({ showPassword: !this.state.showPassword })
              }
            >
              <span className="input-group-text bg-transparent">
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                />
              </span>
            </div>
          </div>
          {hasError && (isEmptyString(password) || !regexp.test(password)) && (
            <div>
              <small className="text-danger">Enter valid password.</small>
            </div>
          )}
        </div>
        {showLoginError && (
          <div>
            <small className="text-danger">Invalid email or password.</small>
          </div>
        )}
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-dark px-4"
            onClick={() => this.onClickLogin()}
            disabled={this.state.showLoading}
          >
            Login
            {/* {this.state.showLoading && <Spinner size='sm' className='ml-2 m-1' />} */}
          </button>
          <FacebookButton />
          {/* <Link to={PATH.FORGET_PASSWORD} className='align-self-center'>
							<small>Forgot Password?</small>
						</Link> */}
        </div>
      </>
    );
  }
}

/**
 * Type of the props used in the component
 */
Login.propTypes = {
  authenticate: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { authenticate })(Login);
