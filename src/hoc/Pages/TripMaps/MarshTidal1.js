import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripEst.jpg";

// originally ESTUARY -- 6/11
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

const pageTitle ="Saltwater Marsh and Tidal Pools 1";

const marshTidal1 = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="During this adventure, participants will trek through an area of marshes using seines, suction guns, shaker boxes and plankton nets." />
      </Helmet>

      <Maps
        info="These Saltwater Marsh and Tidal Pools are located on Fort Morgan Road in the Bon Secour Wildlife Refuge"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.1721598289373!2d-87.97229978488048!3d30.232166681814373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEzJzU1LjgiTiA4N8KwNTgnMTIuNCJX!5e0!3m2!1sen!2sus!4v1553189885684"
        mapTitle="Estuary Field Trip Location"
        pageTitle={pageTitle}
        directions="https://www.google.com/maps/dir///@30.2333283,-87.9684073,17z"
        address="3255 Fort Morgan Road, Gulf Shores, Al 36542"
        intersection="30.232174, -87.970124"
        phone=""
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Students wading through the marsh"
      />
    </div>
  );
};

export default marshTidal1;
