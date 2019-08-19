import React, { Component } from 'react';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { withRouter, Route, Switch } from "react-router-dom";
import classes from './App.module.scss';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Home from "./hoc/Pages/Home/Home";
import Contact from "./hoc/Pages/Contact/Contact";
import OurStory from "./hoc/Pages/About/OurStory";
import OurTeam from "./hoc/Pages/About/OurTeam";
import Partners from "./hoc/Pages/About/Partners";
import Testimonials from "./hoc/Pages/Testimonials/Testimonials";
import Accommodations from "./hoc/Pages/Accommodations/Accommodations";
import WhatToBring from "./hoc/Pages/Resources/WhatToBring";
import Promoting from "./hoc/Pages/Resources/Promoting";
import FAQs from "./hoc/Pages/Resources/FAQs";
import Blog from "./hoc/Pages/Blog/Blog";
import PostsList from "./components/PostsList/PostsList";

import ProfessionalDevelopmentSeminars from "./hoc/Pages/ProfessionalDevelopmentSeminars/ProfessionalDevelopmentSeminars";
import EducationalDetails from "./hoc/Pages/EducationalDetails/EducationalDetails";
import BookNow from "./hoc/Pages/BookNow/BookNow";
import TeacherResources from "./hoc/Pages/TeacherResources/TeacherResources";
import MissionGoalsObjectives from "./hoc/Pages/MissionGoalsObjectives/MissionGoalsObjectives";

import TripMaps from "./hoc/Pages/TripMaps/TripMaps";
import NavalAviationMuseum from "./hoc/Pages/TripMaps/NavalAviationMuseum";
import AlligatorAlley from "./hoc/Pages/TripMaps/AlligatorAlley";
import FtMorgan from "./hoc/Pages/TripMaps/FtMorgan";
import MarshTidal1 from "./hoc/Pages/TripMaps/MarshTidal1";
import NatureCenter from "./hoc/Pages/TripMaps/NatureCenter";
import BonSecourNWR from "./hoc/Pages/TripMaps/BonSecourNWR";
import ClaudePeteet from "./hoc/Pages/TripMaps/ClaudePeteet.js";
import BonSecourMaritime from "./hoc/Pages/TripMaps/BonSecourMaritime.js";
import MarshTidal2 from "./hoc/Pages/TripMaps/MarshTidal2.js";


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/our-team" component={OurTeam} />
        <Route path="/partners" component={Partners} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/what-to-bring" component={WhatToBring} />
        <Route path="/promoting" component={Promoting} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/accommodations" component={Accommodations} />
        <Route path="/blog" component={Blog} />
        <Route path="/posts-list" component={PostsList} />
       
        <Route path="/professional-development-seminars" component={ProfessionalDevelopmentSeminars} />
        <Route path="/educational-details" component={EducationalDetails} />
        <Route path="/book-now" component={BookNow} />
        <Route path="/teacher-resources" component={TeacherResources} />
        <Route path="/mission-goals-objectives" component={MissionGoalsObjectives} />
        
        <Route path="/trip-maps" component={TripMaps} />
        <Route path="/naval-aviation-museum" component={NavalAviationMuseum} />
        <Route path="/alligator-alley" component={AlligatorAlley} />
        <Route path="/ft-morgan" component={FtMorgan} />
        <Route path="/marsh-tidal-pools1" component={MarshTidal1} />
        <Route path="/nature-center" component={NatureCenter} />
        <Route path="/bon-secour-nwr" component={BonSecourNWR} />
        <Route path="/claude-peteet-center" component={ClaudePeteet} />
        <Route path="/bon-secour-maritime" component={BonSecourMaritime} />
        <Route path="/marsh-tidal-pools2" component={MarshTidal2} />
        {/* <Route path="/gsbr" component={GSBR} /> */}
      </Switch>
    );
    
    const HeadStyle = () => {
      if (window.location.pathname === '/') {
        return (
          <Header HeaderType="HomeHeader" />
        );
      }
      return (
        <Header HeaderType="Reg" />
      )
    }
    const SneakyHeader = withRouter(HeadStyle);

    let attachedClasses = [classes.blogCaller, classes.CalNot];
    if (window.location.pathname === '/blog') {
      attachedClasses = [classes.blogCaller, classes.Cal];
    }
    
    return (
      <div className={classes.App}>
        <SneakyHeader />

        <Content>
          {routes}


          <div className={classes.med2Def}><div id="dib-posts" className={attachedClasses.join(' ')}></div></div>
        </Content>

        <Footer />
        <ScrollUpButton
          ContainerClassName={classes.ToTopBtn}
          TransitionClassName="MyOverRideTransitionedClass"
          style={{ fill: 'rgb(255,255,255)', color: '#008AAB', backgroundColor: '#116c78', width: '20px', padding: '0px 5px' }}
          EasingType='linear'
        />
      </div>
    );
  }
}

export default App;
