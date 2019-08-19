import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import classes from "./Resources.module.scss";
import Accordion from "../../../components/Accordion/Accordion";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phImage from "../../../assets/images/classGroup5.png";


const pricing = (
  <div>
    <p>Please <a className={classes.textLink} href="mailto: gsbeachretreat@gmail.com">email us</a> for the cost. We have a standard 3-day/2-night trip, including 5 meals, but we can add extra nights -- lodging and extra meals. Some groups like to add a lunch the day of arrival, or adding a sack lunch for the ride home is also a great option.</p> 
  </div>
);

const sleepContent = (
  <div>
    <p>
      Each side of the retreat has 4 bunk rooms.<br/>
      2 downstairs bunk rooms sleep 16 each.
      2 upstairs bunk rooms sleep 20 each.
    </p>
    <p>Each bunk room has 3 showers, 2 toilets, and 3 sinks.</p>
    <p>
      There are 2 staff/leader rooms on each side of the retreat.<br/>
      The staff/leader room has a queen bed, a set of bunks, and a private bathroom. Each leader room connects to a bunk room.
      The retreat has central heat &amp; air with controls in kitchen &amp; meeting room.
    </p>
  </div>
);

const transContent = (
  <div>
    <p>Yes, you will need to have your own transportation available during your stay to take you to field trip excursions and activities.
      We can help refer you to charter transportation if needed. <b>We do not provide transportation.</b></p>
  </div>
);

const packContent = (
  <div>
    <p>
      Guests bring towels, pillows, and bedding for a twin bed -- either sheets and blanket, or a sleeping bag. Most students find it more convenient to bring a sleeping bag.  
      Also bring toiletries, sunscreen, insect repellent, clothing, hat, sunglasses, swim suit, beach towel, and extra spending money.
      <b> Bring old clothes you do not mind getting dirty and wet, extra socks, and 2 pair of tennis shoes (1 pair you do not mind getting dirty and wet).</b> 
      <b> Tennis shoes with socks must be worn on ALL field trip activities. You will get dirty! </b>
    </p>
    
    <p>
      You may want to bring a camera, and any medications needed (to be administered by a teacher responsible for dispensing medications). 
      You may want to bring a backpack for carrying items and supplies in the field. A flashlight or headlamp for night seine is optional. 
    </p>
    
    <p>
      The use of cell phones will be up to the discretion of each teacher in accordance with school and county policies. 
      Teachers and chaperones are responsible for enforcing these polices. Please bring emergency contact numbers. 
    </p>
    
    <p>
      <b>Teachers/Chaperones also bring extra paper products. </b>
      We provide a starter set of toilet tissue and garbage bags, but you are responsible for refills as needed.  
      We suggest bringing plastic bags to sit on if you are wet after your excursion, and also paper towels and pump soap for the bunk room 
      sinks. 
    </p>
    <p>You can view/download student, chaperone, and teacher packing checklists <Link to="/what-to-bring" className={classes.textLink}>here</Link>, 
     or we can email you a copy upon request.</p>
  </div>
);

const kitchenContent = (
  <div>
    <p>Absolutely! Each side of the Gulf Shores Beach Retreat has a commercial kitchen equipped with 2 ovens, 2 microwaves, 2 refrigerators, 
      a stand up freezer, toasters, pots, pans, plates, silverware, and picnic tables. We have coffee makers so bring your coffee! There is a shared commercial ice machine outside of the kitchen.
    </p>
    <p>For Marine Science Adventures Field Trips, we provide meals at the retreat. Our kitchens are downstairs. Please email or call for details.</p>
  </div>
);

const foodContent = (
  <div>
    <p>We provide 5 meals for a 2-night trip, but your group can bring any extra snacks and drinks you might want. </p>
    <p><b>VERY IMPORTANT: Please bring bottles of water for your picnic lunch (for the day you will be out), as well as extra waters to have 
      during the day. There is not a place to buy them once you leave the retreat. Leaders are responsible for bringing all drinks for 
      the day out.</b> We have a commercial size ice machine that you are welcome to use for your coolers. 
    </p>
    <p>We do not furnish coffee, so coffee lovers, please bring all your supplies. We do have 2 coffee makers you can take to your room 
      if you want coffee before 7am. The kitchen is locked 6-7am for breakfast prep. We do not have a vending area, but there is a convenience store a block away.
    </p>
    <p>
      Some groups choose to do dinner the second night at a restaurant. 
      This is fine <b>if we know well in advance,</b> and we will deduct $10 off your total per person.
      <b>You are responsible for the restaurant night,</b> as far as making reservations and payment directly to the restaurant.
    </p>
  </div>
);

const trashContent = (
  <div>
    <p>We have a trash dumpster on the back side parking area of the retreat. 
      Please be sure you do not leave any trash in the rooms or outside cans upon departure. 
      Please empty all inside & outside trash, including the bunk rooms, staff rooms, meeting room, kitchen, pool area, and parking area into the dumpster.
    </p>
    <p><b>Very Important: If you are on the back side of the retreat, please do not park in front of the dumpster or it can not be emptied. </b></p>
  </div>
);

const smokeContent = (
  <div>
    <p>No. <b>Smoking, vaping, or any tobacco products are not allowed any place at all on our property,</b> including our parking lot. 
      If someone in your group smokes, they will need to go across the street. 
      We do not allow smoking in our parking lot even if you are in a vehicle. <b>THIS IS A VERY STRICT POLICY!</b></p>
  </div>
);

