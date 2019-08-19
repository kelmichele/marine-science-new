import React from 'react';
import classes from "./Video.module.scss";

const video = (props) => {
  return (
    <div className={[classes.videoBox, classes[props.vidClass]].join(' ')}>
      <props.frameName
        // width={props.vidWidth}
        // height={props.vidHeight}
        src={props.vidSrc}
        frameBorder="0"
        title="MAS intro"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        data-uk-responsive
        uk-video="automute: true; autoplay: inview;"
        className={classes.FullWidth}
        loop={true}
      />

      {/* <iframe
        width={props.vidWidthMob}
        height={props.vidHeightMob}
        src={props.vidSrc}
        frameBorder="0"
        title="MAS intro"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        data-uk-responsive
        uk-video="automute: true"
        className={classes.MobWidth}
      /> */}
    </div>
  );
};
video.defaultProps = {
  frameName: "iframe",
  Loop: "false"
};

export default video;
