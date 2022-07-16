import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';

function App() {
  const dispatch=useDispatch();

  useEffect(() => {

  }, [] );
  //handle button click when the 'Next' button is pressed
const handleNextButton=()=>{
console.log('You clicked the button!')
history.push('/Understanding')
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main>
<Router>
      <ul>
        <li>
          <Link to="/feeling">Feeling</Link>
        </li>
      </ul>
  <Route exact path="/feeling">
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
</Router>


      </main>
    </div>
  );
}

export default App;
