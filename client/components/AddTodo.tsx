import { useMutation,  useQueryClient } from '@tanstack/react-query'
import { addTask, } from '../apis/todoListAPI'
import { useState } from 'react'




function AddTodo() {
  const [todo, setTodo] = useState('')
  const queryClient = useQueryClient()
  const addTaskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  function handleAddtaskSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTaskMutation.mutate({ task: todo })
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleAddtaskSubmit}
        className="input-group mb-3"
      >
        <input
          className="form-control"
          placeholder="What needs to be done?"
          type="text"
          name="task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    </>
  )
}

export default AddTodo
