import React from "react";
import { Helmet } from "react-helmet";
import classes from "./ProfessionalDevelopmentSeminars.module.scss";
import amsti from "../../../assets/images/amsti.png";
import phImage from "../../../assets/images/session.jpg";
import exPhoto from "../../../assets/images/PDStemp.jpg";
import exPhoto2 from "../../../assets/images/PDStemp2.jpg";
import gsbr from "../../../assets/images/AboutGSBR.jpg";
import { NavLink } from "react-router-dom";
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
    <div className={classes.ProfessionalDevelopmentSeminars}>
      <Helmet>
        <title>Professional Development Seminars</title>
        <meta name="description" content="Our Professional Development Seminar is a 3-day, hands-on trip that takes teachers into the field to experience the Gulf Coast in an unforgettable way." />
      </Helmet>

      <div className={classes.PDSPage}>
        <div className={classes.APtop}>
          <div className={classes.med2Def}>
            <div className={classes.APTleft}>
              <h1>Professional Development Seminars</h1>
            </div>
            
            <div className={classes.APTright}>
              <p>
                The <b>Professional Development Seminar</b> is a <b>3-day, 2-night trip</b> that takes teachers <b>out of the classroom</b> and <b>into 
                the field</b>, to <b>experience the Gulf Coast</b> in an <b>unforgettable</b> way. 
                
                We offer at least 2 seminars each year - usually one in the fall, and one in the spring. 
                <b> Teachers are awarded 14 CEU hours for completing the seminar.</b>
              </p>
            </div>
          </div>
        </div>
      
        <AppBar position="static" className={classes.tabHD}>
          <Tabs className={classes.tabWrap} value={value} onChange={handleChange} indicatorColor="border" centered>
            <Tab className={classes.tabName} label="Overview" />
            <Tab className={classes.tabName} label="Testimonials" />
            <Tab className={classes.tabName} label="Lodging" />
          </Tabs>
        </AppBar>
        
        {value === 0 && <TabContainer>
          <div id="overview" className={classes.APtwo}>
            <div className={classes.med2Def}>
              <div className={classes.AP2left}>
                <h4 className={classes.SecName}>Overview</h4>
                <p>
                  During the seminars, we go through 8 different eco-systems using tools such as seines and slurp guns. 
                  Throughout these excursions, both day and night, we typically collect between 75 and 125 different specimens!
                  Our hands-on approach gives you experience and knowledge to help teach about this environment. 
                  Be prepared to get wet and sandy!
                </p>

                <p className={classes.final}><b>Teachers will leave with a certificate of completion, 14 CEU hours, a preserved specimen collection for the classroom, 
                  and memories of an incredible experience!</b></p>
              </div>
              
              <div className={classes.AP2right}>    
                <div className={classes.imgBox}>
                  <img src={exPhoto2} className={[classes.imgResponsive, classes.img1].join(' ')} alt="MSA instructor looking at specimens in water" />
                  <img src={exPhoto} className={[classes.imgResponsive, classes.img2].join(' ')} alt="Teachers assessing specimens from plankton net" />
                  <img src={phImage} className={[classes.imgResponsive, classes.img3].join(' ')} alt="Dr. Simpson leading a Professional Development Seminar" />
                </div>  
              </div>
              <div className={classes.clearfix} />
              
              <div className={classes.fullSec}>
                <div className={classes.AP2leftB}>
                  <div className={[classes.IsImageRow, classes.inline].join(' ')}>
                    <img src={amsti} className={[classes.imgResponsive, classes.logo].join(' ')} alt="AMSTI logo" />
                  </div>
                </div>
                
                <div className={classes.AP2rightB}>
                  <p>Marine Science Adventures is a proud AMSTI Affiliate! It is a great relationship that continues to grow every year.</p>                  
                </div>
              </div>
            </div>
            
            <div className={classes.BookPDS}>
              <div className={classes.insideNrw}>
                <h5>RESERVE YOUR SPOT!</h5>
                <p>Reserve your spot for the next Professional Development Seminar 
                at The Gulf Shores Beach Retreat! Contact us for more information:</p>
                <a href="mailto:gsbeachretreat@gmail.com" className={classes.msLink}>gsbeachretreat@gmail.com</a>
              </div>
            </div>
          </div>
        </TabContainer>}
        
        {value === 1 && <TabContainer>
          <div className={classes.Testimonials}>
            <div className={classes.med2Def}>
              <h4 className={classes.SecName}>Testimonials</h4>
              
              <div className={classes.testiRow}>
                <p className={classes.TestiContent}>"Marine Science Adventures is an excellent workshop for teachers to learn about
                the investigations their students will take part in while visiting. 
                The staff is knowledgeable and easy to work with during the stay. The atmosphere is laid back and relaxing. 
                I left with a greater appreciation of all the various ecosystems in the area that we must work to protect and preserve."</p>
              
                <p className={classes.TestiContent}>
                  "What a great adventure! I had such a great time and learned so much. It was amazing to see all the different species that we were able to find.
                  Dr. Simpson, SuzAnne, Eva, Ryan, and Kim were fantastic! I enjoyed learning from them. They are all so knowledgeable and made it fun. 
                  Thanks so much for a wonderful PD experience! I can’t wait to bring students!"
                </p>
                
                <p className={classes.TestiContent}>"We came to Marine Science Adventures for a teacher professional development. 
                I had no idea how much I would learn and how much fun I would have! The staff was very knowledgeable, accommodating, and helpful. 
                This trip has made me very excited to bring my students and I can’t wait to share this amazing learning experience with them. 
                Thank you so much, Dr. Simpson and the rest of the staff. I will remember this trip forever!"</p>
              </div>
              
              <div className={classes.testiRow}>
                <p className={classes.TestiContent}>"Thank you to everyone here! It was awesome! I enjoyed the experience even though I could 
                not get in the water. I will never forget this teacher field trip and I am looking forward to bringing my gifted classes."</p>
                
                <p className={classes.TestiContent}>"What a PD! I can’t wait to bring my children here. 
                The staff were amazing and even I learned new things. 
                The hands-on activities will stick with the children for many years to come."</p>
              
                <p className={[classes.TestiContent, classes.focal].join(' ')}>"This was a great glimpse into what an exciting field trip my students could have."</p>
              
                <p className={classes.TestiContent}>"This was a very educational experience. I love how everything was hands on. 
                I know my students would fully enjoy this. The facility is nice and clean. 
                The staff was AMAZING! I cannot wait to bring a group! Thank you for making Science fun!"</p>
                                  
                <p className={classes.TestiContent}>
                  "<b>Facility</b> - clean.<br/>
                  <b>Staff</b> - friendly, patient, knowledgeable - if didn’t know the answer, found answer - willing to go above and beyond.<br/>
                  <b>Education perspective</b> - Knowledgeable. Willing to adjust/adapt to meet teachers goals/objectives-accommodate special needs." 
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
                    <p>Teachers attending the Professional Development Seminar stay at The Gulf Shores Beach Retreat. Meals are provided while at the facility, and you can enjoy our swimming pools, sand volleyball courts, and the beautiful Gulf of Mexico beaches on your down time.</p>
                    <div className={classes.clearfix} />
                    <div className={classes.spacer1} />
                    <NavLink to="/accommodations" className={[classes.msLink, classes.alt].join(' ')}>View Our Facility</NavLink>
                  </div>
                </div>
              </div>
            </div>
          
          </TabContainer>}
        
      </div>
    </div>
  );
}
