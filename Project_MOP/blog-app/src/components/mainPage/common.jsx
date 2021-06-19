import styled from "styled-components";
import waves_logo from "./assets/waves_logo.svg"


export const BodyForm = styled.div`
    width:100%;
    height:100%;
    background: #fff;
`;

export const HeaderWave = styled.svg`

`;

export const InputCreate = styled.input`
    width:85%;
    height:50px;
    margin:10px;
    border: 2px solid rgba(5, 41, 99, 1);
    border-radius:15px;
    font-size:16px;
    margin-top:0px;

    &::placeholder {
        color:rgba(0, 72, 189, 1);
      }
`;

export const TxtCreate = styled.textarea`
    width:85%;
    height:60%;
    margin:10px;
    border: 2px solid rgba(5, 41, 99, 1);
    border-radius:15px;
    font-size:14px;
    resize:none;

    &::placeholder {
        color:rgba(0, 72, 189, 1);
      }
`;

export const CreatePost = styled.div`
display:flex;
justify-content:center;
align-items:center;

`;

export const UploadPost = styled.div`
display:flex;
flex-direction:column;
height:450px;
width:500px;
border: 2px solid rgba(5, 41, 99, 1);
border-radius:15px;
justify-content:center;
align-items:center;
background: rgb(5, 41, 99);
background: linear-gradient(
  58deg,
  rgba(0, 72, 189, 1) 20%,
  rgba(5, 41, 99, 1) 100%
  
);

`;

export const PathWave = styled.path `
    z-index: 1;
`;

export const Image = styled.img.attrs(props => ({
    src: props.Img || waves_logo,
  }))`
  float:left;
    position:absolute;
    z-index: 10;
    width: 320px;
    height:90px;
    cursor:pointer;
  `;

export const LinkNav = styled.a`
  
  font-family: cursive;
  font-size:25px;
  right:0;
  padding:40px;
  position:absolute;
  color:#fff;
  text-decoration:none;
  
  &:hover {
    cursor:pointer;
    color:yellow;
  }
`;

export const LikerUp = styled.a`

  font-size:40px;
  margin-bottom:0px;
  height:35px;
  
  &:hover {
    cursor:pointer;
    color:yellow;
  }
`;

export const LikerDown = styled.a`

  font-size:40px;
  height:50px;
  
  &:hover {
    cursor:pointer;
    color:yellow;
  }
`;

export const Text = styled.h1`
height:35px;
`

export const UserNav = styled.a`
  
  font-family: cursive;
  font-size:25px;
  right:0;
  padding:40px;
  padding-right:350px;
  position:absolute;
  color:#fff;
  text-decoration:none;
  
  &:hover {
    cursor:pointer;
    color:yellow;
  }
`;

export const ExitButton = styled.a`
font-family: sans-serif;
color:white;
font-size:25px;
text-decoration:none;
right:0;
float:right;
z-index:10;
padding-left:90%;

`;

export const ButtonPost = styled.button `
width: 35%;
height:40px;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
background: #fff;
color: rgb(5, 41, 99);
color: linear-gradient(
  58deg,
  rgba(0, 72, 189, 1) 20%,
  rgba(5, 41, 99, 1) 100%
  
);

&:hover {
  filter: brightness(1.15);
}
`;

export const HeaderForm = styled.div`
    width:100%;
    height:30%;
`;

export const MainForm = styled.div`
width:100%
`;

export const BlogContainer = styled.div`
padding-top:15px;
display:flex;
justify-content:center;
`;

export const BlogBox = styled.div`
width:80%;
display:flex;
justify-content:center;
flex-direction:column;

`;

export const BlogInfo = styled.div`
border: 2px solid rgba(5, 41, 99, 1);
border-radius:15px;
height:auto;
display:flex;
padding:10px;
flex-direction:row;
margin-bottom:15px;

&:hover{
    cursor:pointer;
    transform: scale(1.03);
}
`;

export const PostInfo = styled.div`
border: 2px solid rgba(5, 41, 99, 1);
border-radius:15px;
height:auto;
padding:10px;
flex-direction:column;
margin-bottom:15px;
`;

export const BlogLikes = styled.div`
float:left;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-right: 3px solid rgba(5, 41, 99, 1);
height: 100%;
    width:12%
`;

export const BlogData = styled.div`
float:left;
    padding-left:10px;
    width:87%

`;