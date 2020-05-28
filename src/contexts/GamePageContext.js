import React, { createContext, Component } from 'react';

//Client
import { getGameData } from '../client'

//Data
import hollowData from '../data/hollow-knight.json' 
import achievements from '../data/achievements.json' 
import suggested from '../data/suggested.json' 
import screenshots from '../data/screenshots.json' 

export const GamePageContext = createContext();

class GamePageContextProvider extends Component {
    state = {
        // game: {...hollowData, screenshots: screenshots.results, achievements: achievements.results}, 
        game: {},
        similar: [...suggested.results],
        next: {},
        loading: true
    }

    // componentDidMount = () => setTimeout(() => {
    //     const game = {...hollowData, screenshots: screenshots.results, achievements: achievements.results};

    //     this.setState({...this.state, loading: false, game})
    // }, 2000);


    componentDidMount = () => getGameData(this.props.match.params.id).then(([game, achievements, similar, shots]) => this.setState({
        ...this.state, 
        game: { ...game, achievements: achievements.results, screenshots: shots.results }, 
        next: { achievements: achievements.next, similar: similar.next },
        loading: false
    }))
    
    render(){
        return (
            <GamePageContext.Provider value={{...this.state}}>
                {this.props.children}
            </GamePageContext.Provider>
        )
    }
}

export default GamePageContextProvider;