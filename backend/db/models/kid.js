const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Kid extends Model {
    static associate({ User, Group, Like }) {
      Kid.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' });
      Kid.belongsTo(Group, { foreignKey: 'group_id', onDelete: 'cascade' });
      Kid.hasMany(Like, { foreignKey: 'kid_id', onDelete: 'cascade' });
    }
  }
  Kid.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.TEXT,
    },
    secondName: {
      type: DataTypes.TEXT,
    },
    middleName: {
      type: DataTypes.TEXT,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Groups',
        key: 'id',
      },
    },
    photo: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Kid',
  });
  return Kid;
};
