
import './App.css';
import React , {Component} from 'react'
import { CardList } from './components/card-list/card-list.component';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ''
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

  async onChange(e) {
    await this.setState({
      searchField : e.target.value
    })

    console.log(this.state.searchField)
  }


  render() {

    const {monsters , searchField } = this.state;

    const FilteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => this.onChange(e)} />
        <CardList monsters={FilteredMonsters} />
      </div>
    );
  }
}

export default App;
