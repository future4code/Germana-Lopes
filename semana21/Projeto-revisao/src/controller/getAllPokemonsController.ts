import { Request, Response } from "express"
import { allPokemons } from "../business/getAllPokemons"

export const getAllPokemonsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.query.id)
    const Name = String(req.query.Name || "%")
    const Evolution_Stage = String(req.query.Evolution_Stage || "%")
    const Type1 = String(req.query.Type1 || "%")

    const resultsPerPage = 10
    let page = Number(req.query.page)
    const offset = resultsPerPage * (page - 1);

    let result = await allPokemons(id, Name as string, Evolution_Stage as string, Type1 as string, resultsPerPage, offset)

    res.send(result)

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error)
  }

}