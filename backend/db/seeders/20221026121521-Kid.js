/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Kids',
      [
        {
          user_id: 1,
          name: 'Пётр',
          secondName: 'Петров',
          middleName: 'Петрович',
          birthDate: new Date(3600 * 24 * 1000),
          group_id: 1,
          photo: '/static/media/kid3.d53b930003b75e655347.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
