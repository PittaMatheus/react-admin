import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';

import './App.css';
import UserList from './user/UserList';
import { PokemonShow, PokemonCreate, pokemonEdit } from './pokemon/Pokemon';
import Dashboard from './Dashboard';
import pokemonProvider from './dataProvider'
import authProvider from './authProvider';


function App() {
  return (
    <Admin dataProvider={pokemonProvider} authProvider={authProvider}dashboard={Dashboard} >
      <Resource name="pokemons" show={PokemonShow} edit={pokemonEdit}create={PokemonCreate}list={UserList} icon={UserIcon} />
    </Admin>
  );
}

export default App;
