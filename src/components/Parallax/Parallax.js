import React, { Component } from "react";
import classes from "./Parallax.module.scss";
// import PlaxContent from "./PlaxContent"
// import Aux from "../../hoc/Aux/Aux";


class Parallax extends Component {
  render() {
    return (
      <div
        className={[classes.Parallax, classes[this.props.plaxShadow], classes[this.props.plaxClass]].join(' ')}
        uk-parallax={this.props.bgy}
        style={{ backgroundImage: "url(" + this.props.plaxImage + ")" }}
      >
        {this.props.plaxContent}
        {/* {this.props.plaxContent} */}
      </div>
    );
  }
}
Parallax.defaultProps = {
  bgy: "bgy: -100"
};
export default Parallax;