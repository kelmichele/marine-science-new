import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripTidal2.png";

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

const pageTitle ="Saltwater Marsh and Tidal Pools 2";
// Saltwater Marsh and Tidal Pools 2: 30.2328, -87.9608

const marshTidal2 = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="During this adventure, participants use seines, suction guns, shaker boxes, and plankton nets to collect water samples for testing." />
      </Helmet>

      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.5749772475199!2d-87.96189434186829!3d30.23279999545357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEzJzU4LjEiTiA4N8KwNTcnMzguOSJX!5e0!3m2!1sen!2sus!4v1560262329982!5m2!1sen!2sus"
        mapTitle="Second Saltwater Marsh and Tidal Pool Field Trip Location"
        pageTitle={pageTitle}
        directions="https://www.google.com/maps/dir/30.2952695,-87.6286055/30.2328,-87.9608/@30.2416445,-87.9796539,13.18z/data=!4m12!1m7!3m6!1s0x0:0x0!2zMzDCsDEzJzU4LjEiTiA4N8KwNTcnMzguOSJX!3b1!8m2!3d30.2328!4d-87.9608!4m3!1m1!4e1!1m0"
        // address="3255 Fort Morgan Road"
        intersection="30.2328, -87.9608"
        phone=""
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Group of students sifting through marsh waters"
      />
    </div>
  );
};

export default marshTidal2;
