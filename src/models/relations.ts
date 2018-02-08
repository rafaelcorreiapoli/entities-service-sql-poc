import { IBaseModels } from './base-models'

export interface IRelations {
  technologyProjects: any,
  projectTechnologies: any
}

export const createRelations = async (models: IBaseModels): Promise<IRelations> => {
  console.log(`relation`)
  const {
    technology,
    technologyAssociation,
    project
  } = models
  
  const technologyProjects = technology.belongsToMany(project, {through: 'TechnologyProject'})
  const projectTechnologies = project.belongsToMany(technology, {through: 'TechnologyProject'})

  await technology.belongsToMany(technology, {
    through: technologyAssociation,
    as: 'childTechnologies',
    foreignKey: 'parentId'
  })

  await technology.belongsToMany(technology, {
    through: technologyAssociation,
    as: 'parentTechnologies',
    foreignKey: 'childId'
  })

  await technology.sync()
  await project.sync()

  return {
    technologyProjects,
    projectTechnologies
  }
}
