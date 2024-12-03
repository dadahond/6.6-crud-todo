import React, { useEffect } from "react";
import { useState } from "react";

function Modal({ todo, editedTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast("Please complete all fields!");
      return;
    }
    editedTodo({
      id: todo.id,
      title,
      description,
    });

    document.getElementById("edit-todo").close();
  };
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);
  return (
    <dialog id="edit-todo" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Title:</span>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={title}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description:</span>
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered mb-5 w-full"
              placeholder="Write smth..."
              value={description}
            ></textarea>
          </label>
          <div className="modal-action">
            <button className="btn btn-accent btn-sm">Submit</button>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => document.getElementById("edit-todo").close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
