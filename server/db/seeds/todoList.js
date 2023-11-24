/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todoList').del()

  // Inserts seed entries
  await knex('todoList').insert([
    {
      id:1,
      task: 'Coding',
      complete: false,
      priority: 'high'
    },
    {
      id:2,
      task: 'Gardening',
      complete: false,
      priority: 'low'
    },
  ])
}