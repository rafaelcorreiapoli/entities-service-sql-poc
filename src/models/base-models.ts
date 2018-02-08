import { createTechnologyModel } from "./Technology";
import { createProjectModel } from './Project'
import { createRelations } from "./Relations";
import { createTechnologyAssociationModel } from './TechnologyAssociation'
import { createUserModel } from './User'

export interface IBaseModels {
  technology: any
  project: any
  technologyAssociation: any
  User: any
}

export interface ICreateBaseModels {
  postgres: any
}

export const createBaseModels = async ({ postgres } : ICreateBaseModels): Promise<IBaseModels> => {
  const technology = await createTechnologyModel({ postgres })
  const project = await createProjectModel({ postgres })
  const technologyAssociation = await createTechnologyAssociationModel({ postgres })
  const User = await createUserModel({ postgres })

  return {
    technology,
    project,
    technologyAssociation,
    User
  }
}