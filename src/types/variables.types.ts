// https://github.com/speedruncomorg/api/blob/master/version1/variables.md

type flags = { miscellaneous: false }
type scope = { type: 'global' | 'full-game' | 'all-levels' | 'single-level' }

type _values = {
  [key: string]: {
    label: string
    rules: string
    flags: flags
  }
}

type values = {
  values: _values
  default: string
}

type link = {
  rel: string
  uri: string
}

type variable = {
  id: string
  name: string
  category: string | null
  scope: scope
  mandatory: true
  ['user-defined']: false
  obsoletes: false
  values: values
  ['is-subcategory']: boolean
  links: Array<link>
}

export { variable }
