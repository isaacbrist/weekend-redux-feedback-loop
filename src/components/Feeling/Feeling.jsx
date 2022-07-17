import React, { useState }  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
function Feeling(){
  const history = useHistory()
    const dispatch=useDispatch()
    const[feelings, setFeelings]=useState('')
 //dispatch
    const addFeeling = (event) => {
        console.log(feelings);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {feeling: feelings}
        });
        handleNextButton()
      }
    
  //handle button click when the 'Next' button is pressed and go to the next page
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/understanding')
    }
    
return(
    <div>
        {/* page 1: Feeling */}
        
          <h4>How are you feeling today?</h4>
        <form onSubmit={addFeeling}>
        <input 
          required 
          placeholder="Rate on a scale of 1-10" 
          value={feelings}
          onChange={(event) => setFeelings(event.target.value)}
        />
        <button type="submit">
          Next
        </button>
      </form>
        </div>
        
)
}

export default Feeling