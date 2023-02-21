import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]); //[value, setValue]
  const [filteredMonsters, setFilterMonsters] = useState(monsters); //[value, setValue]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users) ); 
  }, []);

  useEffect(() => {
    console.log('rendered');
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex React</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monster'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />

    </div>
  );
};


export default App;
