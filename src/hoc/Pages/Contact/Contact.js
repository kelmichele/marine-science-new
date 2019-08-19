import React from 'react';
import { Helmet } from "react-helmet";
import classes from './Contact.module.scss';
import ColorCard from "../../../components/ColorCard/ColorCard";
import kcImage from "../../../assets/images/gsbr/gsbrExt2.jpg";
import Social from "../../Social/Social";

const kcTitle = (
  <h1>Get in<br/> Touch</h1>
);

const kcContent = (
  <div>
    <h2>Contact Information</h2>
    <div className={classes.ContactLeft}>
      <p><b>Email:</b> gsbeachretreat@gmail.com</p>

      <p><b>Office:</b> 251-948-8800<br />
        <b>Fax:</b> 877-640-4853</p>
    </div>

    <div className={classes.ContactRight}>
      <p><b>Mailing Address:</b> <br />
        PO Box 2309 <br />
        Gulf Shores, AL 36547</p>
      <Social Colors="color2" />  
    </div>
    
    <h2 className={classes.tmargin1}>Location Information</h2>
    <h3>Gulf Shores Beach Retreat</h3> 
    <p className={classes.tmargin0}>The Gulf Shores Beach Retreat, a bunk-style, private facility that can sleep up to 170 people,
      has partnered with Marine Science Adventures to provide an incredible experience your students will love!
    </p>
    
    <p><b>Address:</b><br />
      1054 West Beach Blvd <br />
      Gulf Shores, AL 36542 <br />
    </p>
    
    {/* <p><b>Directions:</b><br />From Highway 59, Turn Right at The Hangout onto West Beach Boulevard. We Are 1.5 Miles On The Right. </p> */}
    
    <div className={classes.spacer1} />
    <a href="http://www.gulfshoresbeachretreat.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={[classes.msLink, classes.inline, classes.alt].join(' ')}>
      Visit Website
    </a>

    <a href="https://www.google.com/maps/dir/30.2953375,-87.6285738/gulf+shores+beach+retreat/@30.2724047,-87.7053642,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x889a1b4365701c83:0xd567f534901fe03!2m2!1d-87.7129103!2d30.2449391"
      target="_blank" 
      rel="noopener noreferrer"
      className={[classes.msLink, classes.inline, classes.last].join(' ')}>
      Get Directions
    </a>
    {/* https://www.facebook.com/The-Gulf-Shores-Beach-Retreat-153592318061842/?fref=ts
    https://twitter.com/GSbeachretreat */}
  </div>
);

const contact = () => {
  return (
    <div className={classes.Contact}>
      <Helmet>
        <title>Contact Marine Science Adventures</title>
        <meta name="description" content="Contact the Marine Science Adventures facility, Gulf Shores Beach Retreat, for more information on booking a trip for your class." />
      </Helmet>


      <ColorCard kcTitle={kcTitle} kcContent={kcContent} kcImage={kcImage} />
    </div>
  );
};

export default contact;