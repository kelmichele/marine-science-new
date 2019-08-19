import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.scss";
import Aux from "../../hoc/Aux/Aux";

class NavigationItems extends Component {
  render() {
    return(
      <Aux>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink className={classes.MobTitle} to="#">About Us</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop, classes[this.props.dropType + "Drop"]].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/our-story">Our Story</NavLink></li>
              <li><NavLink to="/our-team">Our Team</NavLink></li>
              <li><NavLink to="/partners">Our Partners</NavLink></li>
            </ul>
          </div>
        </li>

        
        <li><NavLink to="/accommodations">Our Facility</NavLink></li>

        <li><NavLink className={classes.MobTitle} to="#">About the Trip</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop, classes[this.props.dropType + "Drop"]].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/book-now">Book Now</NavLink></li>
              {/* <li><NavLink to="/promoting">Promoting</NavLink></li> */}
              <li><NavLink to="/mission-goals-objectives">Mission, Goals, &amp; Objectives</NavLink></li>
              <li><NavLink to="/what-to-bring">What to Bring</NavLink></li>
              <li><NavLink to="/trip-maps">Field Trip Maps</NavLink></li>
              <li><NavLink to="/faqs">FAQ's</NavLink></li>
              <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink className={classes.MobTitle} to="#">Educational Details </NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop, classes[this.props.dropType + "Drop"]].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/educational-details">Alabama State Learning Standards</NavLink></li>
              <li><NavLink to="/teacher-resources">Teacher Resources</NavLink></li>
              <li><NavLink to="/professional-development-seminars">Professional Development Seminars</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink to="/contact">Contact</NavLink></li>

        <li><NavLink to="/blog">Blog</NavLink></li>
        {/* <li><a className={classes.Gsbr} href="http://gulfshoresbeachretreat.com" target="_blank" rel="noopener noreferrer">Gulf Shores Beach Retreat</a></li> */}
      </Aux>
    );
  }
}

export default NavigationItems;