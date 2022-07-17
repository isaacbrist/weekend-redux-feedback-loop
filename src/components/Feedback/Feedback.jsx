import React, { useState }  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
      
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
  
//handle button click when the 'Next' button is pressed  and start a new feedback
const handleNewButton=()=>{
  console.log('You clicked the button!')
  history.push('/')
  }
  
     {/* page 6: Click new feedback */}
    return(


       
        <div>
          <h2>Thank You!</h2>
        <form onSubmit={newFeedback}>
        <Button variant="contained" 
          type="new"
          button="true">
           Leave new feedback
        </Button>
      </form>
        </div>
)}
        export default Feedback