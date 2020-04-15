//Configurações de acesso ao banco de dados da aplicação para cada ambiente (desenvolvimento, produção, etc)

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
