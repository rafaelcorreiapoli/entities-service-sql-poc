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

type Mutation {
  createTechnology(name: String!): Technology
}
`