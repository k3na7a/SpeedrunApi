import { sortable } from './sorting.types'

type link = {
  rel: string
  uri: string
}

type developer = {
  id: string
  name: string
  links: link[]
}

type developerParams = {} & sortable<orderDevelopersBy>

enum orderDevelopersBy {
  NAME = 'name' // (default) sorts alphanumerically by the developer name
}

export { developer, developerParams, orderDevelopersBy }
