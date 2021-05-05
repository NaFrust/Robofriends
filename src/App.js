import React from 'react';
import Cardlist from './CardList.js';
import SearchBox from './SearchBox.js'
import { robots } from './robots';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        }
        

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Cardlist robots={filteredRobots}/>
            </div>
        );
    }
    
   
}

export default App;