import * as express from 'express'
import { IConfig } from './config';
import { IModels } from './models';

interface IComponents {
  config: IConfig
  models: IModels
  sqs: any
}

export const newService = async (routes, components) => {
  const app = express();
  
  app.use((req, res, next) => {
    req.components = components
    next()
  })

  app.use('/', routes);

  return new Promise((resolve, reject) => {
    const server = app.listen(components.config.service.port, (err) => {
      if (err) {
        console.error(err)
        reject(err)
        return
      }
      console.log(`Server is running on port ${components.config.service.port}`)
      resolve(server)  
    });
  })
}
