import React from 'react';

//Components
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

const Main = () => (
    <div className='Main'>
        <Header/>
        <div className="content d-flex mar-h-60">
            <Content/>
            <Sidebar/>
        </div>
    </div>
)

export default Main;