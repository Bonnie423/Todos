import request from 'superagent'
import { todoListDataType } from '../Model/todoListData'

export async function getToDoList() {
  const response = await request.get('/api/v1/tasks')

  return response.body as todoListDataType[]
}

interface newTask{
  task: string
}
export async function addTask(task: newTask) {
  console.log(task)
  const response = await request.post(`/api/v1/tasks/`).send( {task} )

  return response.body as todoListDataType[]
}

export async function updateTodo(data: todoListDataType) {
  const response = await request.patch(`/api/v1/tasks/`).send({ data })

  return response.body as todoListDataType[]
}

export async function deleteTask(id:number){
  const response = await request.delete(`/api/v1/tasks/`).send({ id })

  return response.body as todoListDataType[]
}