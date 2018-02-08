import { IBaseModels } from './base-models'

export interface IRelations {
  technologyProjects: any,
  projectTechnologies: any,
  technologyChildren: any,
  technologyParents: any,
}

export const createRelations = async (models: IBaseModels): Promise<IRelations> => {
  const {
    technology,
    technologyAssociation,
    project
  } = models
  
  const technologyProjects = technology.belongsToMany(project, {through: 'TechnologyProject'})
  const projectTechnologies = project.belongsToMany(technology, {through: 'TechnologyProject'})

  const technologyChildren = await technology.belongsToMany(technology, {
    through: technologyAssociation,
    as: 'childTechnologies',
    foreignKey: 'parentId'
  })

  const technologyParents = await technology.belongsToMany(technology, {
    through: technologyAssociation,
    as: 'parentTechnologies',
    foreignKey: 'childId'
  })

  await technology.sync()
  await project.sync()

  return {
    technologyProjects,
    projectTechnologies,
    technologyChildren,
    technologyParents
  }
}
