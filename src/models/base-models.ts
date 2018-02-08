import { createTechnologyModel } from "./Technology";
import { createProjectModel } from './Project'
import { createRelations } from "./Relations";
import { createTechnologyAssociationModel } from './TechnologyAssociation'

export interface IBaseModels {
  technology: any
  project: any
  technologyAssociation: any
}

export interface ICreateBaseModels {
  postgres: any
}

export const createBaseModels = async ({ postgres } : ICreateBaseModels): Promise<IBaseModels> => {
  const technology = await createTechnologyModel({ postgres })
  const project = await createProjectModel({ postgres })
  const technologyAssociation = await createTechnologyAssociationModel({ postgres })
  return {
    technology,
    project,
    technologyAssociation
  }
}