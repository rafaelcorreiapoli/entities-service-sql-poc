import { createSystem } from './components/system'
import { ENV } from './components/config';
import { stringToEnv } from './utils/string-to-env'
import { justSomeTests } from './just-some-tests/1'
import { getRoutes } from './routes'

const env: ENV = stringToEnv(process.env.NODE_ENV)

const main = async (env: ENV) => {
  const sys = await createSystem(env, getRoutes)
  justSomeTests(sys)
}

main(env).catch(err => {
  console.log(err)
})
