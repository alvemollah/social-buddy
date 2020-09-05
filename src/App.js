import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div>
      

      <Router>
        <Switch>
          
          <Route path="/home">
            <Main></Main>
          </Route>

          <Route path="/post/:postId">
              <PostDetail></PostDetail>
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
