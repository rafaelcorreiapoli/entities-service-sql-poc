import { GraphQLServer } from 'graphql-yoga'
import { typeDefs } from '../graphql/type-defs'
import { getResolvers } from '../graphql/resolvers';
import { IModels } from './models'
import { IConfig } from './config'
import { getContext } from '../graphql/context'

export interface ICreateService {
  models: IModels
  config: IConfig
}

export type IService = any

export const createService = async ({
  config,
  models,
}: ICreateService): Promise<IService> => {
  const resolvers = getResolvers(models)
  const server = new GraphQLServer({ typeDefs, resolvers, context: (req) => getContext(req, { models, config }) })
  return server.start({
    port: config.service.port
  },  () => console.log(`Server is running on localhost:${config.service.port}`))
}