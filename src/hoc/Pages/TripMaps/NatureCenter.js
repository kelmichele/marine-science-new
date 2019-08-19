import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripNc.jpg";

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
const pageTitle = "Nature Center, Gulf State Park";

const natureCenter = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="The Nature Center is one of our favorite places to study a variety of different organisms while surrounded by beautiful scenery." />
      </Helmet>
    
      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.032096456863!2d-87.64382758487967!3d30.26466668180272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE1JzUyLjgiTiA4N8KwMzgnMjkuOSJX!5e0!3m2!1sen!2sus!4v1553189643445"
        mapTitle="Nature Center, Gulf State Park Field Trip Location"
        pageTitle={pageTitle}
        directions="https://www.google.com/maps/place/30%C2%B015'52.8%22N+87%C2%B038'29.9%22W/@30.264653,-87.6438417,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0?shorturl=1"
        address="Campground Road, Gulf Shores, Alabama 36542"
        intersection=""
        phone=""
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Banks of the Lagoon in Gulf Shores"
      />
    </div>
  );
};

export default natureCenter;
