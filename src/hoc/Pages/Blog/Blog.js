import React from "react";
import { Helmet } from "react-helmet";
import classes from "./Blog.module.scss";

const blog = () => {
  return (
    <div className={classes.Blog}>
      <Helmet>
        <title>Marine Science Adventures Blog</title>
        <meta name="description" content="" />
      </Helmet>
      
      <div className={classes.SimpleTop}>
        <h1>Marine Science Adventures Blog</h1>
      </div>
      
      <div className={classes.BlogListBody}>
        {/* <div className={classes.med2Def}> */}
          {/* <div id="dib-posts" className={classes.blogCaller}></div> */}
          {/* <div id="dib-categories"></div> */}
          {/* <div id="dib-authors"></div> */}
          
          {/* THIS GOES WHERE 'RECENT POSTS' SHOW - LIST OR OTHER
          <div id="dib-recent-posts"></div> 
          <div id="dib-recent-post-list"></div>
          */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default blog;
