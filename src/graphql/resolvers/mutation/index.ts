import { technology } from './technology'
import { auth } from './auth'
export const mutation = {
  ...technology,
  ...auth
}