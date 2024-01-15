import categories from './services/categories.service'
import games from './services/games.service'
import leaderboards from './services/leaderboards.service'
import levels from './services/levels.service'
import runs from './services/runs.service'
import { variables } from './services/variables.service'

class speedrunApiV1 {
  public static categories = categories
  public static games = games
  public static leaderboards = leaderboards
  public static levels = levels
  public static runs = runs
  public static variables = variables
}

export default speedrunApiV1
