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
          title: 'Уровень "Конь"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Chess_piece_-_White_knight.JPG/800px-Chess_piece_-_White_knight.JPG',
          info: 'Kon info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ладья"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chess_piece_-_White_rook.JPG/800px-Chess_piece_-_White_rook.JPG',
          info: 'Ladiya info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Пешка"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chess_piece_-_White_pawn.JPG/800px-Chess_piece_-_White_pawn.JPG',
          info: 'Peshka info',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уровень "Ферзь"',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chess_piece_-_White_queen.jpg/800px-Chess_piece_-_White_queen.jpg',
          info: 'Ferz info',
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
