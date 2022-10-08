const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});

// // MY SQL
// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "impc-strapi"),
//       user: env("DATABASE_USERNAME", "root"),
//       password: env("DATABASE_PASSWORD", "Admin@1234"),
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });

// POSTGRES
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "impc-db-01"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "123456"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
