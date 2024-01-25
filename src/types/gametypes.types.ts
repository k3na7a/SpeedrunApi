import { sortable } from './sorting.types'

type link = {
  rel: string
  uri: string
}

type gametype = {
  id: string
  name: string
  links: link[]
}

type gametypeParams = {} & sortable<orderGametypesBy>

enum orderGametypesBy {
  NAME = 'name' // (default) sorts alphanumerically by the developer name
}

export { gametype, gametypeParams, orderGametypesBy }
