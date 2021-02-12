import React from 'react';
import './post-list-item.scss'

export default class PostListItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            important:false,
            like: false
        };

        this.onImportant  = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(({important}) => {
           return  {
           important: !important};
        })
    }

    onLike() {
        this.setState(({like}) => {
           return  {
           like: !like};
        })
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
        classNames += ' important';
        }

        if (like) {
        classNames += ' like';
        }

        return (
            <div className= {classNames}>
                <span className = "app-list-item-label like"
                      onClick = {this.onLike} >
                    {label}
                </span>
                <div className= "d-flex justify-conent-center align-item-center">
                    <button
                     type = "button" 
                     className = "btn-star btn-sm" 
                     onClick = {this.onImportant}>
                        <i className = "fa fa-star"></i>
                    </button>
                    <button
                     type = "button" 
                     className = "btn-trash btn-sm">
                        <i className = "fa fa-trash-o"></i>
                    </button>
                    <i className = "fa fa-heart"></i>
                </div>
        </div>
        ) 

        
    }
}




