import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [
        { 
          id : 1,
          name : 'Frankenstein'
        },
        { 
          id : 2,
          name : 'Zombie'
        },
        { 
          id : 3,
          name : 'Dracula'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <p key={monster.id}>{monster.name}</p>
          ))    
        }
      </div>
    );
  }
}

export default App;
