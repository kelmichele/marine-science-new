import React, { Component } from "react";
import classes from "./Accordion.module.scss";

class Accordion extends Component {  
  render() {
    const accContent = this.props.accItems.map((accItem) =>
      <li key={accItem.id} className={[accItem.open]}>
        <button className={["uk-accordion-title"]}>{accItem.title}</button>
        <div className={["uk-accordion-content", classes.custContent].join(' ')}>
          {accItem.content}
        </div>
      </li> 
    );

    return(
      <div className={[classes.Accordion, classes[this.props.altClass], this.props.Shade].join(' ')}>
        <ul data-uk-accordion>
          {accContent}
        </ul>
      </div>
    )
  }
};
Accordion.defaultProps = {
  Shade: "uk-dark"
};

export default Accordion;