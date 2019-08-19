import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/partnersNWR.png";

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
const pageTitle="Bon Secour National Wildlife Refugee";

const bonSecourNWR = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="Your class will observe and discuss different kinds of wildlife during your Bon Secour National Wildlife Refugee visit." />
      </Helmet>
     
      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.2321876169462!2d-87.83358558478854!3d30.230454581814968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a1f348c6b5467%3A0x8e0f4ac324383cd0!2s464+Mobile+St%2C+Gulf+Shores%2C+AL+36542!5e0!3m2!1sen!2sus!4v1553188739309"
        mapTitle="Bon Secour National Wildlife Refugee Field Trip Location"
        pageTitle="Bon Secour National Wildlife Refugee"
        directions="https://www.google.com/maps/dir/30.2301976,-87.8313991/30.2301825,-87.8314128/@30.2305672,-87.8318619,18z"
        address="464 Mobile Street, Gulf Shores, AL 36542"
        intersection="Mobile Street and Mobile Street West"
        phone=""
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Dr. Simpson with students at the National Wildlife Refuge sign"        
      />
    </div>
  );
};

export default bonSecourNWR;
