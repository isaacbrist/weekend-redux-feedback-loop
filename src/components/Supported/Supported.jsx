import React, { useState }  from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Supported(){
    const history = useHistory()
    const dispatch=useDispatch()
    const[supported, setSupported]=useState('')
 
    const addUnderstanding = (event) => {
        console.log(supported);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {support: supported}
        });
        handleNextButton()
      }
    
  //handle button click when the 'Next' button is pressed and go to the next page
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/comments')
    }
{/* Page 3: Support */}

return(
      

  <div>
    <h4>How well are being supported?</h4>
  <form onSubmit={addUnderstanding}>
   <input 
     required 
     placeholder="Rate on a scale of 1-10" 
     value={supported}
     onChange={(event) => setSupported(event.target.value)}
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

export default Supported