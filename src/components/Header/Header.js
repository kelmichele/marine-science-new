import React, { Component } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/logo-ms.png";
import logoHome from "../../assets/images/logo-msLt.png";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../../components/Drawer/Drawer";

class Header extends Component {
  render() {
    // if (window.location.pathname === '/') return null;

    return (
      <div className={[classes.Header, classes[this.props.HeaderType]].join(' ')}>
        <div className={classes.MobTopbar}>
          <Link to="/book-now" className={classes.MbBtn}>Book Now!</Link>
        </div>
        
        <header className={classes.HeaderDiv}>
          <div className={classes.LogoHd}>
            <Link className={[classes.logoLink, classes.norm].join(' ')} to="/"><img src={logo} alt="Marine Science Adventures Logo" className={classes.LogoImg} /></Link>
            <Link className={[classes.logoLink, classes.HomeLogo].join(' ')} to="/"><img src={logoHome} alt="Marine Science Adventures Logo" className={classes.LogoImg} /></Link>
          </div>

          <Link to="/book-now" className={classes.bookBtn}>Book Now!</Link>

          <nav className={classes.navbarWrap} data-uk-navbar="mode: hover">
            <div className={classes["uk-navbar-center"]}>
              <ul className={["uk-navbar-nav", classes.custNav].join(' ')}>
                <NavigationItems dropType={this.props.HeaderType} />
              </ul>
            </div>
          </nav>

          <div className={classes.NavMobileBtn}><TemporaryDrawer /></div>
        </header>
      </div>
    );
  }
}
export default Header;