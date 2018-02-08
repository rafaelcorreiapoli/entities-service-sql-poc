import { IModels } from '../../../components/models'
import { resolver } from 'graphql-sequelize'

export const getProjectResolver = (models: IModels) => {
  return {
    technologies: resolver(models.projectTechnologies, {
      list: true
    })
  }
}