
import './App.css';
import React , {Component} from 'react'
import { CardList } from './components/card-list/card-list.component';


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
        <CardList name="Yassine"> 
        {
          this.state.monsters.map(monster => (
            <p key={monster.id}>{`${monster.name}`}</p>
          ))    
        }
        </CardList>
      </div>
    );
  }
}

export default App;
