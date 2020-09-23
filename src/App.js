import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
