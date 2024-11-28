import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home({ todos, deleteTodo }) {
  return (
    <div className="mx-auto my-10 max-w-5xl">
      <ul className="grid grid-cols-3 gap-5">
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
                  <Link to="" className="btn btn-neutral btn-sm">
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
