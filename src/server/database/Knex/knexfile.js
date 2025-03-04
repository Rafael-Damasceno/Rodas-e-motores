import path from "path";
import { fileURLToPath } from "url";

// Obter __dirname em um módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do banco de dados
const commonConfig = {
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
};

const development = {
  ...commonConfig,
  client: "sqlite3",
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "database.sqlite"
    ),
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

const production = {
  ...development,
};

const test = {
  ...commonConfig,
  client: "sqlite3", // Ajuste conforme o banco de dados utilizado no ambiente de teste
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "test_database.sqlite"
    ),
  },
};

// Carregar a configuração correta dependendo do ambiente
const knexConfig = {
  development,
  production,
  test,
};

export default knexConfig; // Exporte o objeto inteiro
