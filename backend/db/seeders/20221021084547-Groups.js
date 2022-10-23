module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          title: 'Уровень "Старт"',
          img: 'https://bgtrk.ru/upload/resize_cache/iblock/da8/600_6000_1/niy9sycag9vxkmf29dw2pc6ne6zmoct2.jpg',
          info: 'Дети начинают с изучения правил',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Пешка"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chess_piece_-_White_pawn.JPG/100px-Chess_piece_-_White_pawn.JPG',
          info: 'Дети, которые знакомы с основными правилами игры',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Конь"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Chess_piece_-_White_knight.JPG/100px-Chess_piece_-_White_knight.JPG',
          info: 'Дети уже умеют решать задания в один ход, овладели базовыми тактическими и стратегическими приёмами',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Слон"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chess_piece_-_White_bishop.JPG/100px-Chess_piece_-_White_bishop.JPG',
          info: 'Дети, уже решающие задания в 2−3 хода, владеющие разнообразными дебютами и приёмами',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ладья" и "Ферзь"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chess_piece_-_White_rook.JPG/100px-Chess_piece_-_White_rook.JPG',
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
