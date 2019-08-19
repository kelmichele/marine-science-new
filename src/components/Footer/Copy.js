import React, { Component } from "react";
// import classes from './Footer.module.scss';


class Copy extends Component {
  render() {
    // return <div></div>;
    return <p>Copyright {(new Date().getFullYear())} Marine Science Adventures. All rights reserved.</p>
  }
}
export default Copy;