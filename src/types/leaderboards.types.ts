// https://github.com/speedruncomorg/api/blob/master/version1/leaderboards.md

import { game } from './games.types'
import { category } from './categories.types.ts'
import { level } from './levels.types.ts'
import { variable } from './variables.types.ts'
import { run } from './runs.types.ts'
import { TDateISO } from './date.types.ts'

type values = { [key: string]: string }
type record = { place: number; run: run }
type link = { rel: string; uri: string }

type leaderboard = {
  weblink: string
  game: { data: game } | string
  category: { data: category } | string
  level: { data: level } | string | null
  platform: string | null
  region: string | null
  emulators: boolean | null
  ['video-only']: boolean | null
  timing: string | null
  values: values
  runs: Array<record>
  links: Array<link>
  variables?: { data: Array<variable> }
}

type leaderboardParams = {
  [key: `var-${string}`]: string // additional custom variable values
  top?: number // only return the top N places (this can result in more than N runs!)
  platform?: string // platform ID; when given, only returns runs done on that particular platform
  region?: string // region ID; when given, only returns runs done in that particular region
  emulators?: boolean // when not given, real devices and emulators are shown. When set to a true value, only emulators are shown, else only real devices are shown
  ['video-only']?: boolean // false by default; when set to a true value, only runs with a video will be returned
  timing?: 'realtime' | 'realtime_noloads' | 'ingame' // controls the sorting; can be one of realtime, realtime_noloads or ingame
  date?: TDateISO // ISO 8601 date string; when given, only returns runs done before or on this date
}

enum leaderboardEmbeds {
  GAME = 'game', // will embed the full game resource.
  CATEGORY = 'category', // will embed the category used for the leaderboard.
  LEVEL = 'level', // will embed the level used for the leaderboard.
  PLAYERS = 'players', // will add a new players element to the leaderboard, containing a flat list of all players of all runs on the leaderboard.
  REGIONS = 'regions', // will add all used regions.
  PLATFORMS = 'platforms', // will add all used platforms.
  VARIABLES = 'variables' // will add all applicable variables for the chosen level/category.
}

export { leaderboard, leaderboardParams, leaderboardEmbeds }
