import React from 'react';

import PostListItem from '../post-list-item';
import ListGroup from 'react-bootstrap/ListGroup'

import './post-list.scss'


const PostList =({posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item; 
        return (
                <li key={id} className='list-group-item'>

                <PostListItem                             /* {id,...itemProps}/> -разворачиваем object spread operator*/ 
                 {...itemProps}
                  onDeleteClick={() =>onDelete(id)}
                  onToggleImportant = {() => onToggleImportant(id)}
                  onToggleLiked = {() => onToggleLiked(id)}/>

                </li>
        )
    });
    
    return (
        <ListGroup className = "app-list ">
           {elements}
        </ListGroup>
    )
}

export default PostList;