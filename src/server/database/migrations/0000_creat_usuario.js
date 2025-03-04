/**
 * Função de migração para criar a tabela 'usuarios'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("usuarios", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("cpf").notNullable();
    table.string("telefone").notNullable;
    table.string("email").unique().notNullable();
    table.string("cidade").notNullable();
    table.string("estado").notNullable();
    table.string("pais").notNullable();
    table.date("data").defaultTo(knex.raw("CURRENT_DATE")).notNullable();
  });
};

/**
 * Função de migração para desfazer a criação da tabela 'usuarios'
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTableIfExists("usuarios");
};
