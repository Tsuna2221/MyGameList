import React, { Component } from 'react';

//Contexts
import { GameListContext } from '../contexts/GameListContext'

class GameContent extends Component {
    static contextType = GameListContext;

    render() {
        return (
            <div className="content d-flex mar-h-60">
    
            </div>
        );
    }

    state = {

    }

    componentDidMount = () => {
        const { context: { gameDataQuery }, props: { match: { params: { id } } } } = this;

        gameDataQuery(id).then(res => console.log(res, this))
    }
}

export default GameContent;