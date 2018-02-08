import { technology } from './technology'
import { auth } from './auth'
import { project } from './project';
export const mutation = {
  ...technology,
  ...auth,
  ...project,
}