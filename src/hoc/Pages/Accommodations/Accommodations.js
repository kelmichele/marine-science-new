import React from "react";
import { Helmet } from "react-helmet";
import classes from "./Accommodations.module.scss";
import phImage from "../../../assets/images/AboutGSBR.jpg";
import gsbr from "../../../assets/images/gsbr-logo.png";
import gallery1 from "../../../assets/images/gsbr/GSBR-3.jpg";
import gallery3 from "../../../assets/images/gsbr/GSBR-5.jpg";
import gallery4 from "../../../assets/images/gsbr/GSBR-6.jpg";
import gallery5 from "../../../assets/images/gsbr/GSBR-8.jpg";
import gallery6 from "../../../assets/images/gsbr/GSBR-11.jpg";
import gallery7 from "../../../assets/images/gsbr/GSBR-12.jpg";
import gallery8 from "../../../assets/images/gsbr/GSBR-13.jpg";
import gallery9 from "../../../assets/images/gsbr/GSBR-16.jpg";
import gallery14 from "../../../assets/images/gsbr/gsbrShot2.png";
import gallery15 from "../../../assets/images/gsbr/gsbrShot3.png";
import exterior1 from "../../../assets/images/gsbr/gsbrExt1.jpg";
import exterior2 from "../../../assets/images/gsbr/gsbrExt2.jpg";
import exterior3 from "../../../assets/images/gsbr/gsbrExt3.jpg";
import floorplan from "../../../assets/images/GSBRmap.jpg";
import gallery13 from "../../../assets/images/gsbr/gsbrShot1.png";
import gallery13m from "../../../assets/images/gsbr/gsbrShot1mob.png";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Maps from "../../../components/Maps/Maps";

