import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import classes from "./BookNow.module.scss";
import ColorCard from "../../../components/ColorCard/ColorCard";
import kcImage from "../../../assets/images/vidShot13.png";
import Modal from "../../../components/Modal/Modal";

const modalHd = (
  <span>Looking for more information?</span>
);

const modalInfo = (
  <div className={classes.mainModBod}>
    <p>Our field trip is for grades 3-12. Pricing varies based on group size, length of stay, and number of meals. 
      Contact us for specifics!</p>
    <a className={classes.bookLink} href="mailto: gsbeachretreat@gmail.com">gsbeachretreat@gmail.com</a>  
    <a className={[classes.bookLink, classes.right].join(' ')} href="tel: +12519488800">251-948-8800</a>
    
    <div className={classes.clearfix} /><div className={classes.spacer3} />
    <hr />
    <div className={classes.smallBox}>
      <h5>Other helpful pages:</h5>
      <Link to="/faqs" className={classes.msLink}>FAQ's</Link>
      <Link to="/our-facility" className={classes.msLink}>Our Facility</Link>
      <Link to="/what-to-bring" className={classes.msLink}>What to Bring</Link>
      <Link to="/trip-maps" className={classes.msLink}>Field Trip Maps</Link>
      <Link to="/mission-goals-objectives" className={classes.msLink}>Mission, Goals, &amp; Objectives</Link>
    </div>
  </div>
);

const kcTitle= (
  <h1>Book Your <br/> Adventure</h1>
);

const kcContent= (
  <div>
    <Modal ButtonText="Looking for more information?" custClass="absButton" ModalContent={modalInfo} ModalTitle={modalHd} mWidth="sWidth" />

    <div className={classes.bookStep}>
      <p className={classes.step}><span>Step 1:</span></p>
      <h3>Contact Donna to get started!</h3>
      <p>Donna will help to secure your dates, and offer any assistance you may need while completing your contract.
        <b> Once we have received your deposit and signed contract, your dates are officially reserved.</b> Hurry, we can fill up fast!
      </p>

      <div className={classes.bookInfo}>
        <a className={classes.bookLink} href="mailto: gsbeachretreat@gmail.com">gsbeachretreat@gmail.com</a>  
        <a className={classes.bookLink} href="tel: +12519488800">251-948-8800</a>
      </div>
      
    </div>

    <div className={classes.bookStep}>
      <p className={classes.step}><span>Step 2:</span></p>
      {/* <h3>Once your dates are reserved, we will contact you to customize your trip!</h3> */}
      <h3>Customize your adventure!</h3>
      <p>Once your dates are reserved, we will contact you with additional information and customization options.
        Let us know if there are any specific areas or terms you want your students to cover, or if you have a particular vision for the focus of the trip. 
        We prefer to give you the trip you want, not the trip we want.
      </p>
    </div>
  </div>
);

const bookNow = () => {
  return(
    <div className={classes.BookNow}>
      <Helmet>
        <title>Book Your Marine Science Adventure</title>
        <meta name="description" content="Contact us today to book a Marine Science Adventure that your students will never forget!" />
      </Helmet>
      
      <ColorCard kcTitle={kcTitle} kcImage={kcImage} kcContent={kcContent} Size="style2" />
    </div>
  );
};

export default bookNow;