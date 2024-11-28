import { useState } from "react";
import { useNavigate } from "react-router-dom";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create({ setTodos }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast("Please complete all fields!");
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        title,
        description,
      },
    ]);
    navigate("/");
  };
  return (
    <div className="mx-auto my-10 w-96">
      <h2 className="mb-10 text-center text-5xl font-medium">Add New Todo</h2>
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
        <button className="btn btn-accent btn-block">Add</button>
      </form>
    </div>
  );
}

export default Create;
