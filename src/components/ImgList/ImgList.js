import React, { Component } from "react";
import classes from "./ImgList.scss";
import { Link } from 'react-router-dom';

class ImgList extends Component {
  render() {
    const ilContent = this.props.ilItems.map((ilItem) =>
      <li key={ilItem.id} className={[classes.IlBox, classes[ilItem.ListId]].join(' ')} style={{ backgroundImage: "url(" + ilItem.image + ")" }}>
        <Link to={ilItem.link} className={[classes.boxTitle, "uk-position-center"].join(' ')}>{ilItem.name}</Link>
      </li>
    );

    return (
      <div className={[classes.ImgList, classes[this.props.GridStyle]].join(' ')}>
        <ul>{ilContent}</ul>
      </div>
    )
  }
};
ImgList.defaultProps = {
  GridStyle: "equal"
};

export default ImgList;
