import { useState } from "react"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"

function App() {
  const [tasks, setTasks] = useState([])

  function handleAddTask(task) {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  return (
    <>
      <Header />
      <TaskForm onAddTask={handleAddTask} />

      <section className="max-w-lg mx-auto mt-8 px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="font-bold text-lg text-gray-900">{task.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              <p className="text-sm mt-2">
                <span className="font-medium">Priority:</span> {task.priority}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
