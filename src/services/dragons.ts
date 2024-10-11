import axios from "axios"
import _ from "lodash";
import { capitalizeFirstLetter } from "../utils/capitalize-first-letter";

class DragonsService {
  url: string
  constructor() {
    this.url = import.meta.env.VITE_DRAGONS_URL
  }

  async getDragons() {
    try {
      const response = await axios.get(this.url)

      const capitalizedName = _.map(response.data, (item)=> ({...item, name: capitalizeFirstLetter(item.name), }))
      const ordered = _.orderBy(capitalizedName, 'name')
      
      return ordered
    } catch (error: unknown) {
      console.log(error)
      throw Error('Erro ao buscar dragões!')
    }
  }

  async getDragonById(dragonId: string | number) {
    try {
      const response = await axios.get(`${this.url}/${dragonId}`)

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw Error('Erro ao buscar dragão por Id!')
    }
  }

  async deleteDragonById(dragonId: string | number) {
    try {
      const response = await axios.delete(`${this.url}/${dragonId}`)

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw Error('Erro ao apagar dragão por Id!')
    }
  }
}

export default DragonsService