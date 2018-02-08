import { createTechnologyModel } from '../models/Technology'
import { createProjectModel } from '../models/Project'
import { createTechnologyAssociationModel } from '../models/TechnologyAssociation'
import { ISystem } from './system'
import { IRelations, createRelations } from '../models/Relations'
import { IBaseModels, ICreateBaseModels, createBaseModels } from '../models/base-models'

export type IModels = IBaseModels & IRelations

export interface ICreateModels {
  postgres: any
}

export const createModels = async ({ postgres }: ICreateModels): Promise<IModels> => {
  const baseModels: IBaseModels = await createBaseModels({ postgres })
  const relations: IRelations = await createRelations(baseModels)

  return {
    ...baseModels,
    ...relations,
  }
}