const medInfo = (
  <div>
    <div className={classes.medBox}>
      <p><b>South Baldwin Urgent Care</b><br />
      101 E 15th Ave<br /> Gulf Shores, AL 36542<br />
      (251) 962-1250</p>
    </div>

    <div className={classes.medBox}>
      <p><b>Infirmary Immediate Care</b><br />
      1140 Gulf Shores<br /> Pkwy Gulf Shores, AL 36542<br />
      (251) 968-2273</p>
    </div>

    <div className={classes.medBox}>
      <p><b>South Baldwin Regional Medical Center</b><br />
      1613 N McKenzie St<br />Foley, AL 36535<br />
      (251) 949-3400</p>
    </div>

    <div className={classes.medBox}>
      <p><b>Walgreens</b><br />
      1421 Gulf Shores Pkwy<br />Gulf Shores, AL 36542<br />
      (251) 968-5946</p>
    </div>
  </div>
);


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
    <div className={classes.Accommodations}>
      <Helmet>
        <title>Gulf Shores Beach Retreat</title>
        <meta name="description" content="The Gulf Shores Beach Retreat has partnered with Marine Science Adventures to provide a private, safe, and fun facility for your school group to enjoy." />
      </Helmet>
      
      <div className={classes.APtop}>
        <div className={classes.med2Def}>
          <div className={classes.APTleft}>
            <h1 className={classes.visuallyHidden}>Gulf Shores Beach Retreat</h1>
            <img src={gsbr} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Logo" />
          </div>
          
          <div className={classes.APTright}>
            <p>
              The Gulf Shores Beach Retreat has partnered with Marine Science Adventures to provide the perfect facility for your school group!
              It is <b>safe, fun,</b> and provides an amazing atmosphere for all ages. 
              Students, parents, and principals all love staying at our retreat center.
            </p>
            <p>The Gulf Shores Beach Retreat is the best place for your students to stay while on the learning adventure of a life time!</p>
          </div>    
        </div>
      </div>
   
      <AppBar position="static" className={classes.tabHD}>
        <Tabs className={classes.tabWrap} value={value} onChange={handleChange} indicatorColor="border" centered>
          <Tab className={classes.tabName} label="Details" />
          <Tab className={classes.tabName} label="Floor Plans" />
          <Tab className={classes.tabName} label="Location" />
        </Tabs>
      </AppBar>
    
      {value === 0 && <TabContainer>
        <div id="lodging" className={classes.APlodge}>
          <div className={classes.APLtop}>
            <div className={classes.inside}>
              <img src={phImage} className={classes.ImgLarge} alt="Gulf Shores Beach Retreat, exterior" />
              
              <div className={classes.APLtext}>
                <h5 className={classes.foc}>The Gulf Shores Beach Retreat is a <b>private</b> facility. </h5>
                <p>Only approved groups are allowed lodging at our retreat center, and we keep each group separate. 
                  <span> So no one outside of your group will have access to your students or lodging area. </span>
                  Parents and principals love this set-up! 
                  <span> Facility owners also live on-site,</span> and are constantly maintaining a <span>safe environment. </span>
                </p>
              </div>
            </div>
          </div>
          
          <div className={classes.med2Def}>
            <div className={classes.TtextL}>
              <p><b> The only time your students will leave our facility is when they are on staff supervised learning experiences. </b>
              Meals are eaten in our dining hall. Classroom meetings are held in our classroom space. 
              </p>
              
              <p>
                Students love all of the recreational opportunities they have when they aren’t busy learning. 
                Teachers love our facility because they don’t have to organize activities to keep the students entertained.
                
                When your group has some down time, they are having fun at the retreat where you can see them. 
                Teachers and chaperones can easily monitor their group while relaxing poolside. 
                They don't have to worry about their students getting into trouble off-campus, or disturbing others. 
              </p>
              
              {/* <a href="http://www.gulfshoresbeachretreat.com/" target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.center].join(' ')}>
              Visit Website</a> */}
              
            </div>
            
            <div className={classes.TtextR}>
              <p>In addition to your private lodging area, you will also have your own:</p>
              <ul>
                <li>Commercial Kitchen</li>
                <li>Pool</li>
                <li>Sand Volleyball Court</li>
                <li>Basketball Goal</li>
              </ul>
              <a href="http://www.gulfshoresbeachretreat.com/" target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.class].join(' ')}>
              Visit Website</a>
            </div>                
          </div>
       
          <div className={[classes.photoGall, ["uk-grid"]].join(' ')} uk-lightbox="animation: slide;">
            <div className={classes.insideXl} style={{ paddingLeft: '0'}}>
              <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="center: true; autoplay: true; autoplay-interval:4000">
                <ul className="uk-slider-items">
                  <li className={classes.photoLI}>
                    <a href={exterior1} data-caption="Gulf Shores Beach Retreat Pool Area">
                      <img src={exterior1} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Pool Area" />
                    </a>
                  </li>
                  <li className={classes.photoLI}><a href={exterior2} data-caption="Gulf Shores Beach Retreat Pool and Lounging Area"><img src={exterior2} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Pool and Lounging Area" /></a></li>
                  <li className={classes.photoLI}><a href={exterior3} data-caption="Gulf Shores Beach Retreat Volleyball Court"><img src={exterior3} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Volleyball Court" /></a></li>
                  <li className={classes.photoLI}><a href={gallery14} data-caption="Gulf Shores Beach Retreat Aerial View"><img src={gallery14} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Aerial View" /></a></li>
                  <li className={classes.photoLI}><a href={gallery15} data-caption="Gulf Shores Beach Retreat Aerial View"><img src={gallery15} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Aerial View" /></a></li>
                  <li className={classes.photoLI}><a href={gallery3} data-caption="Gulf Shores Beach Retreat Commercial Kitchen"><img src={gallery3} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Commercial Kitchen" /></a></li>
                  <li className={classes.photoLI}><a href={gallery4} data-caption="Gulf Shores Beach Retreat Dining Area"><img src={gallery4} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Dining Area" /></a></li>
                  <li className={classes.photoLI}><a href={gallery5} data-caption="Gulf Shores Beach Retreat Kitchen Facilities"><img src={gallery5} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Kitchen Facilities" /></a></li>
                  <li className={classes.photoLI}><a href={gallery6} data-caption="Gulf Shores Beach Retreat Bunk Room"><img src={gallery6} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Bunk Room" /></a></li>
                  <li className={classes.photoLI}><a href={gallery7} data-caption="Gulf Shores Beach Retreat Bunk Room Sink"><img src={gallery7} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Bunk Room" /></a></li>
                  <li className={classes.photoLI}><a href={gallery8} data-caption="Gulf Shores Beach Retreat Bunk Room Showers"><img src={gallery8} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Bunk Room Showers" /></a></li>
                  <li className={classes.photoLI}><a href={gallery9} data-caption="Gulf Shores Beach Retreat Chaperone Room"><img src={gallery9} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Chaperone Room" /></a></li>
                  <li className={classes.photoLI}><a href={gallery1} data-caption="Gulf Shores Beach Retreat Meeting Room"><img src={gallery1} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat Meeting Room" /></a></li>
                </ul>

                <button type="button" className={["uk-position-center-left uk-position-small uk-hidden-hover", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-previous data-uk-slider-item="previous">
                  <span uk-icon="icon: chevron-left; ratio: 1.5"></span>
                </button>
                <button type="button" className={["uk-position-center-right uk-position-small uk-hidden-hover", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-next data-uk-slider-item="next">
                  <span uk-icon="icon: chevron-right; ratio: 1.5"></span>
                </button>
              
              </div>

            </div>
          </div>
        </div>    
      </TabContainer>}

      {value === 1 && <TabContainer>
        <div className={classes.floorplans}>
          
          <div className={classes.photoMap} data-uk-lightbox>
            <div className={classes.insideAlt}>
              <h4>Click on an image to view a larger version.</h4>
              <div className={classes.top}>
                <a className={[classes.inline, classes.left].join(' ')} href={floorplan} data-caption="Gulf Shores Beach Retreat Floor Plans"><img src={floorplan} className={classes.imgResponsive} alt="Gulf Shores Beach Retreat layout and floor plans" /></a>
                <a className={[classes.inline, classes.right].join(' ')} href={gallery13} data-caption="Gulf Shores Beach Retreat, Aerial View">
                  <img src={gallery13} className={[classes.imgResponsive, classes.fwv].join(' ')} alt="Gulf Shores Beach Retreat, Aerial View" />
                  <img src={gallery13m} className={[classes.imgResponsive, classes.mobv].join(' ')} alt="Gulf Shores Beach Retreat, Aerial View" />
                </a>
              </div>
            <div className={classes.clearfix} />
              
                <h4 className={classes.white}>
                {/* The Gulf Shores Beach Retreat is divided into 2 sides that sleep 80 people (160 total). Each side of the retreat has:*/}
                The Gulf Shores Beach Retreat is divided into 2 sides that sleep 80 people (160 total). Each side of the retreat has:
              </h4>
            </div>
          </div>
            
          <div className={classes.clearfix} />

          <div className={classes.APLtext}>
            <div className={classes.med2Def}>
              
              <div className={[classes.fpAccom, classes.one].join(' ')}>
                <ul>
                  <h5>4 bunk rooms</h5>
                  <li>2 downstairs bunk rooms - <span>sleep 16 each</span></li>
                  <li>2 upstairs bunk rooms - <span>sleep 20 each</span></li>
                  <li>Each bunk room has <span>2 showers, 2 toilets, and 3 sinks.</span></li>
                </ul>
                
                
                <h5>2 staff/leader rooms</h5>
                <p>Each staff/leader room connects to a bunk room, 
                  and has <span>a queen bed, a set of bunks, and a private bathroom.</span>
                </p>
              </div>
                
              <div className={[classes.fpAccom, classes.three].join(' ')}>
                <h5>Pool</h5>
                <h5>Sand Volleyball Court</h5>
                <h5>Basketball Goal</h5>
                <h5 className={classes.bmargin5}>A commercial kitchen</h5>
                <p>equipped with
                2 ovens, 2 microwaves, 
                2 refrigerators, 
                a stand up freezer, 
                toasters, pots, pans, plates, silverware, and picnic tables. 
                </p>
              </div>
            </div>
          </div> 
        </div>

      </TabContainer>}

      {value === 2 && <TabContainer>
        <div className={classes.ContactGSBR}>
            
            <Maps
              additional="GSBRpage"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55133.561682093605!2d-87.70566156619596!3d30.26992304086576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a1b4365701c83%3A0xd567f534901fe03!2sGulf+Shores+Beach+Retreat!5e0!3m2!1sen!2sus!4v1561480866967!5m2!1sen!2sus"
              mapTitle="Gulf Shores Beach Retreat Location"
              pageTitle="Gulf Shores Beach Retreat"
              directions="https://www.google.com/maps/dir/30.2953375,-87.6285738/gulf+shores+beach+retreat/@30.269923,-87.7056616,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x889a1b4365701c83:0xd567f534901fe03!2m2!1d-87.7129103!2d30.2449391"
              address="1054 West Beach Blvd, Gulf Shores, AL 36542"
              phone="(251) 948-8800"
              medInfo={medInfo}
              site="http://www.gulfshoresbeachretreat.com/"
              TripImage={exterior2}
              imgAlt="Gulf Shores Beach Retreat, pool area"
            />
            {/* <p><b>Email:</b> gsbeachretreat@gmail.com</p> */}
            
        </div>
      </TabContainer>}
    </div>
  );
}