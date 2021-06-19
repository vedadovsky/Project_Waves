import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Blog from "./components/mainPage/blog";
import Post from "./components/mainPage/post";
import CreateBlog from "./components/mainPage/createBlog";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background:#d3d3d3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
          <AccountBox />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/createBlog">
          <CreateBlog />
          </Route>
          <Route path="/post/:postID">
          <Post/>
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
