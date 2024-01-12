import { AxiosResponse } from 'axios'
import { instance } from '../config/speedrun.config.ts'
import { level, recordsParams } from '../types/levels.types.ts'
import { category } from '../types/categories.types.ts'
import { variable } from '../types/variables.types.ts'
import { leaderboard } from '../types/leaderboards.types.ts'

class levels {
  // GET /levels/{level}
  // This will retrieve a single level, identified by its ID.
  public static async getLevel(levelId: string): Promise<level> {
    return instance.get<level>(`levels/${levelId}`).then((response: AxiosResponse) => response.data['data'])
  }

  // GET /levels/{level}/categories
  // This will retrieve the applicable categories for the given level.
  public static async getCategories(levelId: string, params?: { miscellaneous: boolean }): Promise<Array<category>> {
    return instance
      .get<Array<category>>(`levels/${levelId}/categories`, { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /levels/{id}/variables
  // This will retrieve the applicable variables for the given level.
  public static async getVariables(levelId: string): Promise<Array<variable>> {
    return instance
      .get<Array<variable>>(`levels/${levelId}/variables`)
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /levels/{level}/records
  // This will retrieve the records (first three places) of the given level for all available categories.
  public static async getRecords(levelId: string, params?: recordsParams): Promise<Array<leaderboard>> {
    return instance
      .get<Array<leaderboard>>(`levels/${levelId}/records`, { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }
}

export default levels
