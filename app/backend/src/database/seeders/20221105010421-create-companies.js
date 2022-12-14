module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('companies',
      [
        {
          "name": "Meezzy",
        },
        {
          "name": "Skipfire",
        },
        {
          "name": "Quatz",
        },
        {
          "name": "Bubblemix",
        },
        {
          "name": "Youtags",
        },
        {
          "name": "Nlounge",
        },
        {
          "name": "Edgeify",
        },
        {
          "name": "Divanoodle",
        },
        {
          "name": "Realblab",
        },
        {
          "name": "Jabberstorm",
        },
        {
          "name": "Twitterbridge",
        },
        {
          "name": "Photolist"
        },
        {
          "name": "Blogpad"
        },
        {
          "name": "Zooxo"
        },
        {
          "name": "Skajo"
        },
        {
          "name": "Gabcube"
        },
        {
          "name": "Twiyo"
        },
        {
          "name": "Jaxbean"
        }
      ],
      {},
      );
    },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  },
};