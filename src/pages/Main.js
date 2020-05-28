import React from 'react';

//Components
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

const Main = () => (
    <div className="content list d-flex mar-h-60">
        <Content/>
        <Sidebar/>
    </div>
)

export default Main;