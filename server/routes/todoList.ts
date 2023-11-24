import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getToDoList()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).send('Tasks not found')
  }
})

router.post('/', async (req, res) => {
  try {
    const  {task}  = req.body
    console.log(task)
   
    const newTask = await db.AddTodo(task)
    
    res.json(newTask)
  } catch (err) {
    console.log(err)
    res.status(500).send('Tasks not added')
  }
})

router.patch('/', async (req, res) => {
  try {
    const updateTask = req.body.data
    const updatededTask = await db.checkoffTodo(updateTask)
    res.json(updatededTask)
  } catch (err) {
    console.log(err)
    res.status(500).send('Task not checked')
  }
})

router.delete('/', async (req, res) => {
  try {
    const id = Number(req.body.id)
    const tasks = await db.deleteTask(id)
    
    res.json(tasks)
  } catch (err) {
    res.status(500).send('Task not deleted')
  }
})

export default router
