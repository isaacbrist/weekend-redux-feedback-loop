
      

        {/* Page 4: Any comments? */}
        <div>
          <h4>Any comments you want to leave?</h4>
        <form onSubmit={handleNextButton}>
        <input 
          required 
          placeholder="Leave any comments" 
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <button type="submit">
          Next
        </button>
      </form>
        </div>

        {/* page 5: Review */}
        <div>
          <h2>Review</h2>
        
        <ul>
          <li>
            Info
          </li>
        </ul>
        <button onSubmit={handleSubmitButton} type="submit">
          Submit
        </button>
      
        </div>


        {/* page 6: Click new feedback */}
        <div>
          <h2>Thank You!</h2>
        <form onSubmit={handleNewButton}>
        
        <button type="new">
          Leave new feedback
        </button>
      </form>
        </div>