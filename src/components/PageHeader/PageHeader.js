import React from "react";
import classes from "./PageHeader.module.scss";

const pageHeader = (props) => {
  return (
    <div
      className={[classes.PageHeader, classes[props.Pos], classes[props.Height]].join(' ')}

      style={{ backgroundImage: "url(" + props.phImage + ")" }}
    >
      <div className={classes.Overlay} style={{ opacity: props.ovPacity }}></div>
      <h1 className={props.Color === "white" ? classes.Light : classes.Dark}>{props.pageTitle}</h1>
    </div>
  );
}
pageHeader.defaultProps = {
  ovPacity: 0
};
export default pageHeader;
// const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
