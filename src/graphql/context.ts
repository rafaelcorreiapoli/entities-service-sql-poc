import { IModels } from "../components/models";
import { IConfig } from '../components/config'

// export function getUser(ctx: Context) {
//   const Authorization = ctx.request.get('Authorization')
//   console.log(ctx.request)
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '')
//     console.log(token)
//     const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
//     return userId
//   }
// }

export interface IContext {
  models: IModels
  config: IConfig
}

export const getContext = (req, {
  models,
  config,
}): IContext => ({
  models,
  config
})