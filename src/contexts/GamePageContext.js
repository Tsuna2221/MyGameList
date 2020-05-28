import React, { createContext, Component } from 'react';

//Client
import { getGameData } from '../client'

//Data
// import hollowData from '../data/hollow-knight.json' 
// import achievements from '../data/achievements.json' 
// import screenshots from '../data/screenshots.json' 
// import suggested from '../data/suggested.json' 

export const GamePageContext = createContext();

class GamePageContextProvider extends Component {
    state = {
        game: {},
        next: {},
        loading: true
    }

    // componentDidMount = () => setTimeout(() => {
    //     const game = { ...hollowData, similar: suggested.results, screenshots: screenshots.results, achievements: achievements.results };

    //     this.setState({...this.state, loading: false, game})
    // }, 2000);

    drawGame = () => {
        return this.setState({...this.state, loading: true}, () => getGameData(this.props.match.params.id).then(([game, achievements, similar, shots]) => this.setState({
            ...this.state, 
            game: { ...game, achievements: achievements.results, screenshots: shots.results, similar: similar.results }, 
            next: { achievements: achievements.next, similar: similar.next },
            loading: false
        })))
    }

    componentDidMount = () => this.drawGame();

    reRender = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
        return this.drawGame();
    };
    
    render(){
        return (
            <GamePageContext.Provider value={{...this.state, reRender: this.reRender}}>
                {this.props.children}
            </GamePageContext.Provider>
        )
    }
}

export default GamePageContextProvider;