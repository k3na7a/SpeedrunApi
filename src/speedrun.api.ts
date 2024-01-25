import categories from './services/categories.service.ts'
import developers from './services/developers.service.ts'
import games from './services/games.service.ts'
import leaderboards from './services/leaderboards.service.ts'
import levels from './services/levels.service.ts'
import runs from './services/runs.service.ts'
import variables from './services/variables.service.ts'

class speedrunApiV1 {
  public static categories = categories
  public static developers = developers
  public static games = games
  public static leaderboards = leaderboards
  public static levels = levels
  public static runs = runs
  public static variables = variables
}

export default speedrunApiV1
