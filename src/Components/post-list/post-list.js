import React from 'react';

import PostListItem from '../post-list-item';
import ListGroup from 'react-bootstrap/ListGroup'

import './post-list.scss'


const PostList =({posts}) => {

    const elements = posts.map((item) => {
        /*const {id, ...itemProps} = item; */
        return (
                <li key={item.id} className='list-group-item'>
                <PostListItem                             /* {...itemProps}/> -разворачиваем object spresd operator*/ 
                  label={item.label} 
                  important={item.important}/>
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