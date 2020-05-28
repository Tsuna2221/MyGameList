import React, { createContext, Component } from 'react';

//Client
import { getGameData } from '../client'

//Data
import game from '../data/hollow-knight.json' 
import achievements from '../data/achievements.json' 
import suggested from '../data/suggested.json' 
import screenshots from '../data/screenshots.json' 

export const GamePageContext = createContext();

class GamePageContextProvider extends Component {
    state = {
        game: {...game, screenshots: screenshots.results}, 
        achievements: [...achievements.results], 
        similar: [...suggested.results],
        next: {},
        loading: true
    }

    componentDidMount = () => setTimeout(() => {
        this.setState({...this.state, loading: false})
    }, 2000);

    // componentDidMount = () => getGameData(this.props.match.params.id).then(([game, achievements, similar]) => this.setState({
    //     ...this.state, 
    //     game, 
    //     achievements: achievements.results, 
    //     similar: similar.results, 
    //     next: { achievements: achievements.next, similar: similar.next },
    //     loading: false,
    // }))
    
    render(){
        return (
            <GamePageContext.Provider value={{...this.state}}>
                {this.props.children}
            </GamePageContext.Provider>
        )
    }
}

export default GamePageContextProvider;