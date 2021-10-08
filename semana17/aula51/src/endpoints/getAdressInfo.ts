import axios from "axios"
import { userInfo } from "../types"

export const getAddressInfo = async (
   zipCode: number
): Promise<userInfo | null> => {

   try {
      const response: any = await axios.get(
         `https://viacep.com.br/ws/${zipCode}/json/`
      )

      return {
         street: response.data.logradouro,
         neighbourhood: response.data.bairro,
         city: response.data.localidade,
         state: response.data.uf
      }
   } catch (error) {

      return null
   }
}