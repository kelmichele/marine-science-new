import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripFm.jpg";

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

const pageTitle = "Fort Morgan Historical Site";

const ftMorgan = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="Your students will love visiting the historic Ft. Morgan, and soaking up both the scenery and the history." />
      </Helmet>
    
      <Maps
        info="Fort Morgan Historical Site is the location of a Civil War fort built to defend Mobile Bay."
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.265420531897!2d-88.02427398488052!3d30.2295066818154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a28af775bd9a1%3A0xd24c3fcd407b3ac3!2sFort+Morgan+State+Historic+Site!5e0!3m2!1sen!2sus!4v1553190090411"
        mapTitle="Fort Morgan Field Trip Location"
        pageTitle={pageTitle}
        directions="https://goo.gl/maps/QDTZCNquYJt"
        address="51 AL-180, Gulf Shores, AL 36542"
        intersection=""
        phone="(251) 540-5257"
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Aerial view of Ft. Morgan site"
      />
    </div>
  );
};

export default ftMorgan;