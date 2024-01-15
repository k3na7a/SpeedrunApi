import { sortable } from './sorting.types'

type names = {
  international: string
  japanese: string | null
}

type color = {
  light: string
  dark: string
}

type namestyle =
  | {
      style: 'solid'
      color: color
    }
  | {
      style: 'gradient'
      ['color-from']: color
      ['color-to']: color
    }

type _loc = {
  code: string
  names: names
}

type location = {
  country: _loc
  region: _loc | null
}

type uri = {
  uri: string
}

type link = {
  rel: string
  uri: string
}

type user = {
  id: string
  names: names
  weblink: string
  ['name-style']: namestyle
  role: 'user' | 'trusted' | 'moderator' | 'admin' | 'programmer' | 'banned'
  signup: Date | null
  location: location | null
  twitch: uri | null
  hitbox: uri | null
  youtube: uri | null
  twitter: uri | null
  speedrunslive: uri | null
  links: Array<link>
}

type userParams = {
  lookup?: string // when given, searches the value (case-insensitive exact-string match) across user names, URLs and social profiles; all other query string filters are disabled when this is given
  name?: string // only returns users whose name/URL contains the given value; the comparision is case-insensitive
  twitch?: string // searches for Twitch usernames
  hitbox?: string // searches for Hitbox usernames
  twitter?: string // searches for Twitter usernames
  speedrunslive?: string // searches for SpeedRunsLive usernames
} & sortable<sortUsersBy>

enum sortUsersBy {
  NAME_INT = 'name.int', // (default) sorts alphanumerically by the international name
  NAME_JAP = 'name.jap', // sorts alphanumerically by the japanese name
  SIGNUP = 'signup', // sorts by the signup date
  ROLE = 'role' // sorts by the user role
}

export { user, userParams, sortUsersBy }
