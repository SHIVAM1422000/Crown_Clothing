import React from 'react'
import SignUp from '../../components/sign-up-form/sign-up-form.component';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utility'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utility';



function Authentication() {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    try{
      const userDocRef = await createUserDocumentFromAuth(user);

    }catch(error){
        console.log("Error while registring the user in the db "  , error);
    }
  } 

  return (
    <div>
       <h1>Already an User</h1>
       <button onClick={logGoogleUser}>Sign In With Google</button>
       <SignUp/>
    </div>
  )
}

export default Authentication