import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import Maps from "../../../components/Maps/Maps";
import TripImage from "../../../assets/images/partnersAA.png";

// https://www.youtube.com/watch?v=-y0Q39E-lAw
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
const pageTitle = "Alligator Alley";

const alligatorAlley = () => {
  return ( 
    <div className={classes.TripMaps}>
      <Helmet>
        <title>{pageTitle} Field Trip</title>
        <meta name="description" content="Your Marine Science Adventure includes a visit to Alligator Alley. Students, teachers and chaperones all love seeing the alligators in their natural habitat, and a brave few will even hold a baby gator." />
      </Helmet>

      <Maps
        mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13749.676190479167!2d-87.6997038!3d30.5091877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e70257e72ea8ae3!2sAlligator+Alley!5e0!3m2!1sen!2sus!4v1553188203964"
        mapTitle="Alligator Alley Field Trip Location"
        pageTitle="Alligator Alley"
        directions="https://www.google.com/maps/place/Alligator+Alley/@30.5091877,-87.6997038,15z/data=!4m5!3m4!1s0x0:0x3e70257e72ea8ae3!8m2!3d30.511756!4d-87.6994465"
        address="19500 Co Rd 71, Summerdale, AL 36580"
        intersection="Couch Plant Road and 71"
        phone="(251) 946-2483"
        medInfo={medInfo}
        TripImage={TripImage}
        imgAlt="Alligators enjoying the farm"
      />
    </div>
  );
};

export default alligatorAlley;
