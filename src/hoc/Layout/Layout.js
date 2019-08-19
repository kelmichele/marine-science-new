import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Aux from "../../hoc/Aux/Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className={classes.Layout}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;