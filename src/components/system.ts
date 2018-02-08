import { createPostgres } from "./postgres";
import { createRelations } from "../models/Relations";
import { createService } from "./service";
import { newConfig } from './config'
import { IModels, createModels } from './models'

export interface ISystem {
  config: any,
  models: IModels,
  postgres: any,
  service: any,
}

export const createSystem = async (env): Promise<ISystem> => {
  const config = await newConfig(env)
  const postgres = await createPostgres({
    config
  })
  
  const models = await createModels({
    postgres,
  })

  const service = await createService({
    config,
    models,
  })

  await postgres.sync({
    force: true,
  });

  return {
    postgres,
    service,
    models,
    config
  }
}