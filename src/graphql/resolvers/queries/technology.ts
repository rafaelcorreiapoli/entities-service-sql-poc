import { IModels } from '../../../components/models'
import { resolver } from 'graphql-sequelize'

export const getTechnologyResolver = (models: IModels) => {
  return {
    projects: resolver(models.technologyProjects, {
      list: true
    }),
    childTechnologies: resolver(models.technologyChildren),
    parentTechnologies: resolver(models.technologyParents)
  }
}