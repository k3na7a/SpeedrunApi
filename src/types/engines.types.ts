import { sortable } from './sorting.types'

type link = {
  rel: string
  uri: string
}

type engine = {
  id: string
  name: string
  links: link[]
}

type engineParams = {} & sortable<orderEnginesBy>

enum orderEnginesBy {
  NAME = 'name' // (default) sorts alphanumerically by the developer name
}

export { engine, engineParams, orderEnginesBy }
