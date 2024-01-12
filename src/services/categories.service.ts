import { AxiosResponse } from 'axios'

import { instance } from '../config/speedrun.config.ts'

import { category, categoryEmbeds } from '../types/categories.types.ts'
import { leaderboard } from '../types/leaderboards.types.ts'
import { variable } from '../types/variables.types.ts'

class categories {
  // GET /categories/{category}
  // This will retrieve a single category, identified by its ID.
  public static async getCategory(categoryId: string): Promise<category> {
    return instance
      .get<category>(`categories/${categoryId}`, {
        params: { embed: [categoryEmbeds.VARIABLES, categoryEmbeds.GAME].join(',') }
      })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /categories/{category}/variables
  // This will retrieve all variables that are applicable to the given category.
  public static async getVariables(categoryId: string): Promise<Array<variable>> {
    return instance
      .get<Array<variable>>(`categories/${categoryId}/variables`)
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /categories/{category}/records
  // This will retrieve the records (first three places) of the given category. If it's a full-game category, the result will be a list containing one leaderboard.
  public static async getRecords(
    categoryId: string,
    params?: { top?: number; ['skip-empty']: boolean }
  ): Promise<Array<leaderboard>> {
    return instance
      .get<Array<leaderboard>>(`categories/${categoryId}/records`, { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }
}

export default categories

//#region @examples
// const category: category = await speedrunApiV1.categories.getCategory('w20z0z8d')
// const variables: Array<variable> = await speedrunApiV1.categories.
// const records: Array<leaderboard> = await speedrunApiV1.categories.
//#endregion
