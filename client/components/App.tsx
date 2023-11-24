import AddTodo from './AddTodo.tsx'
import ViewTodos from './ViewTodos.tsx'

function App() {
  return (
    <>
      <div className='main'>
        <header className="header container">
          <h1>Todos</h1>
          <AddTodo />
          <ViewTodos />
        </header>
        <section className="main"></section>
        <footer className="footer"></footer>
      </div>
    </>
  )
}

export default App
