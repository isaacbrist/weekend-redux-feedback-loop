import React, { useState }  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
      
function Feedback(){
  const history = useHistory()
  const dispatch=useDispatch()
  

  const newFeedback = (event) => {
      event.preventDefault();
      dispatch({
        type: 'CLEAR_ALL_ANSWERS'
      });
      handleNewButton()
    }
  
//handle button click when the 'Next' button is pressed
const handleNewButton=()=>{
  console.log('You clicked the button!')
  history.push('/feeling')
  }
  
     {/* page 6: Click new feedback */}
    return(


       
        <div>
          <h2>Thank You!</h2>
        <form onSubmit={newFeedback}>
        
        <button type="new">
          Leave new feedback
        </button>
      </form>
        </div>
)}
        export default Feedback