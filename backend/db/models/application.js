const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Application.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    kidName: {
      type: DataTypes.TEXT,
    },
    birthDate: {
      type: DataTypes.TEXT,
    },
    parentName: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.TEXT,
    },
    experience: {
      type: DataTypes.TEXT,
    },
    isChecked: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};
