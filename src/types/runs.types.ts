// https://github.com/speedruncomorg/api/blob/master/version1/runs.md

type values = { [key: string]: string }
type uri = { uri: string }
type videos = { links: Array<uri> }
type link = { rel: string; uri: string }

type status = {
  status: string
  examiner: string
  ['verify-date']: Date
}

type times = {
  primary: string
  primary_t: number
  realtime: string | null
  realtime_t: number
  realtime_noloads: string | null
  realtime_noloads_t: number
  ingame: string | null
  ingame_t: number
}

type system = {
  platform: string
  emulated: boolean
  region: string
}

type run = {
  id: string
  weblink: string
  game: string
  category: string
  videos: videos | null
  comment: string
  status: status
  date: string | null
  submitted: Date
  times: times
  system: system
  splits: link | null
  values: values
}

type runParams = {
  user?: string // user ID; when given, only returns runs played by that user
  guest?: string // when given, only returns runs done by that guest
  examiner?: string // user ID; when given, only returns runs examined by that user
  game?: string // game ID; when given, restricts to that game
  level?: string // level ID; when given, restricts to that level
  category?: string // category ID; when given, restricts to that category
  platform?: string // platform ID; when given, restricts to that platform
  region?: string // region ID; when given, restricts to that region
  emulated?: boolean // when 1, yes or true, only games run on emulator will be returned
  status?: 'new' | 'verified' | 'rejected' // filters by run status; new, verified and rejected are possible values for this parameter
}

enum runEmbeds {
  GAME = 'game', // will embed the full game resource.
  CATEGORY = 'category', // will embed the category in which the run was done.
  LEVEL = 'level', // will embed the level in which the run was done. This can be empty if it's a full-game run.
  PLAYERS = 'players', // players will replace the players field with the full user/guest resources of the participating players. Each of those players will have the rel field just as if there was no embedding at all, so you can easily distinguish between users and guests (without resorting to logic like "if there's an ID, it must be a user").
  REGION = 'region', // will embed the full region resource. This can be empty if no region was set for the run.
  PLATFORM = 'platform' // will embed the full platform resource. This can be empty if no platform was set for the run.
}

export { run, runParams, runEmbeds }
