// https://github.com/speedruncomorg/api/blob/master/version1/levels.md

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
}

enum levelsEmbeds {
  CATEGORIES = 'categories',
  VARIABLES = 'variables'
}

export { level, recordsParams, levelsEmbeds }
