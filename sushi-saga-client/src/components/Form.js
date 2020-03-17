import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>Add to balance:</label>
            <input type='text' name='balance' placeholder='Number to add to balance'/>
            <input type='submit' value='Submit'  />
        </form>
    )
}

export default Form