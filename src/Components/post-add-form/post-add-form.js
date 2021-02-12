import React from 'react';
import './post-add-form.scss'

const PostAddForm = () => {
    return(
<form className=  "bottom-panel d-flex align-items-center ">
    <input
        type="text"
        placeholder = "What are you thinking about?"
        className = "bottom-panel new-post-label "
    />
    <button
    type = "button"
    className = 'btn btn-sm  btn-outline-secondary'>
         Добавить </button>
</form>
    )
}

export default PostAddForm;