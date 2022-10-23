module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.TEXT,
      },
      secondName: {
        type: Sequelize.TEXT,
      },
      middleName: {
        type: Sequelize.TEXT,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id',
        },
      },
      photo: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kids');
  },
};
