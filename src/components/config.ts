export enum ENV {
  dev = 'dev',
  prod = 'prod',
  test = 'test',
}

export interface IConfig {
  postgres: {
    database: string
    username: string
    password: string
    host: string
    port: number
  },
  service: {
    port: number
  },
  hashSecret: string
}
export const newConfig = (env: ENV): IConfig => {
  switch (env) {
    case ENV.dev:
    default:
      return {
        postgres: {
          database: 'postgres',
          username: 'postgres',
          password: 'mypass',
          port: 5432,
          host: 'localhost',
        },
        service: {
          port: 3000
        },
        hashSecret: 'Lalala'
      }
    case ENV.prod:
      return {
        postgres: {
          database: 'postgres',
          username: 'postgres',
          password: 'mypass',
          port: 5432,
          host: 'localhost',
        },
        service: {
          port: 3000
        },
        hashSecret: 'Lalala'
      }
    case ENV.test:
      return {
        postgres: {
          database: 'postgres',
          username: 'postgres',
          password: 'mypass',
          port: 5432,
          host: 'localhost',
        },
        service: {
          port: 3000
        },
        hashSecret: 'Lalala'
      }
  }
}