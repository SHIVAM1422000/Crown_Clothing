import { useState } from "react";
import Button from "../buttons/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utility";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: ""
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;
  const {setCurrentUser} = useContext(UserContext);
 
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const {user}=await signInAuthUserWithEmailAndPassword(email , password);
      console.log("Sign In Successful");
      setCurrentUser(user);
      resetFormFields();

    } catch (error) {

      if(error.code==="auth/wrong-password"){
        alert("Wrong Password");
      }else if(error.code==="auth/user-not-found"){
        alert("User Not Found");
      }else if(error.code==="auth/too-many-requests"){
        alert("Too many requests. Please try again after few seconds");
      }else{
        console.log("Error while signing in" , error);
      }
      

    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      // const userDocRef = 
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("Error while registring the user in the db ", error);
    }
  };


  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign-In with your email and password</span>
      <form onSubmit={handleSubmit}>
  

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

    <div className="buttons-container">
       <Button type="submit" text={"Sign In"}/>
       <Button type="button" onClick={logGoogleUser} buttonType={"google"} text={"Google Sign In"}/>
        
    </div>
    
      </form>
    </div>
  );
};

export default SignIn;
