import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';

import './App.css';
import UserList from './user/UserList';
import { PostList } from './PostList';
import { PokemonShow } from './pokemon/PokemonShow';

import pokemonProvider from './dataProvider'


function App() {
  return (
    <Admin dataProvider={pokemonProvider}>
      <Resource name="pokemons" show={PokemonShow} list={UserList} icon={UserIcon} />
      {/* <Resource name="posts" list={PostList} /> */}
      {/* <Resource name="users" list={UserList} icon={UserIcon}/> */}

    </Admin>
  );
}

export default App;
