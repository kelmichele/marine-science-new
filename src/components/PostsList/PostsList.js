import React, { Component } from "react";
import classes from "../../App.module.scss";

class PostsList extends Component {
  render() {
    return (
      <div className={classes.med2Def}>
        <div id="dib-posts" className={classes.blogCaller}></div>
      </div>
    );
  }
}
export default PostsList;