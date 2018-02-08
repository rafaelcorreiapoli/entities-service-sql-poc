import * as Sequelize from 'sequelize'

export const createProjectModel = ({ postgres }) => {
  const Project = postgres.define('project', {
    name: {
      type: Sequelize.STRING
    },
  });
  return Project.sync()
}
