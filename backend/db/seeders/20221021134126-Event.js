module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      title: 'Турнир 1',
      description: 'инфо 1',
      photo: 'wertyuijkl;',
      createdAt: new Date(),
      updatedAt: new Date(),
      isTournament: true,
    },
    {
      title: 'Турнир 2',
      description: 'инфо 2',
      photo: 'sdgwerfgwreg;',
      createdAt: new Date(),
      updatedAt: new Date(),
      isTournament: true,
    },
    {
      title: 'Турнир 3',
      description: 'инфо 3',
      photo: 'dfwerf',
      createdAt: new Date(),
      updatedAt: new Date(),
      isTournament: true,
    },
    ], {});
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
