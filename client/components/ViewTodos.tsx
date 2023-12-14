import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { deleteTask, getToDoList, updateTodo } from '../apis/todoListAPI'

const ViewTodos = () => {
  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getToDoList,
  })

  const queryClient = useQueryClient()

  const updateTaskMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  if (isError) {
    return <p>Tasks not found</p>
  }

  if (!tasks || isLoading) {
    return <p>Loading...</p>
  }
  console.log(tasks)
  return (
    <div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <label htmlFor="task" className="form-check-label">
              {task.task}
            </label>
            <div>
              <input
                className="form-check-label check-task"
                type="checkbox"
                name="task"
                checked={task.complete}
                onChange={() =>
                  updateTaskMutation.mutate({
                    ...task,
                    complete: !task.complete,
                  })
                }
              />
              <button
                onClick={() => deleteTaskMutation.mutate(task.id)}
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewTodos
