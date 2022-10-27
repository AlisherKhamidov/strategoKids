module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {

          title: 'Уровень "Старт"',
          img: '/images/start.JPG',
          info: 'Дети начинают с изучения правил',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Пешка"',
          img: '/images/peshka.JPG',
          info: 'Дети, которые знакомы с основными правилами игры',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Конь"',
          img: '/images/IMG_6772.JPG',
          info: 'Дети уже умеют решать задания в один ход, овладели базовыми тактическими и стратегическими приёмами',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Слон"',
          img: '/images/IMG_6945.JPG',
          info: 'Дети, уже решающие задания в 2−3 хода, владеющие разнообразными дебютами и приёмами',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ладья" и "Ферзь"',
          img: '/images/IMG_6968.JPG',
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
