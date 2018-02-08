export const typeDefs = `
type Query {
  technology(id: ID!): Technology
  technologies: [Technology!]!
  project(id: ID!): Project
  projects: [Project]
}
type Project {
  id: ID! 
  name: String
  technologies: [Technology]
}

type Technology {
  id: ID!
  name: String
  projects: [Project]
  childTechnologies: [Technology]
  parentTechnologies: [Technology]
}

type User {
  email: String!
  name: String!
  scopes: [String!]!
}
type AuthPayload {
  user: User!
  token: String!
}

type Mutation {
  createTechnology(name: String!): Technology
  signup(email: String!, password: String!, name: String!): AuthPayload
}
`