import React, { useState }  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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


  //  {/* page 1: Feeling */}
    
return(
    <div>
      {/* beginning of a MUI text box. */}
      <h4>How are you feeling today?</h4>
    <Box
  component="form"
  onSubmit={addFeeling}
  sx={{
    '& > :not(style)': { m: 1, width: '25ch', height: '7ch' },
  }}
  validate
  autoComplete="off"
>
{/* Text Field */}
  <TextField id="filled-basic" 
          required 
          placeholder="Rate on a scale of 1-10" 
          value={feelings}
          onChange={(event) => setFeelings(event.target.value)}
          label="Feeling" 
          variant="filled" />
        <Button variant="contained" 
          type="submit"
          button="true">
          Next
        </Button>
      
</Box>
        </div>     
)
}

export default Feeling