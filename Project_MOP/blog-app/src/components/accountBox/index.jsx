import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import waves from "./assets/waves.svg";

const BoxContainer = styled.div`
  width: 500px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 237px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 180%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(900deg);
  top: -330px;
  left: -270px;
  background: rgb(5, 41, 99);
  background: linear-gradient(
    58deg,
    rgba(5, 41, 99, 1) 20%,
    rgba(0, 72, 189, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img.attrs(props => ({
  src: props.Img || waves,
}))`
float:right;
  z-index: 10;
  width: 135px;
  height:110px;
`;

const HeaderText = styled.h2`
  font-size: 31px;
  font-weight: 600;
  line-height: 1.28;
  color: #fff;
  z-index: 10;
  margin: 0px;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
  z-index: 10;
  margin: 0;
  margin-top: 10px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const LeftD = styled.div`
display: inline-block;
width: 50%; 
float:left;
`;

const RightD = styled.div`
display: inline-flex;
float:right;
`;

const GeneralDiv = styled.div`
`;

const backdropVariants = {
  expanded: {
    width: "203%",
    height: "1050px",
    borderRadius: "50%",
    transform: "rotate(770deg)",
  },
  collapsed: {
    width: "180%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(900deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.4,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <GeneralDiv>
            <LeftD>
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please login to continue!</SmallText>
            </HeaderContainer>
            </LeftD>
            <RightD>
              <Image></Image>
            </RightD>
            </GeneralDiv>
            
          )}
          {active === "signup" && (
            <GeneralDiv>
            <LeftD>
            <HeaderContainer></HeaderContainer>
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please register to continue!</SmallText>
            </HeaderContainer>
            </LeftD>
            <RightD>
              <Image></Image>
            </RightD>
            </GeneralDiv>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
