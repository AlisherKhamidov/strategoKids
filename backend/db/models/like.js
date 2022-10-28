const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Kid, Event }) {
      Like.belongsTo(Kid, { foreignKey: 'kid_id', onDelete: 'cascade' });
      Like.belongsTo(Event, { foreignKey: 'event_id', onDelete: 'cascade' });
    }
  }
  Like.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    kid_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Kids',
        key: 'id',
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
