/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('todoList', (table) => {
    table.increments('id').primary()
    table.string('task')
    table.boolean('complete').defaultTo(false)
    table.string('priority').defaultTo('low');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}

export async function down(knex) {
  return knex.schema.dropTable('todoList')
}
