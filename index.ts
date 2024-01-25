import speedrunApiV1 from './src/speedrun.api.ts'

const game = await speedrunApiV1.games.getGameById('kdkrvl6m')
console.log(game)

export default speedrunApiV1
