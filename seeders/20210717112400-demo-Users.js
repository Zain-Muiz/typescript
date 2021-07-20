'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {

  up: async (queryInterface) => {
    const password1 = await bcrypt.hash("fb1",8);
    const password2 = await bcrypt.hash("fb2",8);
    const password3 = await bcrypt.hash("fb3",8); 
    const password4 = await bcrypt.hash("fb4",8);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          firstName: 'First',
          lastName: 'Byte_1',
          email: 'fb1@test.com',
          password: password1
        },
        {
          id: uuidv4(),
          firstName: 'First',
          lastName: 'Byte_2',
          email: 'fb2@test.com',
          password: password2
        },
        {
          id: uuidv4(),
          firstName: 'First',
          lastName: 'Byte_3',
          email: 'fb3@test.com',
          password: password3
        },
        {
          id: uuidv4(),
          firstName: 'First',
          lastName: 'Byte_4',
          email: 'fb4@test.com',
          password: password4
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', {});
  }
};
