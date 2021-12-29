// const dataProvider = {
import { Identifier } from 'react-admin'
import Axios, { AxiosError } from 'axios'

export interface IGetListParams {
    pagination: {
        perPage: number,
        page: number
    };
    sort: any;
    filter: any;
    id: number;
}


export interface IPokemon {
    id: Identifier
    description: string
}



const getPokemonList = async (params: IGetListParams) => {
    const resp = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=" + params.pagination.perPage + "&offset=" + params.pagination.page)
    let pokemons = resp.data.results;
    let totalPokemons = resp.data.count
    const getListPokemon = pokemons.map((i: any, idx: number) => ({ id: i.url.split("/")[6], name: i.name, url: i.url }))
    return { data: getListPokemon, total: totalPokemons }
}


const getPokemon = async (params: IGetListParams) => {
    const resp = await Axios.get("https://pokeapi.co/api/v2/pokemon/" + params.id)
    const pokemon = resp.data;
    return { data: pokemon }    
}



const pokemonProvider: any = {
    params: { pagination: '', sort: '', filter: '' },
    getList: async (_resource: any, params: any) => {
        try {
            const pokemonList = await getPokemonList(params || '')
            return pokemonList
        } catch (error: any) {
            throw getError(error)
        }
    },
    getOne: async (_resource: any, params: any) => {
        try {
            const pokemon = await getPokemon(params || '')
                return pokemon;
        } catch (error: any) {
            throw getError(error)
        }
    }
}

const getError = (error: AxiosError) => {
    if (error.response) {
        return new Error('Pokemon: Erro ao buscar as informações.')
    }
    return new Error('Pokemon: Erro na requisição. Por favor, tente novamente.')
}


export default pokemonProvider;