const bookContent = (
  <div>
    <p>
      Please confirm with us that your dates are available. We will email you our contract. 
      Please fill out, sign, initial 3 places, and return by fax or email along with the $500 deposit per retreat side. 
      <b>Your reservation is not secured until we receive your deposit and contract. </b>
    </p>
  </div>
);

const gsContent = (
  <div>
    <p>We offer exclusivity. Nobody else will be on your side of the retreat. 
      <b> No one outside of your group will be in your rooms, kitchen, or pool area, or around your kids at all.</b></p>
    <p>When you stay with us, you make your retreat side your home away from home.</p>
  </div>
);

const checkinContent = (
  <div>
    <p>We are excited that you will be staying with us. Please email or call an hour before arrival to let us know you are headed this way. 
      If you forget, just call when you pass the Tanger Outlets in Foley. That will let us know you are about 20 minutes away. 
    </p>
    
    <p>Upon arrival, we will have all the doors unlocked, and the a/c and lights on. If we can have 5 minutes with the leader before 
      everyone gets off the bus, we can get your payment, give you keys and a super quick tour, 
      show you the wifi info, thermostats, and lock box. Then everyone can get in. 
    </p>
      
    <p>
      Rooming lists will be on each door. We will have your t-shirts and wrist bands ready to give the leader. 
      Email is the best way to reach us at <a href="mailto: gsbeachretreat@gmail.com" className={classes.textLink}>gsbeachretreat@gmail.com,</a> 
      and you can also call <a href="tel: +12519488800" className={classes.textLink}>251-948-8800</a>.
      Please do not hesitate to email us at any time. We want to help make your trip as wonderful as possible! 
    </p>
  </div>
);

const msaSpec = (
  <div>
    <p>We do night excursions! Your students will be busy <b>day and night.</b> We do night seines and beach walks because the 
    specimens change at night.</p>
  </div>
);

const faqs = () => {
  const accItems = [
    {id: 1, title: 'What is the cost?', content: [pricing], open: "uk-open"},
    {id: 2, title: 'How many can your retreat accommodate?', content: 'Housing for each side consists of 4 bunk rooms, plus 2 leader rooms. Each side will sleep 80, and by taking both sides, you can sleep 160.'},
    {id: 3, title: 'What are the sleeping arrangements?', content: [sleepContent]},
    {id: 4, title: 'How close are you to the beach? ', content: 'We are right across the street from the beach. We have deeded beach access with a new boardwalk taking you right to the beach, and we are conveniently located 1.5 miles down west beach.'},
    {id: 5, title: 'Will we need transportation during our stay? ', content: [transContent]},
    {id: 6, title: 'What do I need to bring?', content:[packContent] },
    {id: 7, title: 'Do you have a kitchen?', content: [kitchenContent]},
    {id: 8, title: 'Does our group need to bring food?', content: [foodContent]},
    {id: 9, title: 'Where do we take our trash?', content: [trashContent]},
    {id: 10, title: 'Where do we park?', content: 'Each retreat side has it’s own parking. There is space for a bus to park on each side. There is also extra public parking across the street, but trailers and buses are not allowed in the public parking. '},
    {id: 11, title: 'Do you have a meeting room?', content: 'Yes, we have a 1600 sq ft meeting room with 200 folding chairs, tables, and a 55” flat screen tv. Our meeting room is upstairs over the kitchens. After the last morning summary, please fold your chairs against the wall. '},
    {id: 12, title: 'Do we share a pool or other amenities with other groups?', content: 'No! You will have your own private pool with quality lounge chairs, sand volleyball, basketball, parking, charcoal grills, and kitchen. '},
    {id: 13, title: 'I heard you also rent out your retreat for other groups? ', content: 'What types of groups stay there? We host church youth groups, ball teams, scouts, school groups, college groups, and family reunions. We are ideal for most large groups. We also have a fantastic new Gulf Coast History Field Trip. Please email for details. '},
    {id: 14, title: 'Do you provide wireless internet?', content: 'Yes. We give the leader the log in details, and they decide if the students have the code.'},
    {id: 15, title: 'Do you allow smoking on property?', content: [smokeContent]},
    {id: 16, title: 'Do you allow alcohol on property?', content: 'No, we do not allow guests to bring alcohol to the retreat.'},
    {id: 17, title: 'Can we bring pets?', content: 'No, We do not allow guests to bring pets.'},
    {id: 18, title: 'What do I need to do to reserve a field trip for my group?', content: [bookContent]},
    {id: 19, title: 'Do your trips fill up quickly?', content: 'Yes!!! Some groups reserve their same dates for the next year as soon as they leave so call or email us TODAY! '},
    {id: 20, title: 'Name one thing Gulf Shores Beach Retreat offers to set you apart?', content: [gsContent]},
    {id: 21, title: 'Name one thing Marine Science Adventures offers to set you apart? ', content: [msaSpec]},
    {id: 22, title: 'What do we do at arrival for our check in?', content: [checkinContent]},
    // {id: 23, title: '', content: ''},
  ];  
  
  return (
    <div className={classes.Faq}>
      <Helmet>
        <title>Marine Science Adventures FAQs</title>
        <meta name="description" content="Take a look at our list of frequently asked questions. Feel free to contact us if you have a question that isn't answered here." />
      </Helmet>
      
      <PageHeader phImage={phImage} pageTitle="FAQs" ovPacity=".2" Color="white" />
      <div className={classes.insideNrw}>
        <Accordion accItems={accItems} altClass="faqAcc" />
      </div>
    </div>
  );
};

export default faqs;