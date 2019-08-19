import React from "react";
import { Helmet } from "react-helmet";
// import { HashLink as Link } from 'react-router-hash-link';
import classes from "./Testimonials.module.scss";
import Accordion from "../../../components/Accordion/Accordion";


const studentContent = (
  <div id="students" className={[classes.TestSec, classes.studentSec].join(' ')}>
    {/* <span className={classes.groupTitle}>What the Students Say</span><div className={classes.spacer2} /><div className={classes.clearfix} /> */}
    {/* BOX */}
    <div className={classes.clearfix} />
    <div className={[classes.IgBox, classes.VideoIB].join(' ')}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Clinton Christian Student</h4></div>
      <div className={classes.testiBox}>
        <iframe 
          className={classes.TestiVid} 
          src="https://www.youtube.com/embed/niYxxtobCug?start=11&amp;rel=0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          title="Amy's Teacher Testimonial"
          allowFullScreen 
        />
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Clinton Christian Student</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Sam C.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          I loved the trip. The atmosphere here is great, you provided hands on education which not a lot of people can experience. 
          Despite the cold weather this is and has been the best field trip I have ever been on. 
          I learned so much, now I want to experience it more!!! Thank you!! 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Sam C.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>8th Grader</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          This trip was very fun. We all loved seining (but HATED walking through the marsh - I left this part out of the post on Facebook and Instagram). 
          Alligator Alley was cool because we got to hold one. We all enjoyed the beach walks. 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>8th Grader</h4></div>
    </div>
    
    {/* BOX */}
    <div className={[classes.IgBox, classes.VideoIB].join(' ')}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Central High Student</h4></div>
      <div className={classes.testiBox}>
        <iframe 
        className={[classes.TestiVid, classes.right].join(' ')} 
        src="https://www.youtube.com/embed/KwRWy4XnCzc?start=11&amp;rel=0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        title="Amy's Teacher Testimonial"
        allowFullScreen 
      />
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Central High Student</h4></div>
    </div>
    
    {/* BOX */}
    <div className={[classes.IgBox, classes.VideoIB].join(' ')}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>2019 Student</h4></div>
      <div className={classes.testiBox}>
        <iframe 
          className={classes.TestiVid} 
          src="https://www.youtube.com/embed/C2smxYOOuJ0?start=11&amp;rel=0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          title="Amy's Teacher Testimonial"
          allowFullScreen 
        />
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>2019 Student</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Madison L.</h4><p>7th grader</p></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          I did enjoy Marine Science Adventures from the dunes to the estuaries. 
          Fort Morgan State Historic Site is where I learned the most. 
          I liked the live demonstration of a volunteer finding sea turtle eggs, it showed how hard it is to save them, 
          even with this we're succeeding at it. The late night beach walks were comforting and calm. I really enjoyed the seining. 
          It shows that being a Marine Biologist isn't only swimming around with ocean animals. 
          Dr. Simpson, Eva, and the teachers made the connections we needed to learn. 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Madison L.</h4><p>7th grader</p></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Alanna B.</h4><p>7th grader</p></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          What I liked about Marine Science Adventures was Fort Morgan State Historic Site, Alligator Alley, and building sculptures in the sand. 
          Fort Morgan was very historical and I learned a lot of stuff about South Alabama's history. 
          The tour guide was really cool and explained things really well. 
          Alligator Alley was super fun too. We got to see an alligator feeding and hold a baby alligator. 
          The alligators at the feeding were really huge. They got up to 14 feet! 
          I'd have to say that building sand sculptures was super fantastic. I still don't know who won. It was between team 1 and 4. 
          Overall, I had a fantastic time and I'd love to come here again. It was truly a once in a lifetime experience.
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Alanna B.</h4><p>7th grader</p></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Group of 5-6 graders</h4> <p>Limestone County, Alabama</p></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          What we liked about Marine Science Adventures is...<br/>
          *Dr. Simpson was very funny.<br/>
          *The seining was very funny.<br/>
          *There was a basketball goal.<br/>
          *Hanging out with our friends.<br/>
          *Alligator Alley was very educational.<br/>
          *Building sand castles.<br/>
          *Beach walks. 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Group of 5-6 graders</h4><p>Limestone County, Alabama</p></div>
    </div>
  </div>
);

