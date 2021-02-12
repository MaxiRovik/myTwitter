import React from 'react';

import Button from 'react-bootstrap/Button';
import './post-status-filter.scss';

const PostStatusFilter = () => {
    return (
            <div className = "  btn-group-sm" >
                <Button variant="outline-info">Info</Button>{' '}
                
                <button type ='button' className = 'btn  btn-info'>Все</button>
                <button type ='button' className = 'btn  btn-outline-secondary '>Понравилось</button>
            </div>
    )
}

export default PostStatusFilter;