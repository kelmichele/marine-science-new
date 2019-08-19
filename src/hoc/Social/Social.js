import React from "react";
import classes from "./Social.module.scss";

const social = (props) => {
  return (
    <ul className={[classes.Social, classes[props.Colors]].join(' ')}>
      <li><a href="https://www.facebook.com/marinescienceadventures/?fref=ts" target="_blank" rel="noopener noreferrer" className={classes.Fb}>
        <span aria-label="Marine Science Adventures Facebook Link" uk-icon="icon: facebook"></span>
      </a></li>

      <li><a href="https://www.instagram.com/marinescienceadventures/" target="_blank" rel="noopener noreferrer" className={classes.Ig}>
        <span aria-label="Marine Science Adventures Instagram Link" uk-icon="icon: instagram"></span>
      </a></li>

      <li><a href="https://www.youtube.com/channel/UC7EQctTWIDDh7B5wnGsjCwg" target="_blank" rel="noopener noreferrer" className={classes.Yt}>
        <span aria-label="Marine Science Adventures Youtube Link" uk-icon="icon: youtube"></span>
      </a></li>
    </ul>
  );
};

export default social;
