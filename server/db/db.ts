import knexfile from './knexfile.js'
import knex from 'knex'
import {
  todoListFormData,
  todoListDataType,
} from '../../client/Model/todoListData.js'

const db = knex(knexfile.development)

export async function getToDoList() {
  const tasks = await db('todoList').select(
    'task',
    'complete',
    'priority',
    'id'
  )

  return tasks
}

export async function AddTodo(todo: todoListFormData) {
  const task = await db('todoList').insert({task:todo.task})
  console.log(task)
  return task
}

export async function checkoffTodo(data: todoListDataType) {
  const task = await db('todoList')
    .where('id', data.id)
    .update({ ...data })

  return task
}

export async function deleteTask(id: number) {
  await db('todoList').where('id', id).del()
}
