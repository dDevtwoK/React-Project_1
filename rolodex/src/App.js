import './App.css';
import React, { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  changedHandler(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Cats Rolodex</h1>
        <SearchBox
          placeholder='search cats'
          changedHandler={this.changedHandler.bind(this)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
