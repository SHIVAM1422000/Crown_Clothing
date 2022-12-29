import React from "react";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utility";
import Button from "../../components/buttons/button.component";
import './authentication.styles.scss'
function Authentication() {


  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
