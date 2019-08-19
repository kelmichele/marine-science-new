import React from "react";
import { Helmet } from "react-helmet";
import classes from "./MissionGoalsObjectives.module.scss";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phImage from "../../../assets/images/vidShot9.png"
import obj1 from "../../../assets/images/obj-est.png"
import obj2 from "../../../assets/images/obj-marsh.png"
import obj3 from "../../../assets/images/obj-tidal2.png"
import obj4 from "../../../assets/images/obj-forest.jpg"
import obj5 from "../../../assets/images/obj-dunes2.jpg"
import obj6 from "../../../assets/images/obj-splash.png"
import obj7 from "../../../assets/images/obj-gulf.jpg"
import obj8 from "../../../assets/images/obj-lagoon.png"

const missionGoalsObjectives = () => {
  return (
    <div className={classes.MissionGoalsObjectives}>
      <Helmet>
        <title>Mission, Goals, and Objectives</title>
        <meta name="description" content="Since Marine Science Adventures began in 2010, we have been working to educate people about marine ecosystems along the Gulf Coast, and the vital role they play in the earth’s survival." />
      </Helmet>

      <PageHeader
        phImage={phImage}
        // Height="short"
        pageTitle="Mission, Goals, and Objectives"
        ovPacity="0"
        Color="white"
      />
      
      <div className={classes.Mission}>
        <div className={classes.med3Def}> 
          <h2>Our mission is to introduce students to the Marine Ecosystems,
          and the vital role they play in the earth’s survival.</h2>
        </div> 
      </div>
      

      <div className={classes.Goals}>
        <div className={classes.med3Def}>
          <h3>Our <br/>Goals</h3>
          <p>To collect, discuss and observe the biodiversity in different marine ecosystems, and how the health of each habitat is vital for a healthy marine ecosystem.  
            To underscore both positive and negative effects of human impact on marine ecosystems. All data will be recorded and interpreted.</p>
        </div>
      </div>

      <div className={classes.Objectives}>
        <div className={classes.medODef}>
          <h3>Our Objectives</h3> 
          <hr />

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 01</p>
              <h4>Estuary </h4>
              <h5><span> To emphasize the importance of estuaries participants will collect and analyze, observe and discuss. </span></h5>
              <p>Participants will use seines, suction guns and shaker boxes, and plankton nets. Specimens will be identified, and water samples will for chemistry and plankton.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Watersheds, Mobile Bay, Nursery of the seas, Peninsula, Brackish, Vertebrates/Invertebrates, Sea Birds, Plankton, Biodiversity, Chemistry, Intracoastal Waterway, Port of Mobile, Barrier Island, Delta</p>
            </div>
            
            <img src={obj1} alt="Students seining along the coast of Gulf Shores" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 02</p>
              <h4>Salt Water Marshes </h4>
              <h5><span> To emphasize the importance of salt marshes participants will trek through an area of marshes, collect, observe and discuss.</span></h5>
              <p>Participants will use seines, suction guns and shaker boxes and plankton nets. Specimens will be identified, and water samples will be tested for chemistry and plankton.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Tides, Brackish, Detritus, Periwinkle, Juncus grass, Cord-grass, Vertebrates/Invertebrates, Chemistry, Halophyte, Osmoconformer, Stenohaline</p>
            </div>
            
            <img src={obj2} alt="Students collecting samples from the marshes in Gulf Shores" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 03</p>
              <h4>Salt water tidal pools </h4>
              <h5><span> To emphasize the uniqueness participants will collect and analyze, observe and discuss.</span></h5>
              <p>Participants will use seines, suction guns and shaker boxes, and plankton nets. Specimens will be identified, and water samples will be tested for chemistry and plankton.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Tidal or rocky, Food Web, Ebb flow, Vertebrates and invertebrates, Hostile habitat</p>
            </div>

            <img src={obj3} alt="Students wading through the water to collect samples" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 04</p>
              <h4>Maritime forest </h4>
              <h5><span> An essential habitat for coastal plants and animals, participants will take a short hike through a maritime forest observing and discussing.</span></h5>
              <p>Plants and animals will be identified and discussed.  Binoculars will be available for observation. Importance of migration from maritime forest will be emphasized.  All data will be recorded.</p>
          
              <p className={classes.MsTerms}><b>Terms:</b> Indigenous, Deciduous and evergreen, Canopy, Understory, Epiphyte, Salt shearing, Dune ridge, Mississippi flyway</p>
            </div>
            
            <img src={obj4} alt="Class having lunch while enjoying the Maritime Forest" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 05</p>
              <h4>Coastal sand dunes </h4>
              <h5><span> A distinct coastal habitat, participants will take a walking tour through the dunes observing and discussing.</span></h5>
              <p>Observing and discussing the anatomy of dunes and their formation and plants and animals, including the endangered Alabama beach mouse.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Primary, secondary, tertiary dunes, Dune formation, Predator-prey relationships, Slash pines and oaks, Decomposers, Lichens, Sea oats</p>
            </div>
            
            <img src={obj5} alt="Gulf State Park sand dunes" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 06</p>
              <h4>Intertidal and splash zone </h4>
              <h5><span> A coastal beach is more than you think!  Participants will collect, observe and discuss the different components of a coastal plain, including the threatened loggerhead turtle.</span></h5>
              <p>Participants will use seines, suction guns and shaker boxes, and plankton nets.   Specimens will be identified, and water samples will be tested for chemistry and plankton.  Loggerhead turtle nest demonstration will emphasize the importance of the splash zone.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Littoral zone, Basin, Continental shelf, Tides, Vertebrates/Invertebrates, Rack line, Sea turtles, Endangered/Threatened </p>
            </div>

            <img src={obj6} alt="Dr. Simpson discussing splash zones with class" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 07</p>
              <h4>Gulf of Mexico </h4>
              <h5><span> Participants will collect, observe and discuss the variety of habitats that comprise the Gulf.  Vital resources in the gulf will be emphasized.  Participants will do a beach walk.</span></h5>
              <p>Participants will use seines, suction guns and shaker boxes, and plankton nets.  Specimens will be identified, and water samples will be tested for chemistry and plankton.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Gulf, Sigsbee deep, Vertebrates/Invertebrates, Coral Reef, Migration, Boarder States, Natural gas/Oil production, Human impact, Red tide, Tides/Currents, Zooplankton/Phytoplankton</p>
            </div>
            
            <img src={obj7} alt="Group enjoying the Gulf" className={classes.imgResponsive} />
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}><span>Objective</span><br/> 08</p>
              <h4>Little Lagoon </h4>
              <h5><span> Participants will collect, observe and discuss this shallow, brackish coastal lagoon.   Uniqueness and lagoon formation will be explored.</span></h5>
              <p>Participants will use seines, suction guns and shaker boxes, and plankton nets.  Specimens will be identified, and water samples will be tested for chemistry and plankton.  All data will be recorded.</p>
              <p className={classes.MsTerms}><b>Terms:</b> Coastal/atoll lagoon, Formation, Tidal flow, Vertebrate/Invertebrate</p>
            </div>
            
            <img src={obj8} alt="Students and chaperone using plankton net in the Gulf" className={classes.imgResponsive} />
          </div>

        </div>
      </div>
    </div>
  );
};
export default missionGoalsObjectives;