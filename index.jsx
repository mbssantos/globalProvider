import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import GlobalStore from "./globalStore";

const GlobalProvider = props => (
  <Provider store={GlobalStore.getStore(props.reducers)}>
    { props.children }
  </Provider>
);

GlobalProvider.defaultProps = {
  reducers: null
};

GlobalProvider.propTypes = {
  reducers: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired
};

export default GlobalProvider;
