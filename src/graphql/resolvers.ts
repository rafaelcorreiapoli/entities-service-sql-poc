import { resolver } from 'graphql-sequelize'
import { IModels } from '../components/models';
import { getQueryResolver } from './resolvers/queries/query'
import { mutation } from './resolvers/mutation'
import { getTechnologyResolver } from './resolvers/queries/technology';
import { getProjectResolver } from './resolvers/queries/project';

export const getResolvers = (models: IModels) => {
  return {
    Query: getQueryResolver(models),
    Mutation: mutation,
    Project: getProjectResolver(models),
    Technology: getTechnologyResolver(models)
  }
}