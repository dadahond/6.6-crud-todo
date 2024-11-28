import { useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Create from "./pages/Create";
import Home from "./pages/Home";

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

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home todos={todos} deleteTodo={deleteTodo} />,
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
