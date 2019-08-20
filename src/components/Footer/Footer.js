import React from 'react';
import classes from './Footer.module.scss';
import Social from "../../hoc/Social/Social";
import Copy from "./Copy";
import { NavLink } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";

const Menu1 = (
  <ul className={classes.footNav}>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
    <li><NavLink to="/accommodations">Our Facility</NavLink></li>
    <li><NavLink to="/our-story">Our Story</NavLink></li>
    <li><NavLink to="/our-team">Our Team</NavLink></li>
    <li><NavLink to="/partners">Our Partners</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
  </ul>
);

const Menu2 = (
  <ul className={classes.footNav}>
    <li><NavLink to="/book-now">Book Now</NavLink></li>
    <li><NavLink to="/mission-goals-objectives">Mission, Goals, &amp; Objectives</NavLink></li>
    <li><NavLink to="/what-to-bring">What to Bring</NavLink></li>
    <li><NavLink to="/trip-maps">Field Trip Maps</NavLink></li>
    <li><NavLink to="/faqs">FAQ's</NavLink></li>
    <li><NavLink to="/testimonials">Testimonials</NavLink></li>
  </ul>
);

const Menu3 = (
  <ul className={classes.footNav}>
    <li><NavLink to="/educational-details">Alabama State Learning Standards</NavLink></li>
    <li><NavLink to="/teacher-resources">Teacher Resources</NavLink></li>
    <li><NavLink to="/professional-development-seminars">Professional Development Seminars</NavLink></li>
  </ul>
);


const footer = () => {
  const ftAccItems = [
    {id: 101, title: 'About Us', content: [Menu1]},
    {id: 102, title: 'About the Trip', content: [Menu2]},
    {id: 103, title: 'Educational Details', content: [Menu3]},
  ];
  
  return (
    <div className={classes.Footer}>
      <div className={classes.TopFoot}>
        <div className={classes.med3Def}>
          <div className={classes.git}>
            <h4>Get in Touch</h4>
            
            <div className={classes.cLeft}>
              <p><b>Email:</b> gsbeachretreat@gmail.com</p>
              <p><b>Office:</b> 251-948-8800</p>
              <p><b>Fax:</b> 877-640-4853</p>
              <Social Colors="light" />  
            </div>
            
            <div className={classes.cRight}>          
              <p><b>Mailing Address:</b> <br />
              PO Box 2309 <br />
              Gulf Shores, AL 36547</p>
            </div>          
          </div>

          <div className={classes.gin}>
            <h4>Get Information</h4>          

            <Accordion accItems={ftAccItems} altClass="FtAcc" Shade="uk-light" />          
          </div>
        </div>
      </div>  
          
      <div className={classes.btmFoot}>
        <div className={classes.med3Def}>
          <div className={classes.copy}><Copy /></div>
          <div className={classes.hs}><p>Design by <a href="http://hsdesignhouse.com" target="_blank" rel="noopener noreferrer">High Seas Design House.</a></p></div>
        </div>
      </div>
    </div>
  );
};

export default footer;