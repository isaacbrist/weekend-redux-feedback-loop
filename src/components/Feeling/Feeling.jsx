import React from 'react';
import{useSelector, useDispatch} from 'react-redux'

function Feeling(){
    const dispatch=useDispatch()
    const[feelings, setFeelings]=useState(0)
 
    const addFeeling = (event) => {
        console.log(product);
        event.preventDefault();
        dispatch({
          type: 'ADD_NEW_ANSWER',
          payload: {feeling: feelings}
        });
      }
    
  //handle button click when the 'Next' button is pressed
  const handleNextButton=()=>{
    console.log('You clicked the button!')
    history.push('/Understanding')
    }
    
return(
    <div>
        {/* page 1: Feeling */}
        
          <h4>How are you feeling today?</h4>
        <form onSubmit={handleNextButton}>
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