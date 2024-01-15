enum direction {
  ASC = 'asc',
  DESC = 'desc'
}

type sortable<order> = {
  orderBy?: order
  direction?: direction
}

export { direction, sortable }
