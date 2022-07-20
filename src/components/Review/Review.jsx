import axios from 'axios';
import React, { useState }  from 'react';
import{useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './Review.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Review(){
    const history = useHistory()
  
    const answerData= useSelector(store=> store.answerData)
 //POST to the database
    const submitFeedback = (event) => {
        console.log('Here is the answerData from the store', answerData);
        event.preventDefault();
        const newFeedback=Object.assign(...answerData)
        console.log('Here is the newFeedback', newFeedback)
        axios.post('/feedback', newFeedback)
        .then(response =>{
            handleNextButton()
        })
        .catch(error=>{
            console.log('Error in axios.post', error)
            alert('Error in post', error)
        })
        
      }

  //handle button click when the 'Next' button is pressed and go to the next page
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/feedback')
    }
 {/* page 5: Review */}

return(
      
    
       
        <div>
          <h2>Review your Feedback</h2>
        {/* loop through the answers */}
     
        
      <table>
        <thead>
          <tr className="table-header">
            <th>How are you feeling today?</th>
            <th>Understanding of the content?</th>
            <th>Do you feel supported?</th>
            <th>Any comments?</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>{answerData.map((answer, i) => (
          <td key={i}>{answer.feeling}
           {answer.understanding}
          {answer.support}
          {answer.comments}</td>
          ))}</tr>
        </tbody>
      </table>
     
      <Button variant="contained" 
          size=""
          onClick={submitFeedback}
          type="submit"
          button="true">
          Submit
        </Button>
      
      
        </div>


)
}

export default Review