const adminContent = (
  <div id="administrator" className={[classes.TestSec, classes.adminSec].join(' ')}>
    <div className={classes.clearfix} />
    {/* BOX */}
    {/* <div className={classes.IgBox}> */}
    <div className={[classes.IgBox, classes.fwIB].join(' ')}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Charles G.</h4><p>Principal</p></div>
      <div className={classes.testiBox}>
        <div className={classes.quote}>"engaged the students in hands-on experiences with marine, plant, and animal life that they will never forget."</div>
        <p className={classes.TestiContent}>Tim Hill, Dr. John Simpson, and the staff at the Gulf Shores Beach Retreat provided my students at Hokes Bluff Elementary School with an incredible field trip. The Marine Science Adventures educational program engaged the students in hands-on experiences with marine, plant, and animal life that they will never forget. I attended the trip myself mainly because it was a two night trip and I was a little worried about my students. As soon as I arrived, my worries were immediately put at ease because the staff had everything planned and organized and the safety of the students was priority. It was an exciting and fun trip for us and the students were learning something new continuosly throughout the trip. It was very affordable for the students and I have highly recommended this trip to my colleagues.</p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Charles G.</h4><p>Principal</p></div>
    </div>
    <div className={classes.clearfix} />
    
    {/* BOX */}
    <div className={[classes.IgBox, classes.VideoIB].join(' ')}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Amy</h4><p>6th Grade Teacher</p></div>
      <div className={classes.testiBox}>
        <iframe 
        className={classes.TestiVid}
        src="https://www.youtube.com/embed/shDiuBTMcEw?start=11&amp;rel=0" 
        // frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        title="Amy's Teacher Testimonial"
        allowFullScreen 
      />
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Amy</h4><p>6th Grade Teacher</p></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Lisa</h4><p>Teacher</p></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>I can not even put into words the impact our trip had on my sweet students. I bonded on a whole new level with so many of my kiddos. Some of them that rarely ever said a word in class, now tell me EVERYTHING that happens in their life.</p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Lisa</h4><p>Teacher</p></div>
    </div>
  </div>
);

const chapContent = (
  <div id="chaperone" className={[classes.TestSec, classes.chapSec].join(' ')}>
    <div className={classes.clearfix} />
    {/* <h3>Chaperone Testimonials</h3> */}
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Lorri J.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          Great experience had on our school trip. The kids thoroughly enjoyed themselves and seemed captivated by things we don't see 
          in northern MS. As an adult I enjoyed myself as well. Great job guys!! 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Lorri J.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Michael D.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          Wow!! My son's spotlight class spent two days exploring and learning. It is adventure they won't forget. 
          Dr. Simpson and Susannah were great with the kids. 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Michael D.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Daphne L.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          Marine Science Adventures is a great experience! Lots of hands on learning and memories that will last a lifetime! 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Daphne L.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Wanda B.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>This was a fun packed educational experience. We feel in love with the staff especially Dr. Simpson! </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Wanda B.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Lacey H.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          This adventure offers an incredible experience for everyone- youth and adults. It is hands on in the field learning. 
          Their attention was captured the entire time. The best testimony to the educational level of this experience was the closing 
          time when students went on and on about the specimens and things they had learned and observed. 
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Lacey H.</h4></div>
    </div>
    
    {/* BOX */}
    <div className={classes.IgBox}>
      <div className={[classes.titleBox, classes.fwTitle].join(' ')}><h4>Stephanie M.</h4></div>
      <div className={classes.testiBox}>
        <p className={classes.TestiContent}>
          Marine Science Adventures offers hands-on discovery for students by allowing them to identify and learn about their "catch". 
          This marine science camp also offers an opportunity for students to develop an awareness of our ecosystems and the importance 
          of keeping them healthy. Students go home feeling "connected" to the environment and aware of changes they can make where they 
          live to help preserve our environment. I can not say enough great things - you really should experience it for yourself!  
        </p>
      </div>
      <div className={[classes.titleBox, classes.mobileTitle].join(' ')}><h4>Stephanie M.</h4></div>
    </div>
  </div>
);


const testimonials = () => {
  const accItems = [
    {id: 1, title: 'Student Testimonials', content: [studentContent], open: "uk-open"},
    {id: 2, title: 'Administrator Testimonials', content: [adminContent]},
    {id: 3, title: 'Chaperone Testimonials', content: [chapContent]},
  ]
  
  return (
    <div className={classes.Testimonials}>
      <Helmet>
        <title>MSA Testimonials</title>
        <meta name="description" content="We believe that any class would enjoy a Marine Science Adventures trip, but don't just take our word for it. These are testimonials from students, chaperones, and administrators who all loved their experience." />
      </Helmet>
      
      <div className={classes.SimpleTop}><h1>Testimonials</h1></div>
      
      <div className={classes.med2Def}>
        <Accordion accItems={accItems} altClass="noLeft" />
      </div>   
    </div>
  );
};

export default testimonials;
