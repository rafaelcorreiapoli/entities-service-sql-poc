import * as Sequelize from 'sequelize'

export const createUserModel = ({ postgres }) => {
  const User = postgres.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    scopes: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
  });
  return User.sync({force: true})
}
