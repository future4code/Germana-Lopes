import { getPokemonById } from "../data/getPokemonById"
import { pokemonFilter } from "../data/pokemonFilter"

export const allPokemons = async (
    id: number,
    Name: string,
    Evolution_Stage: string,
    Type1: string,
    resultsPerPage: number,
    offset: number,
) => {

    try {
        let pokemonResult

        if (id) {
            pokemonResult = await getPokemonById(id)
        } else {
            pokemonResult = await pokemonFilter(Name, Evolution_Stage, Type1, resultsPerPage, offset)
        }

        return pokemonResult
    } catch (error) {
        console.log("Opa, algo deu errado!", error)

    }
}