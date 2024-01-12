import axios from 'axios'

const baseURL = 'https://www.speedrun.com/api/v1/'
const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { ['Content-Type']: 'application/json' }
})

export { instance }
