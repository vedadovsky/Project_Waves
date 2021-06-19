import React from 'react'
import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import Axios from 'axios';
import {useState} from 'react';
import { useHistory } from 'react-router';
import { 
    BodyForm,
    HeaderForm, 
    HeaderWave,
    PathWave,
    Image,
    MainForm,
    LinkNav,
    BlogContainer,
    PostInfo,
    BlogBox } from "./common";

function Post() {


    let {postID} = useParams('');
    let history = useHistory('');

    const [post,setPost] = useState({});
    useEffect(() => {
        Axios.get(`http://localhost:3001/getID/${postID}`).then((data)=>{
            setPost({title:data.data[0].title, postText:data.data[0].post_text})
        })
    }, [postID])

    
  const homePage=()=>{
    history.push("/blog")
}

    return (
        
<BodyForm>
    <HeaderForm>
        <Image onClick={homePage}></Image>
        <LinkNav href="/createBlog">Create New Post</LinkNav>
        <HeaderWave xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 320"><PathWave fill="rgba(5, 41, 99, 1)"
        fill-opacity="1" d="M0,160L30,181.3C60,203,120,245,180,224C240,203,300,117,360,112C420,107,480,181,540,186.7C600,192,660,128,720,122.7C780,117,840,171,900,176C960,181,1020,139,1080,149.3C1140,160,1200,224,1260,234.7C1320,245,1380,203,1410,181.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></PathWave></HeaderWave>         
    </HeaderForm>

    <MainForm>
        <BlogContainer>
            <BlogBox >
                <PostInfo>
                    <h1>{post.title}</h1>
                    <p>{post.postText}</p>
                </PostInfo>
        </BlogBox>
        </BlogContainer>
        </MainForm>
        
</BodyForm>
    )
}

export default Post
