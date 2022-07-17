import React, { useState }  from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './Comments.css'
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
  <form onSubmit={addComment}>
  <textarea
   className='input-field'
   placeholder="Leave any comments" 
   value={comment}
   onChange={(event) => setComments(event.target.value)}
   style={{fontSize: '1.2em'}}>
</textarea>
   <button type="submit">
   Next
   </button>
   </form>
  </div>
)
}

export default Comments