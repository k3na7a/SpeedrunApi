// https://github.com/speedruncomorg/api/blob/master/version1/levels.md

import { paginated } from './pagination.types'
import { sortable } from './sorting.types'

type link = {
  rel: string
  uri: string
}

type level = {
  id: string
  name: string
  weblink: string
  rules: string
  links: Array<link>
}

type recordsParams = {
  top?: number // only return the top N places (this can result in more than N runs!); this is set to 3 by default
  ['skip-empty']?: boolean // when set to a true value, empty leaderboards will not show up in the result
} & paginated

type categoriesParams = {
  miscellaneous?: boolean
} & sortable<orderCategoriesBy>

enum orderCategoriesBy {
  NAME = 'name', // sorts alphanumerically by the category name
  MISCELLANEOUS = 'miscellaneous', // sorts by miscellaneous flag
  POS = 'pos' // (default) uses the order as defined by the game moderator
}

enum levelsEmbeds {
  CATEGORIES = 'categories',
  VARIABLES = 'variables'
}

export { level, recordsParams, levelsEmbeds, orderCategoriesBy, categoriesParams }
