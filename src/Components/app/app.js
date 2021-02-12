import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.scss';
import styled from 'styled-components';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock =styled(AppBlock)`
background-color: white;	
`

const App = () => {

    const data = [
        {label:'Going to learn React', important: true, id:'qwerty'},
        {label:'Have done', important: false, id:'qwertyu'},
        {label:'I am trying ', important: false, id:'qwertyui'}
    ];

    return (
    <StyledAppBlock>
        <AppHeader/>
        <div className = "search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts = {data}/>
        <PostAddForm/>
      
    </StyledAppBlock>
   
    )
}

export default App;