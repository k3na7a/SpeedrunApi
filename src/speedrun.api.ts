import categories from './services/categories.service'
import games from './services/games.service'
import leaderboards from './services/leaderboards.service'
import levels from './services/levels.service'

class speedrunApiV1 {
  public static categories = categories
  public static games = games
  public static leaderboards = leaderboards
  public static levels = levels
}

export default speedrunApiV1
