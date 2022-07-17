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

//beginning of a MUI text box.
//     
//     <Box
//   component="form"
//   sx={{
//     '& > :not(style)': { m: 1, width: '25ch' },
//   }}
//   noValidate
//   autoComplete="off"
// >

//   <TextField id="filled-basic" label="Filled" variant="filled" />

// </Box>



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
        <Button variant="contained" 
          type="submit"
          button="true">
          Next
        </Button>
      
      </form>
        </div>
        
)
}

export default Feeling