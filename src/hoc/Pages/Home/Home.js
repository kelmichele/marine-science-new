import React, { Component } from "react";
import classes from "./Home.module.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import Parallax from "../../../components/Parallax/Parallax";
import bg3 from "../../../assets/images/classes15.jpg";
import Video from "../../../components/Video/Video";
import stem from "../../../assets/images/stem.png";
import steam from "../../../assets/images/steam.png";
import stream from "../../../assets/images/stream.png";
import amsti from "../../../assets/images/amsti.png";
import video from "../../../assets/images/timelapse.MP4";
import introVideo from "../../../assets/images/msa-intro.mp4";
import Social from "../../../hoc/Social/Social";
import pl1 from "../../../assets/images/homePL2.png";
import pl7 from "../../../assets/images/plNew3.png";
import pl8 from "../../../assets/images/obj-lagoon.png";
import slideImg2 from "../../../assets/images/classGroup3.png";
import slideImg6 from "../../../assets/images/vidShot17.png";

// 8-12, 14,17

const plaxContent1 = (
  <div className={classes.IntroLax} uk-parallax="y: 85,20"> 
    <h1 className={classes.big}>Marine Science Adventures</h1>
    <h2 data-uk-parallax>
      Introducing students to the Marine Ecosystems,<br /> and the vital role they play in the earth’s survival.
    </h2>
    
    <Social Colors="Home" />
    <div className={classes.homeSpacer} />
    <Link className={[classes.msLink, classes.inline, classes.gradi].join(' ')} to="/book-now">Book Now!</Link>
  </div>
);

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Helmet>
          <title>Marine Science Adventures</title>
          <meta name="description" content="Marine Science Adventures is a 3-day, hands-on field trip where students in grades 3-12 explore the ecosystems along the Gulf Coast." />
        </Helmet>
      
        <div className={classes.SiteIntroVideo}>
           {/* uk-parallax="bgx: -150" */}
          {plaxContent1}
          <Video
            vidSrc={video}
            vidClass="homeLapse"
            frameName="video"
            Loop="true"
            // vidWidth="100%"
            // vidHeight="800"
            // vidWidthMob="80%"
            // vidHeightMob="350"
          /> 
        </div>
   
        <div className={classes.mediaRow}>
          <div className={classes.inside}>
            <div className={classes.vidHlf}>
              <Video
                vidSrc={introVideo}
                // vidWidthMob="80%"
                // vidHeightMob="350"
              />
            </div>
            
            <div className={classes.textEs}><h3><span>Experience</span><br/>a once-in-a-lifetime science field trip</h3></div>
          </div>
        </div>
        
        <div className={classes.photoLayRow}>
          <div className={classes.med3Def}>
            <div className={classes.PLRone}>
              <div className={classes.plText}>
                <h3><span>Explore</span><br/> a variety of marine habitats hands-on</h3>
                <Link className={[classes.msLink, classes.inline, classes.gradi].join(' ')} to="/trip-maps">Directions &amp; details for each trip</Link>
              </div>
              <img src={pl8} className={[classes.imgResponsive, classes.PLimg, classes.zLow].join(' ')} alt="MSA students and chaperone seining in the gulf water" />
              <img src={pl1} className={[classes.imgResponsive, classes.PLimg, classes.zTop].join(' ')} alt="Marine Science Adventures Biologist teaching a class on the beach" />
            </div>
            
            <div className={classes.PLRtwo}>
              <img src={pl7} className={[classes.imgResponsive, classes.PLimg, classes.zBot].join(' ')} alt="MSA Biologist leading class through the marsh waters" />
              <div className={classes.plText}>
                <h3><span>Engage</span><br/> your students, and make them excited to learn</h3>
                <Link className={[classes.msLink, classes.inline, classes.gradi].join(' ')} to="/our-story">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.clearfix} />
        
        <div className={classes.instaWidgetWrap}>
          {/* <h3>Follow Us:</h3> */}
          <h3>@marinescienceadventures</h3>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe title="instagram widget" src="//lightwidget.com/widgets/9cca07e9edda5f34ad97781d03aa6098.html" scrolling="no" allowtransparency="true" className={[classes.instaWidget, "lightwidget-widget"].join(' ')} style={{width:'100%',border:'0',overflow:'hidden'}}></iframe>
        </div>
        <div className={classes.clearfix} />
      
        <div className={classes.AffSec}>
          <div className={classes.medDef}>
            <div className={classes.AffText}>
              <h4>We are proud to be an AMSTI affiliate.</h4>
              <p>Marine Science Adventures offers a great Professional Development seminar for teachers.
              Earn CEU hours while exploring the Gulf Coast!</p>
              <Link to="/professional-development-seminars" className={classes.textLink}>Learn More</Link>
            </div>
            
            <div className={classes.logoRowA}>
              <div className={classes.logoImg}><img src={amsti} className={classes.imgResponsive} alt="AMSTI logo" /></div>
              <div className={classes.logoImg}><img src={stem} className={classes.imgResponsive} alt="STEM logo" /></div>
              <div className={classes.logoImg}><img src={steam} className={classes.imgResponsive} alt="STEAM logo" /></div>
              <div className={classes.logoImg}><img src={stream} className={classes.imgResponsive} alt="STREAM logo" /></div>
            </div>
          </div>
        </div>
        <div className={classes.clearfix} />
        
        <div className={[classes.photoGall, ["uk-grid"]].join(' ')} uk-lightbox="animation: slide;">
          <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slideshow="animation: push" style={{ paddingLeft: '0'}}>
            <ul className={[classes.photoItems,"uk-slideshow-items"].join(' ')}>
              <li className={classes.photoLi}>
                <img src={bg3} className={[classes.imgResponsive, "uk-position-bottom-left"].join(' ')} alt="" />
                <div className={[classes.ukCustomPos, "uk-overlay uk-overlay-default uk-position-top-left"].join(' ')}>
                  <h3>"An incredible field trip that you and your students will love"</h3>
                </div>
              </li>
              <li className={classes.photoLi}>
                <img src={slideImg2} className={[classes.imgResponsive, "uk-position-bottom-left"].join(' ')} alt="" />
                <div className={[classes.ukCustomPos, "uk-overlay uk-overlay-default uk-position-top-left"].join(' ')}>
                  <h3>"This is and has been the best field trip I have ever been on. I learned so much."</h3>
                </div>
              </li>
              <li className={classes.photoLi}>
                <img src={slideImg6} className={[classes.imgResponsive, "uk-position-bottom-left"].join(' ')} alt="" />
                <div className={[classes.ukCustomPos, "uk-overlay uk-overlay-default uk-position-top-left"].join(' ')}>
                  <h3>"It was an exciting and fun trip for us, and the students were learning something new continuosly throughout the trip."</h3>
                </div>
              </li>
            </ul>
            {/* <ul className={[classes.slideDots, "uk-slideshow-nav uk-dotnav"].join(' ')}></ul> */}
            <button type="button" className={["uk-position-center-left uk-position-small", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous">
              {/*  uk-hidden-hover <span uk-icon="icon: chevron-left; ratio: 1.5"></span> */}
            </button>
            <button type="button" className={["uk-position-center-right uk-position-small", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-next data-uk-slideshow-item="next">
              {/*  uk-hidden-hover <span uk-icon="icon: chevron-right; ratio: 1.5"></span> */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;