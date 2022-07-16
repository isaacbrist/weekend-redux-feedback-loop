import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';

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

      <body>
<Router>
  <Route>
    <Feeling/>
  </Route>
  <Route>
    <Understanding/>
  </Route>
</Router>

        {/* Page 2: Understanding */}
        <div>
          <h4>How well are you understanding the content</h4>
        <form onSubmit={handleNextButton}>
        <input 
          required 
          placeholder="Rate on a scale of 1-10" 
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <button type="submit">
          Next
        </button>
      </form>
        </div>

        {/* Page 3: Support */}
        <div>
          <h4>How well are being supported?</h4>
        <form onSubmit={handleNextButton}>
        <input 
          required 
          placeholder="Rate on a scale of 1-10" 
          value={supported}
          onChange={(event) => setSupported(event.target.value)}
        />
        <button type="submit">
          Next
        </button>
      </form>
        </div>

        {/* Page 4: Any comments? */}
        <div>
          <h4>Any comments you want to leave?</h4>
        <form onSubmit={handleNextButton}>
        <input 
          required 
          placeholder="Leave any comments" 
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <button type="submit">
          Next
        </button>
      </form>
        </div>

        {/* page 5: Review */}
        <div>
          <h2>Review</h2>
        
        <ul>
          <li>
            Info
          </li>
        </ul>
        <button onSubmit={handleSubmitButton} type="submit">
          Submit
        </button>
      
        </div>


        {/* page 6: Click new feedback */}
        <div>
          <h2>Thank You!</h2>
        <form onSubmit={handleNewButton}>
        
        <button type="new">
          Leave new feedback
        </button>
      </form>
        </div>
      </body>
    </div>
  );
}

export default App;
