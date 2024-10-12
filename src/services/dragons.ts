import axios from "axios"
import _ from "lodash";
import { capitalizeFirstLetter } from "../utils/capitalize-first-letter";
import { DragonInfoType } from "../pages/DragonInfo/model";

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

  async updateDragonById(dragonId: string | number, body: DragonInfoType) {
    try {
      const response = await axios.put(`${this.url}/${dragonId}`, {...body})

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw Error('Erro ao atualizar dragão por Id!')
    }
  }

  async createDragon(body: DragonInfoType) {
    try {
      const response = await axios.post(this.url, {...body})

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw Error('Erro ao criar dragão!')
    }
  }
}

export default DragonsService