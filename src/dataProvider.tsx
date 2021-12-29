// const dataProvider = {
import React, { FC, useEffect } from 'react'
import { DataProvider, Record, GetListResult, Identifier } from 'react-admin'
import Axios, { AxiosError } from 'axios'

interface Props {
    record: Record
}

export interface IGetListParams {
    pagination: {
        perPage: number,
        page:number
    };
    sort: any;
    filter: any;
}


export interface IPokemon {
    id: Identifier
    description: string
}

const getPokemons = async (params: IGetListParams) => {
    console.log(params)
    let filter = "limit=" + params.pagination.perPage + "&offset=" + params.pagination.page

    let resp = await Axios.get("https://pokeapi.co/api/v2/pokemon?"+ filter)
    let pokemons = resp.data.results;
    let totalPokemons = resp.data.count
    const getListPokemon = pokemons.map((i: any, idx: number) => ({ id: idx, name: i.name, url: i.url }))
    return { data: getListPokemon, total: totalPokemons }
}

const pokemonProvider: any = {
    params: { pagination: '', sort: '', filter: '' },
    getList: async (_resource: any, params: any) => {
        try {
            console.log(params)
            const pokemon = await getPokemons(params || '')
            return pokemon
        } catch (error: any) {
            throw getError(error)
        }
    }
}

const getError = (error: AxiosError) => {
    if (error.response) {
        return new Error('Adquirência: Erro ao buscar as informações.')
    }

    return new Error('Adquirência: Erro na requisição. Por favor, tente novamente.')
}


export default pokemonProvider;