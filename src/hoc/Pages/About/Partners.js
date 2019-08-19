import React from "react";
import classes from "./About.module.scss";
import { Helmet } from "react-helmet";
import ImgGrid from "../../../components/ImgGrid/ImgGrid"
import partnersAA from "../../../assets/images/partnersAA.png"
import partnersACF from "../../../assets/images/partnersACF.jpg"
import partnersAMSTI from "../../../assets/images/partnersAMSTI.png"
import partnersCPC from "../../../assets/images/TripCp.jpg"
import partnersFM from "../../../assets/images/TripFm.jpg"
// import partnersGSBR from "../../../assets/images/partnersGSBR.jpg"
import partnersGSBR from "../../../assets/images/gsbr/gsbrExt3.jpg";
import partnersGSP from "../../../assets/images/partnersGSP.jpg"
import partnersNWR from "../../../assets/images/partnersNWR.png"
// import partnersOTG from "../../../assets/images/partnersOTG.jpg"
import partnersOTG from "../../../assets/images/partnersOTG2.jpg"
import partnersSTB from "../../../assets/images/partnersSTB.jpg"

const partners = () => {
  const ilItems = [
    { id: 1, name: 'Alabama Coastal Foundation', link: "https://www.joinacf.org/", image: [partnersACF], ListId: "acf", alt: "Beautiful beach in Gulf Shores"},
    { id: 2, name: 'Alligator Alley', link: "https://gatoralleyfarm.com/", image: [partnersAA], ListId: "alley", alt: "Alligators enjoying the farm"},
    { id: 3, name: 'AMSTI', link: "http://www.amsti.org/", image: [partnersAMSTI], ListId: "amsti", alt: "Dr. Simpson teaching a class"},
    { id: 4, name: 'Bon Secour Wildlife Refuge', link: "https://www.fws.gov/refuge/Bon_Secour/", image: [partnersNWR], ListId: "nwr", alt: "Dr. Simpson with students at the National Wildlife Refuge sign"},
    { id: 5, name: 'Claude Peteet Mariculture Center', link: "https://www.outdooralabama.com/mrd-fisheries-section/claude-peteet-mariculture-center", image: [partnersCPC], ListId: "claude", alt: "Students walking around the Claude Peteet Mariculture Center"},
    { id: 6, name: 'Fort Morgan Historical Site', link: "http://www.fort-morgan.org/", image: [partnersFM], ListId: "fort", alt: "Aerial view of Ft. Morgan site"},
    { id: 7, name: 'Gulf Shores Beach Retreat', link: "", image: [partnersGSBR], ListId: "gsbr", alt: "Gulf Shores Beach Retreat"},
    { id: 8, name: 'Gulf State Park', link: "https://www.alapark.com/gulf-state-park", image: [partnersGSP], ListId: "gsp", alt: "Dunes in Gulf State Park"},
    { id: 9, name: 'Share the Beach', link: "https://www.alabamaseaturtles.com/", image: [partnersSTB], ListId: "stb", alt: "Students learning about sea turtle nests"},
    { id: 10, name: 'Wildlife on the Go', link: "http://www.wildlifeonthego.com/", image: [partnersOTG], ListId: "otg", alt: "Crab on the beach"},
    // should we have a page for GSBR here, or just link to facility page?
  ];
    
  return (
    <div className={classes.Partners}>
      <Helmet>
        <title>Our Partners</title>
        <meta name="description" content="These are some of the groups/organizations with whom the Marine Science Adventures team loves working closely." />
      </Helmet>

      <div className={classes.SimpleTop}>
        <h1>Meet Our Partners</h1>
      </div>

      <div className={classes.med3Def}>
        <ImgGrid ilItems={ilItems} external="true" />
      </div>
    </div>
  );
};

export default partners;