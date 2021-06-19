import React, { useContext } from "react";
import {useState} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import Axios from 'axios';
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [usernameReg, setUsernameReg]=useState('');
  const [emailReg, setEmailReg]=useState('');
  const [passwordReg, setPasswordReg]=useState('');

  const register =() =>{
    Axios.post('http://localhost:3001/register',{
      username:usernameReg,
      email:emailReg,
      password:passwordReg
    }).then((response)=>{
      
    });
    alert("User has successfully been registered");
  }


// 
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
        <Input type="email" placeholder="Email" onChange={(e)=>{setEmailReg(e.target.value)}}/>
        <Input type="password" placeholder="Password" name="password1" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
        <Input type="password" placeholder="Confirm Password" name="password2" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.3em" />
      <SubmitButton type="submit" value="Submit" onClick={register} >Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignin}>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
