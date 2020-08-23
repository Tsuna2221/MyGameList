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
        loading: true,
        scrollHeight: 0,
        isHovering: false
    }

    
    // componentDidMount = () => setTimeout(() => {
    //     const game = { ...hollowData, similar: suggested.results, screenshots: screenshots.results, achievements: achievements.results };

    //     this.setState({...this.state, loading: false, game})
    // }, 2000);

    setHoverStatus = (status) => {
        document.body.classList[status ? "add" : "remove"]("hovering")
        this.setState({...this.state, isHovering: status})
    }

    drawGame = () => {
        return this.setState({...this.state, loading: true}, () => getGameData(this.props.match.params.id).then(([game, achievements, similar, shots]) => this.setState({
            ...this.state, 
            game: { ...game, achievements: achievements.results, screenshots: shots.results, similar: similar.results }, 
            next: { achievements: achievements.next, similar: similar.next },
            loading: false
        })))
    }

    updateScrollHeight = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({...this.state, scrollHeight: (40 / 100) * window.scrollY})
        return false;
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.updateScrollHeight);

        this.drawGame()
    };

    componentWillUnmount = () => window.removeEventListener("scroll", this.updateScrollHeight);

    reRender = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
        return this.drawGame();
    };
    
    render(){
        return (
            <GamePageContext.Provider value={{...this.state, setHoverStatus: this.setHoverStatus, reRender: this.reRender}}>
                {this.props.children}
            </GamePageContext.Provider>
        )
    }
}

export default GamePageContextProvider;