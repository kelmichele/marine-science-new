import React from 'react';
import { Helmet } from "react-helmet";
import classes from './Resources.module.scss';
// import PageHeader from "../../../components/PageHeader/PageHeader";
import ColorCard from "../../../components/ColorCard/ColorCard";
import kcImage from "../../../assets/images/coastal3.png";
// import kcImage from "../../../assets/images/gsbr/gsbrExt2.jpg";
import ChaperoneList from "../../../MSA-chaperone-list.pdf";
import StudentList from "../../../MSA-student-list.pdf";
import TeacherList from "../../../MSA-teacher-list.pdf";

const kcTitle = (
  <h1>What to Bring</h1>
);

const kcContent = (
  <div>
    <div className={classes.introText}>
      <p>We will be exploring 8 different eco-systems.
      These systems vary widely, and the right clothing and shoes will make the trip much safer and more enjoyable.
      <span> <b>Please bring old clothes that you don’t mind getting wet and dirty.</b></span></p>

      <p><span>Socks and tennis shoes must be worn at <b>all</b> times in each eco-system!</span> <b>No</b> boots, crocs, open toed shoes or sandals should be worn in the eco-systems.</p>

      <p><span>Free time at the retreat is fun time!</span><br/>
        Bathing suits, shorts, t-shirts, flip flops, tennis shoes, etc. are all acceptable.
      </p>
    </div>
    
    <div className={classes.checkLists}>
      <a href={StudentList} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.one].join(' ')}>Student Checklist</a>
      <a href={TeacherList} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.two].join(' ')}>Teacher Checklist</a>
      <a href={ChaperoneList} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.three].join(' ')}>Chaperone Checklist</a>
    </div>
  </div>
);


const whatToBring = () => {
    return (
      <div className={classes.Packing}>
        <Helmet>
          <title>What to Bring</title>
          <meta name="description" content="Download our checklists to use while you pack, so you have everything you need for your Marine Science Adventures." />
        </Helmet>
      
        <ColorCard kcTitle={kcTitle} kcContent={kcContent} kcImage={kcImage} />
      </div>
    );
};

export default whatToBring;