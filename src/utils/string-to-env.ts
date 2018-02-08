import { ENV } from '../components/config'
export const stringToEnv = (envStr: String) => {
  switch (envStr) {
    case 'development': default: return ENV.dev
    case 'production': return ENV.prod
    case 'test': return ENV.test
  }
}