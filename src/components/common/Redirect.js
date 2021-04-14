import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authenticate } from "../../actions/loginInAction";
import store from 'store'

class RedirectAfterFBSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
    };
  }

    // componentDidMount() {
    //   let uri02 = this.props.location.search;
    //   let token = ""
    //   token = this.getUrlParameter("code", uri02);
    //   if(token !== "") {
    //     store.set("fbToken", token)
    //   }
    //   window.addEventListener("load", function (event) {
    //         window.close();
    //     }, true);
    // }

    getUrlParameter = (e, uri) => {
      // eslint-disable-next-line
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(uri);
      return null === t ? null : decodeURIComponent(t[1].replace(/\+/g, " "));
    };

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
  authenticate: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { authenticate })(RedirectAfterFBSignIn);
