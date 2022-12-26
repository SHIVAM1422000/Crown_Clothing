import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utility'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utility';


function SignIn() {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  } 

  return (
    <div>
       <h1>I am Sign In Page Radhey..!!</h1>
       <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  )
}

export default SignIn