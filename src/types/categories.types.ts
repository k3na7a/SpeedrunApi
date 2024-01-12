// https://github.com/speedruncomorg/api/blob/master/version1/categories.md

import { game } from './games.types'
import { variable } from './variables.types'

type players = {
  type: 'exactly' | 'up-to'
  values: number
}

type link = {
  rel: string
  uri: string
}

type category = {
  id: string
  name: string
  weblink: string
  type: 'per-game' | 'per-level'
  rules: string | null
  players: players
  miscellaneous: boolean
  links: Array<link>
  variables?: { data: Array<variable> }
  game?: { data: game }
}

enum categoryEmbeds {
  GAME = 'game', // will include the game the category belongs to.
  VARIABLES = 'variables' // will embed the applicable variables for this category. See below for another way to get these and what applicable means.
}

enum categoryOrder {
  NAME = 'name', // sorts alphanumerically by the category name
  MANDATORY = 'mandatory', // sorts by mandatory flag
  ['USER-DEFINED'] = 'user-defined', // sorts by user-defined flag
  POS = 'pos' // uses the order as defined by the game moderator
}

export { category, categoryEmbeds, categoryOrder }
