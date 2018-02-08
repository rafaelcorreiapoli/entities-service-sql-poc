import * as Sequelize from 'sequelize'

export const createTechnologyModel = ({ postgres }) => {
  const Technology = postgres.define('technology', {
    name: {
      type: Sequelize.STRING
    },
  });
  return Technology.sync()
}
