import React, {Component} from 'react';
import './post-add-form.scss'

export default class PostAddForm  extends Component {
   constructor(props) {
       super(props);
       this.state = {
            text: ''
       }
       this.onValueChange=this.onValueChange.bind(this);
       this.onSubmit=this.onSubmit.bind(this)
   }
   
onValueChange(e) {
    this.setState({
        text: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({
        text: ''
    });
}

render () {
    return (
        <form 
            
            className=  "bottom-panel d-flex align-items-center "
            onSubmit = {this.onSubmit}>

            <input
                type="text"
                placeholder = "What are you thinking about?"
                className = "bottom-panel new-post-label "
                onChange = {this.onValueChange}
                value= {this.state.text}
               
            />
            <button
                type = "submit"
                className = 'btn btn-sm  btn-outline-secondary'>
                    Добавить 
            </button>
        </form>
        )
}
}

  

