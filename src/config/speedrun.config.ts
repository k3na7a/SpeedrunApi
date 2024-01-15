import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.speedrun.com/api/v1/',
  timeout: 1000,
  headers: { ['Content-Type']: 'application/json' }
})

export { instance }
