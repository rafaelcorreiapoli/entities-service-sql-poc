import * as graphqlHTTP from 'express-graphql'
import * as express from 'express'
import { getSchema } from './graphql/schema';
import { getContextFromReq } from './graphql/context'



export const getRoutes = (models) => {
  const routes = express.Router()
  const schema = getSchema(models)

  const context = 
  routes.use('/graphql', graphqlHTTP(async (req) => ({
    schema,
    graphiql: true,
    context: getContextFromReq(req),
  })))

  return routes
}