import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utility";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  
  // const signOutHandler = async () => {
  // const response = await signOutUser();
  //  } 

  // currentUser ? console.log("There is a user") : console.log("There is no user");
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          { currentUser ? (
            <span className="nav-link" onClick={signOutUser}> SIGN OUT </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
