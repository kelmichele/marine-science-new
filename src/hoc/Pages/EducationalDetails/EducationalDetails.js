import React from "react";
import { Helmet } from "react-helmet";
import classes from "./EducationalDetails.module.scss";
import Table from "./EdTable.js";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phImage from "../../../assets/images/genBG.png";

// Grade 3
// Grade 4
// Grade 5
// Grade 6
// Grade 7
// Grade 8
// Environmental Science
// Biology
// Physical Science

const educationalDetails = () => {
  const row3Items = [
    {id: 1, discipline: 'Motions and Stability', standard: '1', num: '#page=32'},
    {id: 2, discipline: 'Molecules to Organisms', standard: '5, 6', num: '#page=33'},
    {id: 3, discipline: 'Heredity', standard: '7, 8', num: '#page=33'},
    {id: 4, discipline: 'Unity and Diversity', standard: '9, 10, 11, 12', num: '#page=33'},
    {id: 5, discipline: 'Earth Systems and Human Activity', standard: '13, 15', num: '#page=34'},
  ];

  const row4Items = [
    {id: 1, discipline: 'Energy', standard: '3, 5', num: '#page=35'},
    {id: 2, discipline: 'Waves and their Applications', standard: '6', num: '#page=36'},
    {id: 3, discipline: 'Molecular Structure and Processes', standard: '11', num: '#page=36'},
    {id: 4, discipline: 'Earth Systems', standard: '16, 17', num: '#page=37'},
  ];

  const row5Items = [
    {id: 1, discipline: 'Matter and its Interactions', standard: '3, 4, 5', num: '#page=38'},
    {id: 2, discipline: 'Motion and Stability- Forces and Interactions', standard: '6', num: '#page=39'},
    {id: 3, discipline: 'Ecosystems- Interactions, Energy and Dynamics', standard: '8, 10, 11', num: '#page=39'},
    {id: 4, discipline: 'Earths Place in the Universe', standard: '13', num: '#page=39'},
    {id: 5, discipline: 'Earths Systems', standard: '14, 15', num: '#page=40'},
    {id: 6, discipline: 'Earth and Human Activity', standard: '16 17', num: '#page=40'},
  ];

  const row6Items = [
    {id: 1, discipline: 'Earth Place in the Universe', standard: '1', num: '#page=42'},
    {id: 2, discipline: 'Earth’s Systems', standard: '4, 5, 6, 9, 11, 12, 14', num: '#page=43'},
    {id: 3, discipline: 'Earth and Human Activity', standard: '15, 16', num: '#page=44'},
  ];

  const row7Items = [
    {id: 1, discipline: 'Molecular Structure and Processes', standard: '2, 3', num: '#page=45'},
    {id: 2, discipline: 'Ecosystems: Interaction, Energy, and Dynamics', standard: '5, 6, 7, 8, 9, 10, 11', num: '#page=46'},
    {id: 3, discipline: 'Heredity', standard: '13', num: '#page=46'},
    {id: 4, discipline: 'Unity and Diversity', standard: '16, 18', num: '#page=47'},
  ];

  const row8Items = [
    {id: 1, discipline: 'Matter and Interaction', standard: '3, 4, 5', num: '#page=48'},
    {id: 2, discipline: 'Motion- Forces and Interaction', standard: '12', num: '#page=49'},
    {id: 3, discipline: 'Energy', standard: '15', num: '#page=49'},
    {id: 4, discipline: 'Waves and Information Transfer', standard: '17', num: '#page=50'},
  ];

  const rowEnvItems = [
    {id: 1, discipline: 'Earth and Human Activity', standard: '1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13', num: '#page=70'},
  ];

  const rowBioItems = [
    {id: 1, discipline: 'Ecosystems: Interactions, Energy, and Dynamics', standard: '7, 8, 9, 10', num: '#page=56'},
    {id: 2, discipline: 'Unity and Diversity', standard: '13, 14, 15, 16', num: '#page=57'},
  ];

  const rowPsItems = [
    {id: 1, discipline: 'Matter and its Interactions', standard: '3, 4', num: '#page=52'},
    {id: 2, discipline: 'Motion and Stability', standard: '7', num: '#page=53'},
    {id: 3, discipline: 'Energy', standard: '12', num: '#page=53'},
    {id: 4, discipline: 'Waves', standard: '13', num: '#page=54'},
  ];

  return (
    <div className={classes.EducationalDetails}>
      <Helmet>
        <title>Alabama State Learning Standards</title>
        <meta name="description" content="The Marine Science Adventures program is for grades 3-12, and meets many of the standards required by each state for its science grade levels." />
      </Helmet>
      <PageHeader
        phImage={phImage}
        Height="short"
        pageTitle="Alabama State Learning Standards"
        ovPacity="0"
        Color="white"
      />
      
      
      <div className={classes.intro}>
        <div className={classes.med3Def}>
          <p>The Marine Science Adventures program is for grades 3-12, and meets many of the standards required by each state for its science grade levels. 
            We can also adapt the field trip to cover specific areas a teacher wants their class to address. 
            Once your field trip dates are reserved, we will contact you to customize any particular areas and/or terms you want covered.
            {/* We want to give you the trip you want, not the trip we want.  */}
          </p>
          
          <p className={classes.color2}>
          This list below is based on the 2015 Alabama course of study, 
          and shows the standards we meet for grades 3-8, as well as Environmental Science, Biology, and Physical Science. 
          They are listed by grade/subject, disciplinary core idea, and content standard met.
          </p>
        </div>
      </div>

      <div className={classes.Objectives}>
        <div className={classes.med3Def}>
          <hr />

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>03</p>
              <h4>Third Grade</h4>
            </div>
            
            <div className={classes.GradeTable}>
              <Table rowItems={row3Items} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>04</p>
              <h4>Fourth Grade </h4>
            </div>

            <div className={classes.GradeTable}>
              <Table rowItems={row4Items} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>05</p>
              <h4>Fifth Grade</h4>
            </div>
            
            <div className={classes.GradeTable}>
              <Table rowItems={row5Items} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            {/* <div className={[classes.MsoInner, classes.less].join(' ')}> */}
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>06</p>
              <h4>Sixth Grade</h4>
            </div>

            <div className={classes.GradeTable}>
              <Table rowItems={row6Items} />
            </div>
          </div>


          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>07</p>
              <h4>Seventh Grade</h4>
            </div>
            
            <div className={classes.GradeTable}>
              <Table rowItems={row7Items} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>08</p>
              <h4>Eighth Grade</h4>
            </div>

            <div className={classes.GradeTable}>
              <Table rowItems={row8Items} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={[classes.MsoInner, classes.short].join(' ')}>
              <p className={classes.objNum}>09</p>
              <h4>Environmental Science</h4>
            </div>
            
            <div className={classes.GradeTable}>
              <Table rowItems={rowEnvItems} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={[classes.MsoInner, classes.less].join(' ')}>
              <p className={classes.objNum}>10</p>
              <h4>Biology</h4>
            </div>

            <div className={classes.GradeTable}>
              <Table rowItems={rowBioItems} />
            </div>
          </div>

          <div className={classes.MsObj3}>
            <div className={classes.MsoInner}>
              <p className={classes.objNum}>11</p>
              <h4>Physical Science</h4>
            </div>
            
            <div className={classes.GradeTable}>
              <Table rowItems={rowPsItems} />
            </div>
          </div>


        </div>
      </div>



      <div className={classes.mobileObj}>
        <div className={classes.insideNrw}>
          <ul className={classes.GradeInfo} data-uk-accordion>
            <li className={[classes.GradeItem, "uk-open"].join(' ')}>
              <button className={["uk-accordion-title"]}>Grade 3</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row3Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Grade 4</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row4Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Grade 5</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row5Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Grade 6</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row6Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Grade 7</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row7Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Grade 8</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={row8Items} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Environmental Science</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={rowEnvItems} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Biology</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={rowBioItems} /></div>
            </li>

            <li className={classes.GradeItem}>
              <button className={["uk-accordion-title"]}>Physical Science</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}><Table rowItems={rowPsItems} /></div>
            </li>    
          </ul>
        </div>
      </div>
    </div>
  );
};

export default educationalDetails;
