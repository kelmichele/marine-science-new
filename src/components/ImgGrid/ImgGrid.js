import React, { Component } from "react";
import classes from "./ImgGrid.module.scss";
import { Link } from 'react-router-dom';
    
class ImgGrid extends Component {
  render() {
    const igContent = this.props.ilItems.map((ilItem) =>
      <div key={ilItem.id} className={[classes.IgBox, classes[ilItem.ListId]].join(' ')}>
        <img src={ilItem.image} alt={ilItem.alt} className={[classes.imgResponsive, classes.mobileImg].join(' ')} />
        <div className={classes.textBox}>
          {this.props.external ? <a href={ilItem.link} target="_blank" rel="noopener noreferrer"><h4>{ilItem.name}</h4><p>Learn More</p></a> : <Link to={ilItem.link}><h4>{ilItem.name}</h4><p>Learn More</p></Link>}
        </div>
        <img src={ilItem.image} alt={ilItem.alt} className={[classes.imgResponsive, classes.fwImg].join(' ')} />
      </div>
    );
    
    return (
      <div className={[classes.ImgGrid, classes[this.props.respStyle]].join(' ')}>
        {igContent}
      </div>
    );
  }
};

export default ImgGrid;