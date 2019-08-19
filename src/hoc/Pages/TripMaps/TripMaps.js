import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TripMaps.module.scss";
import ImgGrid from "../../../components/ImgGrid/ImgGrid"
import alAlley from "../../../assets/images/partnersAA.png";
import avMusem from "../../../assets/images/TripNam.jpg";
import tidal1 from "../../../assets/images/TripEst.jpg";
import ftMorgan from "../../../assets/images/TripFm.jpg";
import natureCenter from "../../../assets/images/TripNc.jpg";
import wildlifeRef from "../../../assets/images/partnersNWR.png";
import bsMaritime from "../../../assets/images/TripNwr.jpg";
import tidal2 from "../../../assets/images/TripTidal2.png";
import claude from "../../../assets/images/TripCp.jpg";
// import gsbr from "../../../assets/images/partnersGSBR.jpg";
import gsbr from "../../../assets/images/gsbr/gsbrExt3.jpg";


// Bon Secour National Wildlife Refuge—Beach (On our current site)
// Alligator Alley (On our current site)
// Saltwater Marsh and Tidal Pools 1: (On our current site listed as estuary)
// Fort Morgan State Historic Site (One our current site)
// NATURE CENTER? Gulf State Park (On our current site)
// Naval Aviation Museum (On our current site)

// NEW ADDITIONS -- CHANGE ESTUARIES??
// Bon Secour National Wildlife Refuge — Maritime Forest: 30.2479, -87.8292 ?? Map shows 2 different spots
// Saltwater Marsh and Tidal Pools 2: 30.2328, -87.9608
// Claude Peteet Mariculture Center: 30.2828, -87.6654 (999 Commerce Loop)
// Gulf Shores Beach Retreat: 30.2447, -87.7129

  const tripMaps = () => {
    const ilItems = [
      { id: 1, name: 'Alligator Alley', link: "/alligator-alley", image: [alAlley], ListId: "alley", alt: "Alligators enjoying the farm"},
      { id: 2, name: 'Bon Secour National Wildlife Refuge', link: "/bon-secour-nwr", image: [wildlifeRef], ListId: "refuge", alt: "Dr. Simpson with students at the National Wildlife Refuge sign"},
      { id: 3, name: 'Bon Secour National Wildlife Maritime Forest', link: "/bon-secour-maritime", image: [bsMaritime], ListId: "maritime", alt: "Trees and plants inside the Bon Secour Maritime Forest"},
      { id: 4, name: 'Claude Peteet Mariculture Center', link: "/claude-peteet-center", image: [claude], ListId: "claude", alt: "Students walking around the Claude Peteet Mariculture Center"},
      { id: 5, name: 'Fort Morgan Historical Site', link: "/ft-morgan", image: [ftMorgan], ListId: "fort", alt: "Aerial view of Ft. Morgan site"},
      { id: 6, name: 'Gulf Shores Beach Retreat', link: "/accommodations", image: [gsbr], ListId: "gsbr", alt: "Gulf Shores Beach Retreat"},
      { id: 7, name: 'Nature Center', link: "/nature-center", image: [natureCenter], alt: "Banks of the Lagoon in Gulf Shores"},
      { id: 8, name: 'National Naval Aviation Museum', link: "/naval-aviation-museum", image: [avMusem], ListId: "naval", alt: "Blue Angels Aircraft"},
      { id: 9, name: 'Saltwater Marsh and Tidal Pools 1', link: "/marsh-tidal-pools1", image: [tidal1], ListId: "tidal1", alt: "Students wading through the marsh"},
      { id: 10, name: 'Saltwater Marsh and Tidal Pools 2', link: "/marsh-tidal-pools2", image: [tidal2], ListId: "tidal2", alt: "Group of students sifting through marsh waters" },
      // should we have a page for GSBR here, or just link to facility page?
    ];

    return (
      <div className={classes.TripMaps}>       
        <Helmet>
          <title>The Marine Science Field Trips</title>
          <meta name="description" content="The Marine Science Adventures field trip is made up of several educational trips including observing 8 different ecosystems, a trip to Alligator Alley, and a visit to the Ft. Morgan Historical Site." />
        </Helmet>
        <div className={classes.SimpleTop}>
          <h1>Field Trip Maps</h1>
          <p>Select a trip from the options below for details and directions.</p>
        </div>
        
        <div className={classes.med2Def}>
          <ImgGrid ilItems={ilItems} respStyle="longer" />
        </div>
      </div>
    );  
  };

  export default tripMaps;