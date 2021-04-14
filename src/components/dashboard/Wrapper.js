import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div>{children}</div>;
};

/**
 * Type of the props used in the component
 */
Wrapper.propTypes = {
  children: PropTypes.object,
};

export default Wrapper;
