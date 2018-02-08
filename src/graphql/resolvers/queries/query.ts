import { resolver } from 'graphql-sequelize'
import { IModels } from '../../../components/models';

export const getQueryResolver = (models: IModels) => {
  const technologyResolver = resolver(models.technology)
  const technologiesResolver = resolver(models.technology, {
    list: true
  })
  const projectResolver = resolver(models.project)
  const projectsResolver = resolver(models.project, {
    list: true
  })

  return {
    technology: technologyResolver,
    technologies: technologiesResolver,
    project: projectResolver, 
    projects: projectsResolver
  }
}