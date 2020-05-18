import React, { createContext, Component } from 'react';
import moment from 'moment';

//Client
import { getData, getFromFullUrl } from '../client'

//Partials
import { convertQueryString } from '../shared/partials'

//Data
import { results } from '../data/games.json'

export const GameListContext = createContext();

class GameListContextProvider extends Component {
    constructor(props){
        super(props)

        this.date = new Date()
        this.now = this.date.toJSON().substr(0,10);
        this.year = this.date.getFullYear()

        this.query = convertQueryString();
        this.titles = {
            "/": {
                title: "New Releases and Trending",
                query: "?discover=true&ordering=-relevance",
                type: "games"
            },
            "/query": {
                title: `Results for "${this.query.search}"`,
                query: `${window.location.search}`,
                type: "games"
            },
            "/most-antecipated": {
                title: "Most Antecipated",
                query: `?dates=${this.now},${this.handleDate(moment().add(6, 'month').calendar())}&ordering=-added`,
                type: "games"
            },
            "/new-releases": {
                title: "New Releases",
                query: `?dates=${this.handleDate(moment().subtract(2, 'month').calendar())},${this.now}&ordering=-added`,
                type: "games"
            },
            "/most-popular": {
                title: "Most Popular",
                query: `?dates=${this.year - 1}-01-01,${this.year}-01-01&ordering=-added`,
                type: "games"
            },
            "/upcoming": {
                title: "Upcoming Games",
                query: `?dates=${this.now},${this.handleDate(moment().add(2, 'years').calendar())}&ordering=-added`,
                type: "games"
            },
            "/browse/platforms": {
                title: "Platforms",
                query: "",
                type: "platforms"
            },
            "/browse/developers": {
                title: "Developers",
                query: "",
                type: "developers"
            },
            "/browse/publishers": {
                title: "Publishers",
                query: "",
                type: "publishers"
            },
            "/browse/genres": {
                title: "Genres",
                query: "",
                type: "genres"
            },
            "/browse/tags": {
                title: "Tags",
                query: "",
                type: "tags"
            }
        }
    }

    state = {
        games: [],
        next: null,
        loading: true
    }

    componentDidMount = () => {
        const path = window.location.pathname;
        const pathQuery = this.titles[path]

        window.addEventListener('scroll', this.detectBottom)

        this.setState({...this.state, loading: true})

        getData(pathQuery.type, pathQuery.query).then(({results, next}) => {
            this.setState({...this.state, games: results, next, loading: false})
        })
    }

    componentWillUnmount = () => window.removeEventListener('scroll', this.detectBottom)

    detectBottom = () => {
        const bodyHeight = document.body.scrollHeight - window.innerHeight;

        if(window.scrollY > bodyHeight - 500 && !this.state.loading) return this.refetch();
    }

    refetch = () => {
        this.setState({...this.state, loading: true})

        if(this.state.next) return getFromFullUrl(this.state.next).then(({results, next}) => this.setState({...this.state, games: [...this.state.games, ...results], next, loading: false}))
    }
    handleDate = (date) => {
        const dateSplit = date.split("/")
        const organizedArray = [dateSplit[2], dateSplit[0], dateSplit[1]].join("-");

        return organizedArray;
    }

    render(){
        return (
            <GameListContext.Provider value={{...this.state, titles: this.titles}}>
                {this.props.children}
            </GameListContext.Provider>
        )
    }
}

export default GameListContextProvider;