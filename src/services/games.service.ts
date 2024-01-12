import { AxiosResponse } from 'axios'
import { instance } from '../config/speedrun.config.ts'
import { game, gameEmbeds, gamesParams, recordsParams } from '../types/games.types.ts'
import { category } from '../types/categories.types.ts'
import { leaderboard } from '../types/leaderboards.types.ts'
import { level } from '../types/levels.types.ts'
import { variable } from '../types/variables.types.ts'

class games {
  // GET /games
  // This will return a list of all games.
  public static async getGames(params?: gamesParams): Promise<Array<game>> {
    return instance
      .get<Array<game>>(`games`, { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}
  // This will retrieve a single game, identified by its ID. Instead of the game's ID, you can also specify the game's abbreviation.
  public static async getGameById(gameId: string): Promise<game> {
    return instance
      .get<game>(`games/${gameId}`, {
        params: { embed: [gameEmbeds.CATEGORIES, gameEmbeds.LEVELS, gameEmbeds.VARIABLES].join(',') }
      })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}/categories
  // This will retrieve all categories of a given game (the id can be either the game ID or its abbreviation).
  public static async getCategories(gameId: string, params?: { miscellaneous: boolean }): Promise<Array<category>> {
    return instance
      .get<Array<category>>(`games/${gameId}/categories`, { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}/levels
  // This will retrieve all levels of a given game (the id can be either the game ID or its abbreviation).
  public static async getLevels(gameId: string): Promise<Array<level>> {
    return instance.get<Array<level>>(`games/${gameId}/levels`).then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}/variables
  // This will retrieve all variables of a given game (the id can be either the game ID or its abbreviation). If you need only those applicable to certain categories or levels, look there.
  public static async getVariables(gameId: string): Promise<Array<variable>> {
    return instance
      .get<Array<variable>>(`games/${gameId}/variables`)
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}/romhacks
  // This will retrieve all games that have the given game (the id can be either the game ID or its abbreviation) set as their base game.
  public static async getRomhacks(gameId: string): Promise<Array<game>> {
    return instance
      .get<Array<game>>(`games/${gameId}/romhacks`)
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /games/{game}/records
  // This will retrieve the records (first three places) for every (category,level) combination of the given game.
  public static async getRecords(gameId: string, params?: recordsParams): Promise<Array<leaderboard>> {
    return instance
      .get<Array<leaderboard>>(`games/${gameId}/records`, {
        params: { ...params }
      })
      .then((response: AxiosResponse) => response.data['data'])
  }
}

export default games

//#region @examples
// const games: Array<game> = await speedrunApiV1.games.getGames({ name: 'Final Fantasy VII' })
// const game: game = await speedrunApiV1.games.getGameById('kdkrvl6m')
// const categories: Array<category> = await speedrunApiV1.games.getCategories('kdkrvl6m', { miscellaneous: false })
// const levels: Array<level> = await speedrunApiV1.games.getLevels('kdkrvl6m')
// const variables: Array<variable> = await speedrunApiV1.games.getVariables('kdkrvl6m')
// const romhacks: Array<game> = await speedrunApiV1.games.getRomhacks('kdkrvl6m')
// const records: Array<leaderboard> = await speedrunApiV1.games.getRecords('kdkrvl6m', { scope: 'full-game', miscellaneous: false, ['skip-empty']: true })
//#endregion
