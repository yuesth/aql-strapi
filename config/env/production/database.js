const parse = require('pg-connection-string').parse;
const config = require(process.env.HEROKU_POSTGRESQL_MAROON_URL);


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
	ssl:false,
      },
    },
  },
});
