import { resolver } from 'graphql-sequelize'
import { IModels } from '../components/models';

export const getResolvers = (models: IModels) => {
  const technologyResolver = resolver(models.technology)
  const technologiesResolver = resolver(models.technology)
  const projectResolver = resolver(models.project)
  const projectsResolver = resolver(models.project)
  
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
      technologies: resolver(models.projectTechnologies)
    },
    Technology: {
      projects: resolver(models.technologyProjects),
    }
  }
}