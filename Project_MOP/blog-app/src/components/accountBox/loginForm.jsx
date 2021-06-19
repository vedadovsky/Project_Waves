import React, { useContext } from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import Axios from 'axios';
import {useEffect} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  let history = useHistory();
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  Axios.defaults.withCredentials = true;
  
  
  const login =() =>{
    Axios.post('http://localhost:3001/login',{
      email:email,
      password:password
    }).then((response)=>{
      if(response.data.message){
        alert(response.data.message)
      }
      else{
        history.push("/blog");
      }
    })
  }


  useEffect(() => {
   Axios.get("http://localhost:3001/login").then((response)=>{
     console.log(response);
   })
  }, [])

  const myFunction =()=>{
    alert("TODO");
  }
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <Input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={myFunction}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={login} >Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignup}>
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Register
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
