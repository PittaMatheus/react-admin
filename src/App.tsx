import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'

// import { createHashHistory } from 'history';
import jsonServerProvider from 'ra-data-json-server';
import  UserList from './user/UserList';
import  { PostList } from './PostList';

import UserIcon from '@material-ui/icons/Group';
import pokemonProvider from './dataProvider'
import './App.css';

// const pokemonProvider = simpleRestProvider('https://pokeapi.co/api/v2/')
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const history = createHashHistory();

function App() {
  return (
    // <Admin dataProvider={dataProvider}>
    <Admin dataProvider={pokemonProvider}>
      <Resource name="pokemons" list={UserList} icon={UserIcon}/>
      {/* <Resource name="posts" list={PostList} /> */}
      {/* <Resource name="users" list={UserList} icon={UserIcon}/> */}

</Admin>
  );
}

export default App;
