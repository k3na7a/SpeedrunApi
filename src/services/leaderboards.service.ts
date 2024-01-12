import { AxiosResponse } from 'axios'

import { leaderboardParams, leaderboardEmbeds, leaderboard } from '../types/leaderboards.types.ts'
import { instance } from '../config/speedrun.config.ts'

class leaderboards {
  // GET /leaderboards/{game}/category/{category}
  // This will return a full-game leaderboard. The game and category can be either IDs or the respective abbreviations.
  public static async getLeaderboardByCategory(
    gameId: string,
    categoryId: string,
    params?: leaderboardParams
  ): Promise<leaderboard> {
    return instance
      .get<leaderboard>(`leaderboards/${gameId}/category/${categoryId}`, {
        params: {
          ...params,
          embed: [leaderboardEmbeds.GAME, leaderboardEmbeds.CATEGORY, leaderboardEmbeds.VARIABLES].join(',')
        }
      })
      .then((response: AxiosResponse) => response.data['data'])
  }
}

export default leaderboards

//#region @examples
// const leaderboard = await speedrunApiV1.leaderboards.getLeaderboardByCategory(
//   'kdkrvl6m', // Final Fantasy VII
//   'w20z0z8d', // PSX Disc
//   {
//     top: 10,
//     'var-9l754781': '4lx5v731', // PSX Disc Category : Any% No Slots
//     'var-wl3973wl': 'mlngd4o1' // Turbo : True
//   }
// )
//#endregion
