import { resolver } from 'graphql-sequelize'
import { IModels } from '../components/models';

export const getResolvers = (models: IModels) => {
  const technologyResolver = resolver(models.technology)
  const technologiesResolver = resolver(models.technology, {
    list: true
  })
  const projectResolver = resolver(models.project)
  const projectsResolver = resolver(models.project, {
    list: true,
  })
  
  return {
    Query: {
      technology: technologyResolver,
      technologies: technologiesResolver,
      project: projectResolver, 
      projects: projectsResolver
    },
    Mutation: {
      createTechnology: (parent, { name }, { user }, info) => {
        return {
          name,
        }
      }
    },
    Project: {
      technologies: resolver(models.projectTechnologies, {
        list: true,
        dataLoader: true
      })
    },
    Technology: {
      projects: resolver(models.technologyProjects, {
        list: true,
        dataLoader: true
      }),
    }
  }
}