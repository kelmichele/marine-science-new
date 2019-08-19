import React, { Component } from "react";
import classes from "./Maps.module.scss";
import Modal from "../Modal/Modal";

class Maps extends Component {
  render() {    
    let attachedClasses = [classes.Maps, classes.infoNo, classes[this.props.additional]];
    if (this.props.info) {
      attachedClasses = [classes.Maps, classes.infoYes, classes[this.props.additional]];
    }

    return (
      <div className={attachedClasses.join(' ')}>
        {/* {this.props.info ? <p className={classes.infoProp}>{this.props.info}</p> : ''} */}

        <div className={classes.tripWrap}>
          <div className={classes.TopRow}>
            <div className={classes.medDef}>              
              <img src={this.props.TripImage} alt={this.props.imgAlt} className={classes.imgResponsive} />
              <h1>{this.props.pageTitle}</h1>
            </div>
          </div>
          
          <div className={classes.BtmRow}>
            <div className={classes.medDef}>
              
              <div className={classes.infoBox}>
                {this.props.info ? <p className={classes.infoProp}>{this.props.info}</p> : ''}
                {this.props.address ? <p><b>Address:</b><br />{this.props.address}</p> : null}
                {this.props.intersection ? <p><b>Nearest Intersection:</b><br />{this.props.intersection}</p> : null }
                {this.props.phone ? <p><b>Phone:</b><br />{this.props.phone}</p> : null}
                
                <a
                  href={this.props.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[classes.msLink, classes.inline].join(' ')}
                >
                  Get Directions
                </a>
                
                <Modal 
                  ModalContent={this.props.medInfo} 
                  ButtonText="Closest Medical Facilities" 
                  ModalTitle="Closest Medial Facilities" 
                  custClass="inlineR" 
                />
                
                {this.props.site ?
                <a
                  href={this.props.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[classes.msLink, classes.inline, classes.Website].join(' ')}
                >Visit Website</a> : null}
              </div>
            
              <div className={classes.MapHlf}>
                <iframe
                  src={this.props.mapSrc}
                  // width={this.props.mapWidth}
                  // height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  title={this.props.mapTitle}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
};
Maps.defaultProps = {
  mapWidth: 1200
};

export default Maps;