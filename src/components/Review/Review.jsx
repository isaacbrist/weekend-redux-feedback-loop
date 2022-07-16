import axios from 'axios';
import React, { useState }  from 'react';
import{useSelector, u} from 'react-redux'
import {useHistory} from 'react-router-dom'
function Review(){
    const history = useHistory()
  
    const answerData= useSelector(store=> store.answerData)

    const submitFeedback = (event) => {
        console.log('Here is the answerData from the store', answerData);
        event.preventDefault();
        axios.post('/feedback', {...answerData})
        .then(response =>{
            handleNextButton()
        })
        .catch(error=>{
            console.log('Error in axios.post', error)
            alert('Your feedback is not required at this time')
        })
        
      }
    
  //handle button click when the 'Next' button is pressed
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/new-feedback')
    }
 {/* page 5: Review */}

return(
      
    
       
        <div>
          <h2>Review</h2>
        
        <ul>
        {answerData.map((answer, i) => (
          <li key={i}>{answer.feeling}
           {answer.understanding}
          {answer.support}
          {answer.comments}</li>
          ))}
          <li>
            
          </li>
        </ul>
        <button onSubmit={submitFeedback} type="submit">
          Submit
        </button>
      
        </div>


)
}

export default Review