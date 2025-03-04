/**
 * Função de migração para criar a tabela 'veiculo'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("veiculo", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("cidade").notNullable();
    table.string("dataCriação").notNullable;
    table.string("veiculo").notNullable();
    table.string("quilometragem").notNullable();
    table.string("combustivel").notNullable();
    table.float("preco").notNullable();
    table.string("motorizacao").notNullable();
    table.date("ano").notNullable();
    table
      .bigInteger("usuarioId")
      .index()
      .notNullable()
      .references("id")
      .inTable("sign")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    table.date("data").defaultTo(knex.raw("CURRENT_DATE")).notNullable();
  });
};

/**
 * Função de migração para desfazer a criação da tabela 'veiculo'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTableIfExists("veiculo");
};
