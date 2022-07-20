import React, { useState }  from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Comments.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Comments(){
    const history = useHistory()
    const dispatch=useDispatch()
    const[comment, setComments]=useState('')
 //dispatch comment
    const addComment = (event) => {
        console.log(comment);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {comments: comment}
        });
        handleNextButton()
      }
    
  //handle button click when the 'Next' button is pressed and go to the next page
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/review')
    }
{/* Page 4: Any comments? */}

return(
      

  <div>
    <h4>Any comments you want to leave?</h4>
    <Box
component="form"
onSubmit={addComment}
sx={{
  '& > :not(style)': { m: 1, width: '25ch', height: '7ch' },
}}
validate
autoComplete="off"
>
{/* Text Field */}
<TextField id="filled-basic" 
        placeholder="Write your comments" 
        value={comment}
        onChange={(event) => setComments(event.target.value)}
        label="Comment" 
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

export default Comments