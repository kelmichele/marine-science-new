import React from "react";
import { Helmet } from "react-helmet";
import classes from "./About.module.scss";
import timHill from "../../../assets/images/team-timHill.jpg";
import johnSimpson from "../../../assets/images/team-johnSimpson.png";
import donnaHill from "../../../assets/images/team-donnaHill.jpg";
import kimMiller from "../../../assets/images/team-kimMiller.png";
import suzannePendley from "../../../assets/images/team-suzannePendley.jpg";
import lisaAllen from "../../../assets/images/team-lisaAllen.jpg";
import evaPendley from "../../../assets/images/team-evaPendley.jpg";
import ryanTilman from "../../../assets/images/team-ryanTilman.jpg";
import elizabethStroh from "../../../assets/images/team-elizabethStroh.jpg";

const ourTeam = () => {
  return (
    <div className={classes.OurTeam}>
      <Helmet>
        <title>Meet the MSA Team</title>
        <meta name="description" content="The Marine Science Adventures team is made up of talented, educated individuals who share a passion for spreading knowledge about the Gulf Coast environment." />
      </Helmet>
      
      <div className={classes.SimpleTop}>
        <h1>Meet Our Team</h1>
      </div>
      
      <div className={classes.ImgGrid}>
        <div className={classes.med3Def}>
          <div className={classes.IgBox}>
            <img src={johnSimpson} alt="Dr. John Simpson, MSA Director" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Dr. John T. Simpson</h4>
              <p className={classes.teamDets}><span>MSA Director</span><br/>University of Alabama<br />
              Retired Biology Professor/<br/>Medical Technologist</p>
            </div>
            <img src={johnSimpson} alt="Dr. John Simpson, MSA Director" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>
        
          <div className={[classes.IgBox, classes.IgRight].join(' ')}>
            <img src={suzannePendley} alt="Suzanne Pendley, MSA Educator and Events Coordinator" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>SuzAnne Pendley</h4>
              <p className={classes.teamDets}><span>MSA Educator and Events Coordinator </span><br />Mississippi/Alabama Master Naturalist<br />
              Bon Secour National Wildlife Refuge/<br/>Share the Beach Volunteer</p>
            </div>
            <img src={suzannePendley} alt="Suzanne Pendley, MSA Educator and Events Coordinator" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>

          <div className={classes.IgBox}>
            <img src={evaPendley} alt="Eva Pendley, MSA Educator" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Eva Pendley</h4>
              <p className={classes.teamDets}><span>MSA Educator </span><br />Alabama Master Naturalist <br />
              Bon Secour National Wildlife Refuge/<br/>Share the Beach Volunteer</p>
            </div>
            <img src={evaPendley} alt="Eva Pendley, MSA Educator" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>

          <div className={[classes.IgBox, classes.IgRight].join(' ')}>
            <img src={kimMiller} alt="Kim Miller, MSA Biologist" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Kim Miller</h4>
              <p className={classes.teamDets}><span>MSA Biologist</span><br />University of South Alabama <br />
              Retired Biology Teacher/<br/>Medical Technologist</p>
            </div>
            <img src={kimMiller} alt="Kim Miller, MSA Biologist" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>

          <div className={classes.IgBox}>
            <img src={lisaAllen} alt="Lisa Allen, MSA Biologist" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Lisa Allen</h4>
              <p className={classes.teamDets}><span>MSA Biologist</span><br />University of South Alabama <br />
              Retired Educator/<br/>Former Director of Sea Sand &amp; Stars Science and Nature Center</p>
            </div>
            <img src={lisaAllen} alt="Lisa Allen, MSA Biologist" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>

          <div className={[classes.IgBox, classes.IgRight].join(' ')}>
            <img src={elizabethStroh} alt="Elizabeth Stroh, MSA Docent" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Elizabeth Stroh</h4>
              <p className={classes.teamDets}><span>MSA Docent</span><br />Retired USA and USMS Swim Coach <br />
              Share the Beach Volunteer<br />
              Beasley Sea Turtle Hospital Volunteer<br />
              Leonardo DiCaprio Foundation<br />
              Advocate and Disney Conservation Member</p>
            </div>
            <img src={elizabethStroh} alt="Elizabeth Stroh, MSA Docent" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>
          <div className={classes.clearfix} />

          <div className={classes.IgBox}>
            <img src={ryanTilman} alt="Ryan Tillman, MSA Biologist" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Ryan Tillman </h4>
              <p className={classes.teamDets}><span>MSA Biologist</span><br />University of Alabama at Birmingham<br />
              Research Biologist</p>
            </div>
            <img src={ryanTilman} alt="Ryan Tillman, MSA Biologist" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>

          <div className={[classes.IgBox, classes.IgRight].join(' ')}>
            <img src={donnaHill} alt="Donna Hill, MSA Administrator" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Donna Hill</h4>
              <p className={classes.teamDets}><span>MSA/Gulf Shores Beach Retreat Administrator </span><br />Montevallo/Auburn University </p>
            </div>
            <img src={donnaHill} alt="Donna Hill, MSA Administrator" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>
          <div className={classes.clearfix} />
          
          <div className={classes.IgBox}>
            <img src={timHill} alt="Tim Hill, MSA Administrator" className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
            <div className={classes.textBox}>
              <h4 className={classes.teamName}>Tim Hill</h4>
              <p className={classes.teamDets}><span>MSA/Gulf Shores Beach Retreat Owner</span><br />University of Alabama</p>
            </div>
            <img src={timHill} alt="Tim Hill, MSA Administrator" className={[classes.imgResponsive, classes.fwImg].join(' ')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourTeam;
