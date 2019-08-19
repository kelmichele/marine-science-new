import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripNam.jpg";

const medInfo = (
  <div>
    <div className={classes.medBox}>
      <p><b>Baptist Hospital</b><br />
      1000 West Moreno St.<br /> Pensacola, FL 32501<br />
      (850) 434-4011</p>
    </div>

    <div className={classes.medBox}>
      <p><b>WalMart Pharmacy </b><br />
      2951 S Blue Angel Pkwy<br /> Pensacola, FL 32506<br />
      (850) 458-5606 </p>
    </div>
      
    <div className={classes.medBox}>
      <p><b>Perdido Urgent Care </b><br />
      12385 Sorrento Rd<br /> Pensacola, FL 32507<br />
      (850) 466-8668</p>
    </div>
  </div>
);
const pageTitle = "Naval Aviation Museum";

const navalAviationMuseum = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="A visit to the world's largest Naval Aviation Musem is an awesome adventure for students, chaperones, and teachers." />
      </Helmet>

      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110177.51192101421!2d-87.3735542!3d30.3496071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890ba27d019af2d%3A0x54265e58849caee1!2sNaval+Aviation+Museum!5e0!3m2!1sen!2sus!4v1553187918527"
        mapTitle="Naval Aviation Museum Field Trip Location"
        pageTitle={pageTitle}
        directions="https://goo.gl/maps/CGePiFtmMQy"
        address="1750 Radford Blvd, Pensacola, FL 32506"
        intersection=""
        phone="(850) 452-3604"
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Blue Angels Aircraft"
      />
    </div>
  );
};

export default navalAviationMuseum;
