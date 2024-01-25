import { sortable } from './sorting.types'

type link = {
  rel: string
  uri: string
}

type genre = {
  id: string
  name: string
  links: link[]
}

type genreParams = {} & sortable<orderGenresBy>

enum orderGenresBy {
  NAME = 'name' // (default) sorts alphanumerically by the developer name
}

export { genre, genreParams, orderGenresBy }
