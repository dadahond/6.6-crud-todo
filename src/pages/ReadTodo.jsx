import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadTodo({ todos }) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(todos.find((t) => t.id == Number(id)));
  }, [id]);

  return (
    <div className="card mx-auto mt-10 w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        {todo && <h2 className="card-title">{todo.title}</h2>}
        {todo && <p>{todo.description}</p>}
      </div>
    </div>
  );
}

export default ReadTodo;
