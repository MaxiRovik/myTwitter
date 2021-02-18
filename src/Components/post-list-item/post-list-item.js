import React from 'react';
import './post-list-item.scss'

export default class PostListItem extends React.Component {

   

    render() {
        const {label, onDeleteClick, onToggleLiked, onToggleImportant, important, like} = this.props;
       

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
                      onClick = {onToggleLiked} >
                    {label}
                </span>
                <div className= "d-flex justify-conent-center align-item-center">
                   
                    <button
                     type = "button" 
                     className = "btn-star btn-sm" 
                     onClick = {onToggleImportant}>
                        <i className = "fa fa-star"></i>
                    </button>

                    <button
                     type = "button" 
                     className = "btn-trash btn-sm"
                     onClick = {onDeleteClick}>
                         
                        <i className = "fa fa-trash-o"></i>
                    </button>

                    <i className = "fa fa-heart"></i>
                </div>
        </div>
        ) 

        
    }
}




