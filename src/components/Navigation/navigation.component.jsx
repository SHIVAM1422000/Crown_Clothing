import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utility";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// Using Styled Component :
import "./navigation.styles.js";
import { NavigationContainer, NavLinkContainer, LogoContainer, NavLink } from "./navigation.styles.js";
//using react-redux
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store /user/user.selector";
import { selectIsCartOpen } from "../../store /cart/cart.selector";


const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>

        

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )} 

          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
