module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      title: 'Турнир дошкольников',
      description: 'Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц 5000 руб. — 8 занятий по 60 минут за текущий месяц',
      photo: '/static/media/kid1.01295ece8628686bfb22.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
      isTournament: true,
    },
    {
      title: 'Осенний турнир школьников',
      description: 'Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц 5000 руб. — 8 занятий по 60 минут за текущий месяц',
      photo: '/static/media/kid2.89dc97c46ae080578e3d.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
      isTournament: true,
    },
    {
      title: 'Турнир в ДК',
      description: 'Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц 5000 руб. — 8 занятий по 60 минут за текущий месяц',
      photo: '/static/media/kid3.d53b930003b75e655347.jpeg',
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
