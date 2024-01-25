import { AxiosResponse } from 'axios'
import { variable } from '../types/variables.types.ts'
import { instance } from '../config/speedrun.config.ts'

class variables {
  // GET /variables/{id}
  // This will retrieve a single variable, identified by its ID.
  public static async getRunById(runId: string): Promise<variable> {
    return instance.get<variable>(`runs/${runId}`).then((response: AxiosResponse) => response.data['data'])
  }
}

export default variables
