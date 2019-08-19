import React from "react";
import classes from "./Resources.module.scss";
import PageHeader from "../../../components/PageHeader/PageHeader"
import phImage from "../../../assets/images/classes15.jpg"
// import Video from "../../../components/Video/Video";

const promoting = () => {
  return (
    <div className={classes.Promoting}>
      <PageHeader phImage={phImage} pageTitle="Promoting" ovPacity="0" />

      <div className={classes.intro}>
        <div className={classes.med2Def}>
          <p>Use this page to help get your class prepared and excited for their Marine Science Adventures. <br />
          Before the end of the trip, you will receive a password to access our teacher resources page, specifically designed for our teachers
          to keep the lessons going after the trip is over.

          You will also receive a password for your field trip gallery, so you and your students can enjoy all of the photos and videos
          from your Marine Science Adventures.
          </p>
        </div>
      </div>
        
      <div className={classes.PromotingBody}>
        <div className={classes.med2Def}>
          <div className={classes.vidBox}>
            {/* <Video
              vidSrc="https://www.youtube.com/embed/T9SRak4pPKI?rel=0&autoplay&automute"
              // vidWidth="100%"
              // vidHeight="400"
              vbPadding="0"
            // vidWidthMob="80%"
            // vidHeightMob="350"
            /> */}

          </div>
          <div className={classes.clearfix} />
        
        </div>
      </div>

    </div>
  );
};

export default promoting;
