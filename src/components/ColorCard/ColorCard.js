import React from 'react';
import classes from './ColorCard.module.scss';

const colorCard = (props) => {
  return (
    <div className={[classes.ColorCard, classes[props.Theme], classes[props.Size]].join(' ')}>
      <div className={classes.kcHeader} style={{ backgroundImage: "url(" + props.kcImage + ")" }}></div>
        
      <div className={classes.kcBody}>
        <div className={classes.medDef}>
          <div className={classes.kcTitle}>
            {props.kcTitle}
          </div>
          
          <div className={classes.kcContent}>
            {props.kcContent}
          </div>
        </div>
      </div>
    </div>
  );
};
colorCard.defaultProps = {
  Theme: 'color1',
  Size: 'equal'
};
export default colorCard;