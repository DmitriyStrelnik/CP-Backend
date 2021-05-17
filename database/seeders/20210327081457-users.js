'use strict';

const bcrypt= require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
    {
      firstName:'John',
      lastName:'D',
      email:'John.S@gmail.com',
      password:bcrypt.hashSync('secret', 10),
      gender:'male'
    },
    {
      firstName:'Jo',
      lastName:'jo',
      email:'JoJo@gmail.com',
      password:bcrypt.hashSync('secret', 10),
      gender:'male'
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Users', null, {});
  }
};
