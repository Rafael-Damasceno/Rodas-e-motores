/**
 * Função de migração para criar a tabela 'login'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("sign", (table) => {
    table.increments("id").primary();
    table.string("usuario").unique().notNullable();
    table.string("senha").notNullable();
    table
      .bigInteger("usuarioId")
      .index()
      .notNullable()
      .references("id")
      .inTable("usuarios")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    table.date("data").defaultTo(knex.raw("CURRENT_DATE")).notNullable(); // Apenas a data (YYYY-MM-DD)
  });
};

/**
 * Função de migração para desfazer a criação da tabela 'login'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTableIfExists("sign");
};
