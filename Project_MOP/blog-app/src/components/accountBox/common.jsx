import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(160, 160, 160, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(5, 41, 99);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(160, 160, 160, 0.3);
  padding: 0px 15px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  

  &::placeholder {
    color: rgba(160, 160, 160, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(160, 160, 160, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(5, 41, 99);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(5, 41, 99);
  background: linear-gradient(
    58deg,
    rgba(0, 72, 189, 1) 20%,
    rgba(5, 41, 99, 1) 100%
    
  );

  &:hover {
    filter: brightness(1.15);
  }
`;
