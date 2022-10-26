module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {

          title: 'Уровень "Старт"',
          img: '/static/media/kid1.01295ece8628686bfb22.jpeg',
          info: 'Дети начинают с изучения правил',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Конь"',
          img: '/static/media/kid2.89dc97c46ae080578e3d.jpeg',
          info: 'Kon info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ладья"',
          img: '/static/media/kid3.d53b930003b75e655347.jpeg',
          info: 'Ladiya info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Пешка"',
          img: '/static/media/kid3.d53b930003b75e655347.jpeg',
          info: 'Peshka info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ферзь"',
          img: '/static/media/kid3.d53b930003b75e655347.jpeg',
          info: 'Ferz info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ладья" и "Ферзь"',
          img: '/static/media/kid3.d53b930003b75e655347.jpeg',
          info: 'Опытные игроки, уже имеющие юношеские разряды',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
