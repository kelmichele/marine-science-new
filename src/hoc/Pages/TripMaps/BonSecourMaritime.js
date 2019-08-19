import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/TripNwr.jpg";

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
const pageTitle="Bon Secour National Wildlife Refuge — Maritime Forest";
// Bon Secour National Wildlife Refuge — Maritime Forest: 30.2479, -87.8292 ?? Map shows 2 different spots

const bonSecourMaritime = () => {
  return (
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="During this adventure, participants hike through the Bon Secour Maritime Forest to observe and discuss coastal plants and animals in their natural habitat." />
      </Helmet>

      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11751.386982600987!2d-87.8367916510358!3d30.247408762762564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE0JzUyLjQiTiA4N8KwNDknNDUuMSJX!5e0!3m2!1sen!2sus!4v1560264385949!5m2!1sen!2sus"
        mapTitle="Bon Secour National Wildlife Refuge — Maritime Forest Trip Location"
        pageTitle="Bon Secour NWR Maritime Forest"
        directions="https://www.google.com/maps/dir/30.2952695,-87.6286055/AL-180,+Gulf+Shores,+AL+36542/@30.2543462,-87.8240812,14.31z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x889a18c4350769bf:0x255572a5ec6f324c!2m2!1d-87.829319!2d30.2479664"
        address=""
        intersection="30.2479, -87.8292"
        phone=""
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Trees and plants inside the Bon Secour Maritime Forest"
      />
    </div>
  );
};

export default bonSecourMaritime;
