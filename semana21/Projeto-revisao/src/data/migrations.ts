import { connection } from "./connection";
import { pokemons } from "./PokemonInfo";

connection("case_pokemon")
    .insert(pokemons.map((pokemon: any) => {
        pokemon.Row_Value = pokemon.Row
        delete pokemon.Row
        return pokemon
    }))
    .then(() => { console.log("Pokemons inseridos com sucesso!") })
    .catch(error => console.log(error.sqlMessage))
    .finally(() => { connection.destroy() })