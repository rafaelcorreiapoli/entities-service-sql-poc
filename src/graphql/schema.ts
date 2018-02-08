import {  makeExecutableSchema } from 'graphql-tools'
import { getResolvers } from './resolvers';
import { IModels } from '../components/models'
import { typeDefs } from './type-defs'

export const getSchema = (models: IModels) => {
  const resolvers = getResolvers(models)
  return makeExecutableSchema({ typeDefs, resolvers })
}
