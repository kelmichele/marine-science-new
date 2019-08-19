import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripCp.jpg";

const medInfo = (
  <div>
    <div className={classes.medBox}>
      <p><b>South Baldwin Urgent Care</b><br />
      101 E 15th Ave<br /> Gulf Shores, AL 36542<br />
      (251) 962-1250</p>
    </div>

    <div className={classes.medBox}>
      <p><b>Infirmary Immediate Care</b><br />
      1140 Gulf Shores<br /> Pkwy Gulf Shores, AL 36542<br />
      (251) 968-2273</p>
    </div>

    <div className={classes.medBox}>
      <p><b>South Baldwin Regional Medical Center</b><br />
      1613 N McKenzie St<br />Foley, AL 36535<br />
      (251) 949-3400</p>
    </div>

    <div className={classes.medBox}>
      <p><b>Walgreens</b><br />
      1421 Gulf Shores Pkwy<br />Gulf Shores, AL 36542<br />
      (251) 968-5946</p>
    </div>
  </div>
);

const pageTitle = "Claude Peteet Mariculture Center";
// Claude Peteet Mariculture Center: 30.2828, -87.6654 (999 Commerce Loop)
// Marine Resources Division?

const claudePeteet = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="Your students will love visiting the Claude Peteet Mariculture Center, and learning more about their research projects." />
      </Helmet>
      
        <Maps
          info="The Claude Peteet Mariculture Center is part of the Marine Resources Division."
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3955188056!2d-87.66758868478728!3d30.282799981796263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzU4LjEiTiA4N8KwMzknNTUuNCJX!5e0!3m2!1sen!2sus!4v1560263590957!5m2!1sen!2sus"
          mapTitle={pageTitle}
          pageTitle={pageTitle}
          directions="https://www.google.com/maps/dir/Current+Location/Claude%20Peteet%20Mariculture%20Center%2FMarine%20Resources%20Division,+999%20Commerce%20Loop,+Gulf%20Shores,+36542,+AL/@30.2830850000,-87.6650380000"
          address="999 Commerce Loop, Gulf Shores, Al 36542 "
          intersection="30.2828, -87.6654"
          phone="(251) 968-7576"
          medInfo={medInfo}
          TripImage={TripImage}
          imgAlt="Students walking through the Claude Peteet Mariculture Center"
        /> 
    </div>
  );
};

export default claudePeteet;
