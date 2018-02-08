import { resolver } from 'graphql-sequelize'
import { IModels } from '../components/models';
import { auth } from './resolvers/mutation/auth';
import { technology } from './resolvers/mutation/technology';

export const getResolvers = (models: IModels) => {
  const technologyResolver = resolver(models.technology)
  const technologiesResolver = resolver(models.technology, {
    list: true
  })
  const projectResolver = resolver(models.project)
  const projectsResolver = resolver(models.project, {
    list: true
  })
  
  return {
    Query: {
      technology: technologyResolver,
      technologies: technologiesResolver,
      project: projectResolver, 
      projects: projectsResolver
    },
    Mutation: {
      ...technology,
      ...auth
    },
    Project: {
      technologies: resolver(models.projectTechnologies, {
        list: true
      })
    },
    Technology: {
      projects: resolver(models.technologyProjects, {
        list: true
      }),
      childTechnologies: resolver(models.technologyChildren),
      parentTechnologies: resolver(models.technologyParents)
    }
  }
}