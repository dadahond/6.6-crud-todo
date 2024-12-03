import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import Modal from "../components/modal";
import { useState } from "react";

function Home({ todos, deleteTodo, editedTodo }) {
  const [todoId, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);

  return (
    <div className="mx-auto my-10 max-w-5xl">
      <ul className="grid grid-cols-1 gap-5 p-4 md:grid-cols-3">
        <Modal todo={todo} editedTodo={editedTodo} />
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.description.slice(0, 80)}...</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      setTodoId(todo.id);
                      setTodo(todo);
                      document.getElementById("edit-todo").showModal();
                    }}
                  >
                    <MdEdit />
                  </button>
                  <Link
                    to={`/read/${todo.id}`}
                    className="btn btn-neutral btn-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
