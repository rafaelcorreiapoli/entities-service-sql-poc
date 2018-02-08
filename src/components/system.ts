import { createPostgres } from "./postgres";
import { createRelations } from "../models/Relations";
import { newService } from "./service";
import { newConfig } from './config'
import { IModels, createModels } from './models'
import { addResolveFunctionsToSchema } from "graphql-tools";
import { getRoutes } from "../routes";
import { newAWS } from './aws'
import { newSQS } from './sqs'

export interface ISystem {
  config: any,
  models: IModels,
  postgres: any,
  service: any,
}

export const createSystem = async (env, getRoutes): Promise<ISystem> => {
  const config = await newConfig(env)

  const aws = newAWS()
  const sqs = newSQS({
    aws
  })
  const postgres = await createPostgres({
    config
  })
  
  const models = await createModels({
    postgres,
  })

  // Gambiarra:
  const routes = getRoutes(models)

  const service = await newService(routes, {
    config,
    models,
    sqs,
  })

  await postgres.sync();

  return {
    postgres,
    service,
    models,
    config
  }
}