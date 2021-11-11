import { Pokemon } from "../business/entities/Pokemon"
import { connection } from "./connection"


export const getPokemonById = async (id: number): Promise<Pokemon> => {
  const [result] = await connection("case_pokemon")
    .where({ id })

  return new Pokemon(result.Name, result.Evolution_Stage, result.Type1, result.id)
}