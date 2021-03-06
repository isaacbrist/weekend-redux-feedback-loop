import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Feedback from '../Feedback/Feedback';
function App() {
  const dispatch=useDispatch();

  useEffect(() => {

  }, [] );

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main>
<Router>
  <Route exact path="/">
    <Feeling  />
  </Route>
  <Route exact path="/understanding">
    <Understanding />
  </Route>
  <Route exact path="/supported">
    <Supported />
  </Route>
  <Route exact path="/comments">
    <Comments />
  </Route>
  <Route exact path="/review">
    <Review />
  </Route>
  <Route exact path="/feedback">
    <Feedback />
  </Route>
</Router>


      </main>
    </div>
  );
}

export default App;
