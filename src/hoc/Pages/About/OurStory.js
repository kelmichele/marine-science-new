import React from "react";
import { Helmet } from "react-helmet";
import classes from "./About.module.scss";
// import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import IsImage1 from "../../../assets/images/PHturtle.jpg";
import IsImage2 from "../../../assets/images/classes3.jpg";
import IsImage3 from "../../../assets/images/classes7.jpg";
import IsImage4 from "../../../assets/images/classes5.jpg";
import IsImage7 from "../../../assets/images/seineImg.jpg";
// import IsImage7 from "../../../assets/images/huddle.png";
import gsbr from "../../../assets/images/AboutGSBR.jpg";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default function SimpleTabs() {
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.OurStory}>
      <Helmet>
        <title>About Marine Science Adventures</title>
        <meta name="description" content="Marine Science Adventures is a comprehensive, hands-on field trip that teaches students in grades 3-12 about the Gulf Coast environment, and the ecosystems within." />
      </Helmet>
      
      <div className={classes.AboutPage}>
        <div className={classes.APtop}>
          <div className={classes.med2Def}>
            <div className={classes.APTleft}>
              <h1>Marine Science Adventures</h1>
            </div>
            
            <div className={classes.APTright}>
              <p>
                Marine Science Adventures was started in 2010 to spread knowledge about the incredible Gulf Coast environment
                and the ecosystems within. Our desire is to educate students and teachers about these rich and diverse eco-systems filled with awesome creatures, 
                and the important roles they play in the health of the Gulf of Mexico. 
                We do this through our experiential, hands-on field trip.
              </p>
              <p>Our comprehensive, 3-day, 2-night field trip is for grades 3-12, and covers 8 different marine eco-systems.
                We also study sea turtle nests, and visit Alligator Alley and the historic Fort Morgan.
              </p>
            </div>    
            
          </div>
        </div>
      
        {/* <div className={classes.root}> */}
          <AppBar position="static" className={classes.tabHD}>
            <Tabs className={classes.tabWrap} value={value} onChange={handleChange} indicatorColor="border" centered>
              <Tab className={classes.tabName} label="Overview" />
              <Tab className={classes.tabName} label="Instructors" />
              <Tab className={classes.tabName} label="Lodging" />
            </Tabs>
          </AppBar>
          
          
          {value === 0 && <TabContainer>
            <div id="overview" className={classes.APtwo}>
              <div className={classes.med2Def}>
                <div className={classes.AP2left}>
                  <h4 className={classes.SecName}>Overview</h4>
                  <p>
                    Each trip is designed to cover multiple courses of study, and meet the educational standards required at the appropriate 
                    grade level. Our curriculum covers from the 3rd grade through High School.

                    Below are some examples of the environments we cover.
                  </p>
                </div>
                
                <div className={classes.AP2right}>    
                  <div className={classes.imgBox}>
                    <img src={IsImage2} className={[classes.imgResponsive, classes.img1].join(' ')} alt="Coral from Marine Science Adventure lesson" />
                    <img src={IsImage3} className={[classes.imgResponsive, classes.img2].join(' ')} alt="Small fish from a Marine Science Adventure" />
                    <img src={IsImage4} className={[classes.imgResponsive, classes.img3].join(' ')} alt="Small organisms growing on branch" />
                  </div>  
                </div>
                
                <div className={classes.clearfix} />
                
                <div className={classes.AP2leftB}>
                  <ul>
                    <li>Intertidal and Splash Zones </li>
                    <li>The Lagoon and the Gulf</li>
                    <li>Estuaries</li>
                    <li>Bays</li>
                    <li>Salt-Water Marshes</li>
                    <li>Tidal Pools</li>
                    <li>Sand Dunes</li>
                    <li>Maritime Forests</li>
                  </ul>
                </div>
                
                <div className={classes.AP2rightB}>
                  <p>
                    We explore eco-systems by going into and through them, guided by our expert staff. 
                    We collect specimens using seine nets, suction guns, and plankton nets. 
                    Day and night seines reveal different specimens. Suction guns catch Ghost Shrimp and worms. 
                    Plankton nets reveal the smallest of our creatures. 
                    Students will end the field trip with a specimen collection for their classroom, a text book journal, t-shirt, bracelet, and class video.
                  </p>

                  <p>
                    We will visit/learn about Fort Morgan, and Alligator Alley.
                    We also incorporate community groups such as Share the Beach, Alabama's Sea Turtle Conservation Program. 
                    This group teaches the students how to identify sea turtle nests, dig them up, move their eggs and replant the nests, 
                    and stake them out for protection. 
                  </p>
                  <div className={classes.clearfix} />
                  <div className={classes.spacer1} />
                  <NavLink to="/mission-goals-objectives" className={classes.msLink}>View Mission, Goals, &amp; Objectives</NavLink>
                </div>
              </div>
            </div>
          </TabContainer>}
          
          {value === 1 && <TabContainer>
            <div id="instructor" className={classes.APinstr}>              
              <div className={classes.medDef}>
                {/* <div className={classes.APIleft}> */}
                <div className={classes.APIgridR}>
                  <h4 className={classes.SecName}>Instructors</h4>
                  <p>
                    Our experienced and talented staff use multiple teaching techniques to help students learn and understand this 
                    diverse environment. Students have a great time collecting specimens while learning how to use different tools in the field. 
                    Our students love this trip because everything is hands-on learning. 
                    Teachers love it because our staff handles all aspects of the trip. 
                    Principals and parents love this trip because it is safe and a great value.
                  </p>
                  <p>
                    {/* THIS NEEDS WORK */}
                    The trip is led by Dr. John Simpson, an expert marine biologist with more than 30 years of experience in the field.
                    Dr. Simpson has a passion and enthusiasm for educating students about the Gulf Coast environment and all of it’s mysteries and wonders.
                    Because of his vast experience educating students of all ages, elementary through college,
                    Dr. Simpson is able to connect our students and teach at the grade level required.
                  </p>
                  <div className={classes.clearfix} />
                  <div className={classes.spacer1} />
                  <NavLink to="/our-team" className={classes.msLink}>Meet Our Team</NavLink>
                </div>

                <div className={classes.APIgridL}><img src={IsImage7} className={classes.ImgSmall} alt="Dr. John Simpson with students" /></div>
                <div className={classes.clearfix} />
                <div className={classes.spacer4} />
                
                <div className={classes.APIgridRlong}>
                  <img src={IsImage1} className={classes.ImgSmall} alt="Students learning about Alabama's Sea Turtle Conservation" />
                </div>
                
                <div className={classes.APIgridLsm}>
                  <p>We also incorporate community groups such as Share the Beach, Alabama's Sea Turtle Conservation Program. 
                    This group teaches the students how to identify sea turtle nests, dig them up, move their eggs and replant the nests, 
                    and stake them out for protection. 
                  </p>
                </div>
              </div>
            </div>         
          </TabContainer>}
          
          {value === 2 && <TabContainer>
            <div id="lodging" className={classes.APlodge}>
              <div className={classes.APLtop}>
                <div className={classes.inside}>
                  <h4 className={classes.SecName}>The Gulf Shores Beach Retreat</h4>
                  <img src={gsbr} className={classes.ImgLarge} alt="Gulf Shores Beach Retreat, exterior" />
                  
                  <div className={classes.APLtext}>
                    <p>
                      The Gulf Shores Beach Retreat has partnered with Marine Science Adventures to provide an incredible experience your students
                      will love. This two-story, <span>private</span> facility is only steps away from our fabulous beaches, and perfect for student groups.
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.med3Def}>
                <div className={classes.TtextL}>
                  <p>
                    Because we only allow <b>approved groups</b> to stay here and we <b>don’t mix groups</b>, 
                    you can rest assured that your <b>students are safe</b> on our property.
                    Meals are provided at The Gulf Shores Beach Retreat, or prepared as a picnic for Fort Morgan.
                    When your students are not exploring the environment, they will have the opportunity to enjoy themselves on site
                    with our recreational opportunities, or take the boardwalk to The Gulf of Mexico.
                   </p>

                  <div className={classes.clearfix} />
                  <div className={classes.spacer1} />
                  <NavLink to="/accommodations" className={classes.msLink}>View Our Facility</NavLink>
                </div>
                
                <div className={classes.TtextR}>
                  <p>Your group will love our many amenities, such as:</p>
                  <ul>
                    <li>Private Pool</li>
                    <li>Sand Volleyball Court</li>
                    <li>Basketball Goal</li>
                    <li>Kitchen/Dining Area</li>
                  </ul>
                </div>                
              </div>
            </div>
          
          </TabContainer>}
        {/* </div> */}
      </div>
    </div>
  );
}