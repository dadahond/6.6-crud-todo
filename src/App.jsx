import { useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Create from "./pages/Create";
import Home from "./pages/Home";
import ReadTodo from "./pages/ReadTodo";

const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };
  const editedTodo = (t) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == t.id) {
          return { ...t };
        } else {
          return todo;
        }
      });
    });
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home
              todos={todos}
              deleteTodo={deleteTodo}
              editedTodo={editedTodo}
            />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
        {
          path: "/read/:id",
          element: <ReadTodo todos={todos} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
