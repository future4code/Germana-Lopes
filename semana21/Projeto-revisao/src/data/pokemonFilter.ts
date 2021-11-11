import { Pokemon } from "../business/entities/Pokemon"
import { connection } from "./connection"
import { pokemons } from "./PokemonInfo"

export const pokemonFilter = async (
  Name: string,
  Evolution_Stage: string,
  Type1: string,
  resultsPerPage: number,
  offset: number,
): Promise<Pokemon[]> => {

  const result = await connection("case_pokemon")
    .where("Name", "LIKE", `%${Name}%`)
    .andWhere("Evolution_Stage", "LIKE", `%${Evolution_Stage}%`)
    .andWhere("Type1", "LIKE", `%${Type1}%`)
    .limit(resultsPerPage)
    .offset(offset)

  return result.map(pokemons => {
    return new Pokemon(pokemons.Name, pokemons.Evolution_Stage, pokemons.Type1, pokemons.id)
  })
}