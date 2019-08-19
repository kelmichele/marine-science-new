import React from "react";
import classes from "./ImageText.scss";
import Aux from "../../hoc/Aux/Aux";

const imageText = (props) => {
  return (
    <Aux>
      <div className={[classes.ImageText, classes[props.textFloat]].join(' ')}>
        <div className={classes.ImageHlf}>
          <img src={props.image} className={classes.imgResponsive} alt={props.alt} />
        </div>

        <div className={classes.TextHlf}>
          {props.textContent}
        </div>
      </div>
    </Aux>
  );
}
export default imageText;