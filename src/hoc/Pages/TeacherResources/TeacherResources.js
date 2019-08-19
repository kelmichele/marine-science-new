import React from "react";
import { Helmet } from "react-helmet";
import classes from "./TeacherResources.module.scss";
import InstResources from "../../../instructional-resources.pdf";
import marineEnviro from "../../../marine-environment.pdf";
import journal from "../../../MSAstudentJournal.pdf";
import brochure from "../../../MSAbrochure.pdf";
import turtleTotals from "../../../assets/images/turtleTotals.png";
import decomp from "../../../assets/images/decomp.png";
import ColorCard from "../../../components/ColorCard/ColorCard";
import kcImage from "../../../assets/images/trHeadBW.jpg";
import Accordion from "../../../components/Accordion/Accordion";

//  <style type="css">
//   .uk-lightbox.uk-open{{ opacity:'.5' }}
// </style> <div className={classes.clearfix} /><div className={classes.spacerBTN} />*/}
const dls = (
  <div className={[classes.resource].join(' ')}>
    <a href={brochure} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline].join(' ')}>MSA Brochure</a>
    <a href={InstResources} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline, classes.right].join(' ')}>Instructional Resources</a>
    <a href={marineEnviro} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline].join(' ')}>Marine Environment</a>
    <a href={journal} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline, classes.right].join(' ')}>Student Journal</a>
  </div>
);

const math = (
  <div className={[classes.math, ["uk-grid"]].join(' ')} uk-lightbox="animation: slide;">   
    <p>Use the following information to create math assignments for your students. 
    Click on an a graph to view the full image.</p>
    
    <div className={[classes.LPbox, classes.first].join(' ')}>
      <div className={classes.LPtext}>
        <h4>2015 Sea Turtle Statistics on the Alabama Gulf Coast</h4>
        <p><a href="http://www.alabamaseaturtles.com/nesting-season-statistics/" target="_blank" rel="noopener noreferrer" className={classes.textLink}>
        Click here </a> 
        to find sea turtle statistics from previous years.</p>
      </div>
        
      <a href={turtleTotals} data-caption="2015 Sea Turtle Statistics" className={classes.LPimg}>
        <img src={turtleTotals} className={classes.imgResponsive} alt="Sea Turtle Statistics" />
      </a>
    </div>
    
    <div className={[classes.LPbox, classes.last].join(' ')}>
      <div className={classes.LPtext}>
        <h4>The Time it Takes Various Trash<br/> to Decompose in the Gulf.</h4>
        <p>Information obtained from Alabama Marine Resources Division.</p>
      </div>
      <a href={decomp} data-caption="Decomposition Times for Various Items" className={classes.LPimg}>
        <img src={decomp} className={classes.imgResponsive} alt="Decomposition Information" />
      </a>
    </div>
  </div>
);

const comp = (
  <div className={classes.comp}>
    <p>We would like to include your students’ compositions about their Marine Science Adventures field trip 
      as a part of our blog. Blogs must be around 250 words, and can include up to three original photos and one 
      video that does not exceed 5 minutes. Please send us only those compositions that you deem worthy of publishing. 
      We reserve the right to post the composition.</p>
    <p><b>Please send blogs to: <a href="mailto: marinesciencesuz@gmail.com"> marinesciencesuz@gmail.com </a></b></p>
  </div>
);

const kcTitle = (
  <h1 className={classes.styleB}>Teacher Resources</h1>
);

const accItems = [
  {id: 1, title: 'Downloadable Resources', content: [dls], open: "uk-open"},
  {id: 2, title: 'Math Lesson Plans', content: [math]},
  {id: 3, title: 'Composition', content: [comp]}
];

const kcContent = (
  <div>
    <div className={classes.BtmRow}>
      <div className={classes.ciTop}>
        <h3>Contact John Simpson</h3>
        <p>251-609-3436<br />
        jsimpson549@yahoo.com</p>
      </div>
      
      <Accordion accItems={accItems} altClass="trAcc" />    
    </div>      
  </div>
);

const teacherResources = () => {
  return (
    <div className={classes.TeacherResources}>
      <Helmet>
        <title>Teacher Resources</title>
        <meta name="description" content="The Marine Science Adventures team uses our teacher resources to help keep the learning going even after the trip ends." />
      </Helmet>

      <ColorCard kcTitle={kcTitle} kcContent={kcContent} kcImage={kcImage} />
    </div>
  );
};
export default teacherResources;