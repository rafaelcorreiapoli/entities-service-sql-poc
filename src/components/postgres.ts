import * as Sequelize from 'sequelize'
import { ISystem } from './system';
import { IConfig } from './config'

export interface ICreatePostgres {
  config: IConfig
}
export const createPostgres = async ({
  config
}: ICreatePostgres): Promise<any> => {
  const {
    database,
    username,
    password,
    host,
    port
  } = config.postgres
  
  const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }); 
  
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    throw new Error(err)
  }

  return sequelize
}
