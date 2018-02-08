import * as Sequelize from 'sequelize'

export const createTechnologyAssociationModel = ({ postgres }) => {
  const TechnologyAssociation = postgres.define('technologyAssociation', {
    parentId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    childId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  });
  return TechnologyAssociation.sync()
}
