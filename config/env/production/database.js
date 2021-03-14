const parse = require('pg-connection-string').parse;
const config = require(process.env.HEROKU_POSTGRESQL_MAROON_URL);


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "ec2-35-169-184-61.compute-1.amazonaws.com",
        port: 5432,
        database: "d3d9tcukrk5fgh",
        username: "mwtwuvkwtrqpir",
        password: "42f03376af67a349fe2b1308f341cd71ce8bc037466bf062bc365ad4dbe28047",
	ssl: {
		rejectUnauthorized: false,
	}
      },
      options: {
		ssl:true,
      },
    },
  },
});
