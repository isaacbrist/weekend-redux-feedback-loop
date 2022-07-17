import React, { useState }  from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Understanding(){
    const history = useHistory()
    const dispatch=useDispatch()
    const[understanding, setUnderstanding]=useState('')
 
    const addUnderstanding = (event) => {
        console.log(understanding);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {understanding: understanding}
        });
        handleNextButton()
      }
    
  //handle button click when the 'Next' button is pressed and go to the next page
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/supported')
    }
    //beginning of back button. 
    // const handleBackButton=()=>{
    //   console.log('You clicked the back button!')
    //   history.push('/')
    //   }
    //   <Button variant="contained"
    //       onClick={handleBackButton} 
    //       type="back"
    //       button="false">
    //       back
    //     </Button>
      {/* Page 2: Understanding */}
return(
      
        <div>
          <h4>How well are you understanding the content</h4>
          
          
        <form onSubmit={addUnderstanding}>
        
        <input 
          required 
          placeholder="Rate on a scale of 1-10" 
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <Button variant="contained" 
          type="submit"
          button="true">
          Next
        </Button>
      </form>
        </div>

)
}

export default Understanding 