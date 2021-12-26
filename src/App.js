import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : []
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
      res => res.json()
    )
    .then(res => this.setState({
      monsters : res
    } , () => console.log(this.state.monsters))
    )

  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <p key={monster.id}>{`${monster.name}`}</p>
          ))    
        }
      </div>
    );
  }
}

export default App;
