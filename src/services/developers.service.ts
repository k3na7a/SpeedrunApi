import { AxiosResponse } from 'axios'
import { instance } from '../config/speedrun.config.ts'
import { developer, developerParams } from '../types/developers.types.ts'

class developers {
  // GET /developers
  // This will return all developers.
  public static async getDevelopers(params?: developerParams): Promise<developer[]> {
    return instance
      .get<developer[]>(`developers`, {
        params: { ...params }
      })
      .then((response: AxiosResponse) => response.data['data'])
  }

  // GET /developers/{developer}
  // This will retrieve a single developer, identified by its ID.
  public static async getDeveloper(developerId: string): Promise<developer> {
    return instance.get<developer>(`developers/${developerId}`).then((response: AxiosResponse) => response.data['data'])
  }
}

export default developers
