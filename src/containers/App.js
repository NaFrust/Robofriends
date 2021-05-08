import React from 'react';
import Cardlist from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'
import './App.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        }
        
componentDidMount(){
    fetch('https://dummyapi.io/data/api/user?limit=10').then(response => response.json())
    .then(users => this.setState({robots: users}))
   
}

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1 className="tc">Cargando</h1> : 
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    
    }
    
   
}

export default App;