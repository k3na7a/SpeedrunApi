import { AxiosResponse } from 'axios'
import { instance } from '../config/speedrun.config.ts'
import { run, runParams } from '../types/runs.types.ts'

class runs {
  // GET /runs
  // This will return a list of all runs.
  public static async getRuns(params?: runParams): Promise<Array<run>> {
    return instance
      .get<Array<run>>('runs', { params: { ...params } })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /runs/{id}
  // This will retrieve a single run, identified by its ID.
  public static async getRunById(runId: string): Promise<run> {
    return instance.get<run>(`runs/${runId}`).then((response: AxiosResponse) => response.data['data'])
  }
}

export default runs
