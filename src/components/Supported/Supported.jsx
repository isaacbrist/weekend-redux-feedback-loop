import React, { useState }  from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
function Supported(){
    const history = useHistory()
    const dispatch=useDispatch()
    const[supported, setSupported]=useState(0)
 
    const addUnderstanding = (event) => {
        console.log(supported);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {support: supported}
        });
        handleNextButton()
      }
    
  //handle button click when the 'Next' button is pressed
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
   <button type="submit">
   Next
   </button>
   </form>
  </div>
)
}

export default Supported